import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Gutes Preis-Leistungs-Verhältnis',
  'Erfahrenes, zuverlässiges Team',
  'Größtmögliche Flexibilität',
  'Schnelle Ausführung',
  'Diskret und vertrauensvoll',
  'Individuelle Reinigungskonzepte',
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-text', { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' } });
      gsap.fromTo('.about-image', { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.7, delay: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ padding: '130px 0', background: '#FFFFFF' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">

          <div className="about-text">
            <p className="font-body font-semibold text-xs uppercase tracking-[0.1em] text-teal mb-3">Über Amira</p>
            <h2 className="font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              Seit über 7 Jahren für<br />saubere Räume in Stuttgart.
            </h2>
            <p className="font-body text-[#475569] mt-5 text-lg leading-relaxed">
              Seit über 7 Jahren steht Amira Gebäudereinigung für zuverlässige Sauberkeit in Stuttgart und Umgebung. Unser qualifiziertes Team zeichnet sich durch Vertrauen, Sorgfalt und Flexibilität aus.
            </p>
            <p className="font-body text-[#475569] mt-4 leading-relaxed">
              Ob Büro, Treppenhaus, Fenster oder Unterhaltsreinigung: Wir übernehmen Ihre Reinigungsaufgaben gründlich, schnell und zu attraktiven Preisen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-teal" />
                  </div>
                  <span className="font-body font-medium text-[14px] text-[#0F1628]">{f}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); const el = document.querySelector('#contact'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 mt-9 font-body font-semibold text-sm text-white bg-teal hover:bg-teal-dark px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-[0_6px_20px_rgba(200,16,46,0.3)]"
            >
              Kostenloses Angebot einholen
            </a>
          </div>

          <div className="about-image relative">
            <div className="rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.1)]">
              <img
                src="/images/cleaner-portrait.jpg"
                alt="Amira Reinigungskraft"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-2 md:bottom-6 md:-right-6 bg-[#0F1628] text-white rounded-xl px-5 py-3.5 shadow-xl">
              <span className="font-display font-bold text-2xl">7+</span>
              <span className="font-body font-medium text-sm ml-2 text-white/80">Jahre Erfahrung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
