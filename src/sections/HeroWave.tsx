import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const vertexShader = `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform vec3 u_color;
uniform vec3 u_color2;
uniform vec3 u_color3;
uniform vec3 u_color4;
uniform vec3 u_color5;
uniform float u_speed;

varying vec2 vUv;

vec4 permute(vec4 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 1.0 / 7.0;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

float fbm(vec3 p) {
    float sum = 0.0;
    float amp = 1.0;
    float freq = 1.0;
    for (int i = 0; i < 6; i++) {
        sum += amp * snoise(p * freq);
        freq *= 2.0;
        amp *= 0.5;
    }
    return sum;
}

float dFdxFast(vec3 p, float dt) {
    return (fbm(p + vec3(dt, 0.0, 0.0)) - fbm(p - vec3(dt, 0.0, 0.0))) * 0.5 / dt;
}

float dFdyFast(vec3 p, float dt) {
    return (fbm(p + vec3(0.0, dt, 0.0)) - fbm(p - vec3(0.0, dt, 0.0))) * 0.5 / dt;
}

void main() {
    vec2 uv = vUv;
    float t = u_time * u_speed;
    vec3 p = vec3(uv * 4.0, t);

    float n1 = fbm(p);
    float n2 = fbm(p + vec3(n1 * 0.5, n1 * 0.5, 0.0));
    float n3 = fbm(p + vec3(n2 * 0.4 - 0.5, n2 * 0.4 + 0.5, 0.0));
    float pattern = n3;

    float eps = 0.01;
    float dx = dFdxFast(p, eps);
    float dy = dFdyFast(p, eps);
    vec3 normal = normalize(vec3(-dx, -dy, 1.0));

    vec3 lightDir = normalize(vec3(0.5, 0.8, 1.0));
    float diff = max(dot(normal, lightDir), 0.0);

    vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
    vec3 reflectDir = reflect(-lightDir, normal);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);

    vec3 baseColor = mix(u_color, u_color2, pattern);
    baseColor = mix(baseColor, u_color3, diff);
    baseColor = mix(baseColor, u_color4, spec);

    float finalPattern = smoothstep(0.0, 1.0, pattern);
    baseColor = mix(baseColor, u_color5, finalPattern * 0.5);
    baseColor *= diff;
    baseColor += spec * vec3(0.8);

    gl_FragColor = vec4(baseColor, 1.0);
}
`;

const colorPalettes = [
  { c1: new THREE.Color("#002B36"), c2: new THREE.Color("#0A1929"), c3: new THREE.Color("#2A4F5C"), c4: new THREE.Color("#0A3C5C"), c5: new THREE.Color("#00191F") },
  { c1: new THREE.Color("#331A0D"), c2: new THREE.Color("#CC661A"), c3: new THREE.Color("#7FE64D"), c4: new THREE.Color("#B233CC"), c5: new THREE.Color("#1A4DE6") },
  { c1: new THREE.Color("#4D0033"), c2: new THREE.Color("#1A337F"), c3: new THREE.Color("#B2661A"), c4: new THREE.Color("#33CC99"), c5: new THREE.Color("#E6B24D") },
  { c1: new THREE.Color("#1A1A33"), c2: new THREE.Color("#9999B3"), c3: new THREE.Color("#4D667F"), c4: new THREE.Color("#CCE6FF"), c5: new THREE.Color("#334D66") },
  { c1: new THREE.Color("#1A0000"), c2: new THREE.Color("#CC3333"), c3: new THREE.Color("#7F1A1A"), c4: new THREE.Color("#FF994D"), c5: new THREE.Color("#4D0D0D") },
  { c1: new THREE.Color("#00331A"), c2: new THREE.Color("#33B266"), c3: new THREE.Color("#1A7F4D"), c4: new THREE.Color("#99E67F"), c5: new THREE.Color("#004D26") },
  { c1: new THREE.Color("#0D0026"), c2: new THREE.Color("#4D1A99"), c3: new THREE.Color("#9933CC"), c4: new THREE.Color("#1AB2E6"), c5: new THREE.Color("#660080") },
  { c1: new THREE.Color("#261400"), c2: new THREE.Color("#E69933"), c3: new THREE.Color("#B2661A"), c4: new THREE.Color("#FFE67F"), c5: new THREE.Color("#7F4D00") },
  { c1: new THREE.Color("#001A26"), c2: new THREE.Color("#1A7F99"), c3: new THREE.Color("#00CCCC"), c4: new THREE.Color("#7FE6FF"), c5: new THREE.Color("#00334D") },
  { c1: new THREE.Color("#1A1A1A"), c2: new THREE.Color("#4DE680"), c3: new THREE.Color("#CC3399"), c4: new THREE.Color("#3399E6"), c5: new THREE.Color("#E6CC33") },
];

export default function HeroWave() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(new THREE.Color("#002B36"), 1);
    container.appendChild(renderer.domElement);

    let colorIndex = 0;

    const uniforms = {
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_resolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
      u_speed: { value: 0.05 },
      u_color: { value: colorPalettes[0].c1.clone() },
      u_color2: { value: colorPalettes[0].c2.clone() },
      u_color3: { value: colorPalettes[0].c3.clone() },
      u_color4: { value: colorPalettes[0].c4.clone() },
      u_color5: { value: colorPalettes[0].c5.clone() },
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const handleClick = () => {
      const nextIndex = (colorIndex + 1) % colorPalettes.length;
      const next = colorPalettes[nextIndex];
      gsap.to(uniforms.u_color.value, { r: next.c1.r, g: next.c1.g, b: next.c1.b, duration: 1, ease: "power2.inOut" });
      gsap.to(uniforms.u_color2.value, { r: next.c2.r, g: next.c2.g, b: next.c2.b, duration: 1, ease: "power2.inOut" });
      gsap.to(uniforms.u_color3.value, { r: next.c3.r, g: next.c3.g, b: next.c3.b, duration: 1, ease: "power2.inOut" });
      gsap.to(uniforms.u_color4.value, { r: next.c4.r, g: next.c4.g, b: next.c4.b, duration: 1, ease: "power2.inOut" });
      gsap.to(uniforms.u_color5.value, { r: next.c5.r, g: next.c5.g, b: next.c5.b, duration: 1, ease: "power2.inOut" });
      colorIndex = nextIndex;
    };

    container.addEventListener("click", handleClick);

    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.u_resolution.value.set(w, h);
    };
    window.addEventListener("resize", onResize);

    const cleanup = () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("click", handleClick);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };

    cleanupRef.current = cleanup;

    return () => {
      cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full cursor-pointer"
      role="img"
      aria-label="Animierter Wellenhintergrund"
    />
  );
}
