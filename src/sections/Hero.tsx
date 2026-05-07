import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Phone, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('.hero-eyebrow', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.15 })
        .fromTo('.hero-title',   { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 1.0 }, '-=0.4')
        .fromTo('.hero-sub',     { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
        .fromTo('.hero-cta',     { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo('.hero-glass',   { opacity: 0, x: 24 }, { opacity: 1, x: 0, duration: 0.9 }, '-=0.9')
        .fromTo('.hero-trust',   { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
    }, sectionRef);
    return () => ctx.kill();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={sectionRef} className="relative w-full overflow-hidden" style={{ minHeight: 700, height: '100vh' }}>

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-cleaning.jpg"
          alt="Professionelle Gebäudereinigung Stuttgart"
          className="w-full h-full object-cover"
          style={{ objectPosition: '60% center' }}
        />
        {/* Cinematic directional gradient — dark left for text, open right for image */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(105deg, rgba(6,8,18,0.97) 0%, rgba(6,8,18,0.90) 28%, rgba(6,8,18,0.65) 52%, rgba(6,8,18,0.28) 75%, rgba(6,8,18,0.10) 100%)',
        }} />
        {/* Bottom depth */}
        <div className="absolute inset-x-0 bottom-0 h-48" style={{
          background: 'linear-gradient(to top, rgba(6,8,18,0.70) 0%, transparent 100%)',
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1200px] mx-auto w-full px-5 md:px-8 flex items-center justify-between gap-8">

          {/* Left — text */}
          <div className="max-w-[600px]">

            <div className="hero-eyebrow inline-flex items-center gap-3 mb-8">
              <span className="w-7 h-px bg-teal" />
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                Gebäudereinigung · Stuttgart
              </span>
            </div>

            <h1
              className="hero-title font-display font-bold text-white"
              style={{ fontSize: 'clamp(3.2rem, 6.5vw, 5.75rem)', lineHeight: 1.0, letterSpacing: '-0.03em' }}
            >
              Sauberkeit,<br />
              <span className="text-white/75">die man spürt.</span>
            </h1>

            <p
              className="hero-sub font-body text-white/60 mt-7 max-w-[420px]"
              style={{ fontSize: 'clamp(1rem, 1.25vw, 1.1rem)', lineHeight: 1.85 }}
            >
              Professionelle Reinigung für Büros, Kanzleien und Wohnanlagen — zuverlässig, diskret, termingerecht.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-3 mt-10">
              <button
                onClick={() => scrollTo('#contact')}
                className="group inline-flex items-center justify-center gap-2.5 font-body font-semibold text-[15px] text-white bg-teal hover:bg-teal-dark px-8 py-[15px] rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(200,16,46,0.45)]"
              >
                Kostenloses Angebot
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
              <a
                href="tel:+491728060586"
                className="inline-flex items-center justify-center gap-2.5 font-body font-semibold text-[15px] text-white/85 border border-white/18 hover:border-white/35 hover:bg-white/[0.06] px-8 py-[15px] rounded-xl backdrop-blur-sm transition-all duration-200"
              >
                <Phone size={15} />
                0172 80 60 586
              </a>
            </div>

            <div className="hero-trust flex flex-wrap items-center gap-5 mt-10">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}
                </div>
                <span className="font-body text-[13px] font-semibold text-white/75">5,0 Google</span>
              </div>
              <span className="w-px h-3.5 bg-white/20" />
              <span className="font-body text-[13px] text-white/45">7+ Jahre Erfahrung</span>
              <span className="w-px h-3.5 bg-white/20" />
              <span className="font-body text-[13px] text-white/45">Stuttgart & Umgebung</span>
            </div>
          </div>

          {/* Right — floating glass review card (desktop only) */}
          <div className="hero-glass hidden lg:block flex-shrink-0 w-[265px]">
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.065)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.10)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.25)',
              }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={13} className="fill-amber-400 text-amber-400" />)}
                <span className="font-body font-bold text-sm text-white ml-1.5">5,0</span>
                <span className="font-body text-xs text-white/45 ml-1">Google</span>
              </div>
              <p className="font-body text-[14px] text-white/75 leading-relaxed italic">
                „Pünktlich, sorgfältig und immer freundlich. Unsere Praxis ist nach jeder Reinigung makellos sauber."
              </p>
              <div className="flex items-center gap-2.5 mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.09)' }}>
                <div className="w-8 h-8 rounded-full bg-[#0F1628] border border-white/15 flex items-center justify-center flex-shrink-0">
                  <span className="font-body font-bold text-xs text-white">S</span>
                </div>
                <div>
                  <p className="font-body font-semibold text-[13px] text-white/90">Sandra Becker</p>
                  <p className="font-body text-[11px] text-white/45">Praxismanagerin, Stuttgart</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-0.5 h-2 bg-white/35 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
