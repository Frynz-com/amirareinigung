import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 3000, suffix: '+', label: 'Durchgeführte Reinigungen' },
  { value: 100,  suffix: '%', label: 'Kundenzufriedenheit' },
  { value: 7,    suffix: '+', label: 'Jahre Erfahrung' },
  { value: 24,   suffix: '/7', label: 'Erreichbarkeit' },
];

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      onEnter: () => {
        if (animated.current) return;
        animated.current = true;
        const obj = { val: 0 };
        gsap.to(obj, { val: value, duration: 2, ease: 'power2.out',
          onUpdate: () => setDisplay(Math.round(obj.val)) });
      },
    });
    return () => trigger.kill();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-teal" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '-0.03em' }}>
        {display.toLocaleString('de-DE')}<span>{suffix}</span>
      </div>
      <p className="font-body text-sm text-[#64748B] mt-2">{label}</p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll('.stat-item');
      if (els?.length) {
        gsap.fromTo(els, { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FAFAF8]" style={{ padding: '80px 0', borderTop: '1px solid #EEE9E2', borderBottom: '1px solid #EEE9E2' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y-0 lg:divide-x lg:divide-[#EEE9E2]">
          {stats.map((s) => (
            <div key={s.label} className="stat-item lg:px-10 first:pl-0 last:pr-0">
              <AnimatedStat value={s.value} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
