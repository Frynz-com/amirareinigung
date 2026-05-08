import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Award, Users, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const industries = ['Kanzleien', 'Arztpraxen', 'Bürokomplexe', 'Hausverwaltungen', 'Gewerbeobjekte'];

const stats = [
  { icon: Award,      value: '7+',     label: 'Jahre Erfahrung',        sub: 'in Stuttgart & Region' },
  { icon: TrendingUp, value: '3.000+', label: 'Abgeschlossene Aufträge', sub: 'seit Gründung' },
  { icon: Users,      value: '50+',    label: 'Stammkunden',             sub: 'vertrauen uns dauerhaft' },
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

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <section id="about" ref={sectionRef} style={{ padding: '130px 0', background: '#FFFFFF' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Industry tags */}
        <div className="flex flex-wrap gap-2 mb-14">
          {industries.map((tag) => (
            <span key={tag} className="font-body text-[12px] font-medium text-[#64748B] border border-[#EEE9E2] bg-[#FAFAF8] px-3.5 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[54%_46%] gap-12 lg:gap-20 items-center">

          <div className="about-text">
            <p className="font-body font-semibold text-xs uppercase tracking-[0.1em] text-teal mb-4">Über Amira</p>
            <h2 className="font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.1rem)', lineHeight: 1.06, letterSpacing: '-0.02em' }}>
              Reinigung für Räume,<br />in denen Ihr Ruf zählt.
            </h2>
            <p className="font-body text-[#475569] mt-5 text-[17px] leading-relaxed">
              Kanzleien, Arztpraxen und Büros stellen besondere Anforderungen — an Diskretion, Termintreue und den respektvollen Umgang mit Arbeitsumgebungen. Seit über 7 Jahren sind wir auf genau diese Kunden spezialisiert.
            </p>
            <p className="font-body text-[#64748B] mt-4 leading-relaxed">
              Unser festes Team kennt Ihre Räume, Ihre Anforderungen und Ihre Abläufe. Das garantiert gleichbleibende Qualität — jeden Termin, ohne Ausnahme.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-px bg-[#EEE9E2] mt-10 rounded-2xl overflow-hidden border border-[#EEE9E2]">
              {stats.map(({ value, label, sub }) => (
                <div key={label} className="bg-white px-4 py-5 text-center group hover:bg-[#FAFAF8] transition-colors">
                  <p className="font-display font-bold text-[1.6rem] text-teal leading-none">{value}</p>
                  <p className="font-body font-semibold text-[12px] text-[#0F1628] mt-2 leading-tight">{label}</p>
                  <p className="font-body text-[11px] text-[#94A3B8] mt-0.5">{sub}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 mt-9 font-body font-semibold text-sm text-white bg-teal hover:bg-teal-dark px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-[0_6px_20px_rgba(200,16,46,0.3)]"
            >
              Kostenloses Angebot einholen <ArrowRight size={15} />
            </a>
          </div>

          <div className="about-image relative">
            <div className="rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.1)]">
              <img
                src="/images/cleaner-portrait.jpg"
                alt="Amira Reinigungsteam"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-2 md:bottom-6 md:-right-6 bg-[#0F1628] text-white rounded-2xl px-5 py-4 shadow-xl">
              <p className="font-display font-bold text-2xl">7+</p>
              <p className="font-body text-xs text-white/60 mt-0.5">Jahre Erfahrung</p>
            </div>
            {/* Top badge */}
            <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm border border-[#EEE9E2] rounded-xl px-4 py-2.5 shadow-sm">
              <p className="font-body font-semibold text-[12px] text-[#0F1628]">Diskret & vertrauensvoll</p>
              <p className="font-body text-[11px] text-[#94A3B8] mt-0.5">Für Kanzleien & Praxen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
