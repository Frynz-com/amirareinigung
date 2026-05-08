import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-el', { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 82%' } });
    }, ref);
    return () => ctx.revert();
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="bg-[#FAFAF8]" style={{ padding: '100px 0', borderTop: '1px solid #EEE9E2' }}>
      <div className="max-w-[840px] mx-auto px-5 md:px-8 text-center">
        <p className="cta-el font-body font-semibold text-xs uppercase tracking-[0.12em] text-teal mb-4">
          Jetzt anfragen
        </p>
        <h2 className="cta-el font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: 1.1 }}>
          Kostenloses & unverbindliches Angebot
        </h2>
        <p className="cta-el font-body text-[#475569] mt-4 text-lg max-w-[520px] mx-auto leading-relaxed">
          Schildern Sie uns Ihren Bedarf — wir erstellen Ihnen innerhalb von 24 Stunden ein maßgeschneidertes Angebot.
        </p>
        <div className="cta-el flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a
            href="#contact"
            onClick={scrollTo}
            className="inline-flex items-center justify-center gap-2 font-body font-semibold text-base bg-teal hover:bg-teal-dark text-white px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,16,46,0.4)]"
          >
            Anfrage stellen <ArrowRight size={17} />
          </a>
          <a
            href="tel:+491728060586"
            className="inline-flex items-center justify-center gap-2 font-body font-semibold text-base text-[#0F1628] border border-[#EEE9E2] hover:border-[#0F1628] hover:bg-[#F5F2EE] px-8 py-4 rounded-xl transition-all duration-200"
          >
            <Phone size={17} /> 0172 80 60 586
          </a>
        </div>
        <div className="cta-el flex flex-wrap justify-center gap-x-8 gap-y-2 mt-10">
          {['Kostenlos & unverbindlich', 'Antwort in 24h', '7+ Jahre Erfahrung'].map((t) => (
            <span key={t} className="font-body text-sm text-[#94A3B8] flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#D4CFCA]" />{t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
