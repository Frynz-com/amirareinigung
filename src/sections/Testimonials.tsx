import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Markus Hoffmann',
    role: 'Kanzleiinhaber',
    company: 'Rechtsanwaltskanzlei, Stuttgart-Mitte',
    industry: 'Kanzlei',
    text: 'Amira reinigt unsere Kanzlei seit über einem Jahr verlässlich und diskret. Der Umgang mit unserem Mandantenbereich ist professionell — genau das, was wir für unser Haus brauchen. Die Ergebnisse überzeugen jeden Morgen aufs Neue.',
    rating: 5,
    initial: 'M',
  },
  {
    name: 'Sandra Becker',
    role: 'Praxismanagerin',
    company: 'Gemeinschaftspraxis, Stuttgart-West',
    industry: 'Arztpraxis',
    text: 'Pünktlich, sorgfältig und immer freundlich. Unsere Praxis ist nach jeder Reinigung makellos sauber. Das schätzen unsere Patienten sehr — der erste Eindruck stimmt.',
    rating: 5,
    initial: 'S',
  },
  {
    name: 'Thomas Gruber',
    role: 'Geschäftsführer',
    company: 'Immobilienverwaltung, Esslingen',
    industry: 'Hausverwaltung',
    text: 'Wir lassen mehrere Treppenhäuser und Gewerbeflächen regelmäßig von Amira reinigen. Kommunikation unkompliziert, Qualität konstant hoch. Rechnungsstellung professionell und pünktlich.',
    rating: 5,
    initial: 'T',
  },
  {
    name: 'Julia Maier',
    role: 'Büroleiterin',
    company: 'Steuerberatung, Vaihingen',
    industry: 'Büro',
    text: 'Sehr flexibel in der Terminplanung — Reinigung läuft immer nach Büroschluss, komplett ohne Störung des Betriebs. Das Preis-Leistungs-Verhältnis ist sehr gut. Empfehle Amira gerne weiter.',
    rating: 5,
    initial: 'J',
  },
  {
    name: 'Peter Schmitz',
    role: 'Geschäftsführer',
    company: 'Unternehmensberatung, Ludwigsburg',
    industry: 'Büro',
    text: 'Nach der Bauendreinigung war unser neues Büro sofort bezugsfertig. Schnelle, professionelle Arbeit — und ein festes Reinigungsteam, das mittlerweile unser Haus in- und auswendig kennt.',
    rating: 5,
    initial: 'P',
  },
];

const industryColors: Record<string, string> = {
  'Kanzlei':      'bg-[#F5F2EE] text-[#64748B] border-[#EEE9E2]',
  'Arztpraxis':   'bg-[#F5F2EE] text-[#64748B] border-[#EEE9E2]',
  'Hausverwaltung': 'bg-[#F5F2EE] text-[#64748B] border-[#EEE9E2]',
  'Büro':         'bg-[#F5F2EE] text-[#64748B] border-[#EEE9E2]',
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.test-inner', { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const featured = testimonials[0];
  const rest = testimonials.slice(1, 4);

  return (
    <section id="testimonials" ref={sectionRef} style={{ padding: '130px 0', background: '#F5F2EE' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 test-inner">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-14">
          <div>
            <p className="font-body font-semibold text-[11px] uppercase tracking-[0.16em] text-teal mb-4">Referenzen</p>
            <h2
              className="font-display font-bold text-[#0F1628]"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.1rem)', lineHeight: 1.06, letterSpacing: '-0.02em' }}
            >
              Was unsere Kunden<br />
              <span className="text-[#475569]">über uns sagen.</span>
            </h2>
            <p className="font-body text-[14px] text-[#64748B] mt-4 max-w-[380px] leading-relaxed">
              Kanzleien, Praxen und Büros, die auf Amira vertrauen — und es nicht mehr missen möchten.
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-3 flex-shrink-0">
            <div className="inline-flex items-center gap-2 bg-white border border-[#EEE9E2] rounded-full px-5 py-2.5">
              <div className="flex gap-0.5">{Array.from({length:5}).map((_,i) => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}</div>
              <span className="font-body font-semibold text-sm text-[#0F1628]">5,0 / 5</span>
              <span className="font-body text-sm text-[#94A3B8]">· Google</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Kanzleien', 'Arztpraxen', 'Büros', 'Hausverwaltungen'].map((tag) => (
                <span key={tag} className="font-body text-[11px] font-medium text-[#64748B] bg-white border border-[#EEE9E2] px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Featured testimonial */}
        <div className="bg-[#0F1628] rounded-2xl p-8 md:p-12 mb-5">
          <div className="flex items-center justify-between mb-6">
            <Quote size={36} className="text-white/15" />
            <span className={`font-body text-[11px] font-semibold uppercase tracking-wider border px-3 py-1 rounded-full ${industryColors[featured.industry] ?? ''} opacity-80`}>
              {featured.industry}
            </span>
          </div>
          <p
            className="font-display font-semibold text-white/90 leading-snug"
            style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.7rem)', lineHeight: 1.45 }}
          >
            „{featured.text}"
          </p>
          <div className="flex items-center justify-between mt-8 pt-7" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                <span className="font-body font-bold text-base text-white">{featured.initial}</span>
              </div>
              <div>
                <p className="font-body font-semibold text-[15px] text-white">{featured.name}</p>
                <p className="font-body text-[13px] text-white/45 mt-0.5">{featured.role} · {featured.company}</p>
              </div>
            </div>
            <Stars count={featured.rating} />
          </div>
        </div>

        {/* 3-col secondary — desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-5">
          {rest.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-7 border border-[#EEE9E2]">
              <div className="flex items-center justify-between mb-4">
                <Stars count={t.rating} />
                <span className="font-body text-[11px] font-semibold text-[#64748B] border border-[#EEE9E2] bg-[#FAFAF8] px-2.5 py-1 rounded-full">
                  {t.industry}
                </span>
              </div>
              <p className="font-body text-[14px] text-[#475569] leading-relaxed mb-6">„{t.text}"</p>
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid #F5F2EE' }}>
                <div className="w-8 h-8 rounded-full bg-[#0F1628] flex items-center justify-center flex-shrink-0">
                  <span className="font-body font-bold text-xs text-white">{t.initial}</span>
                </div>
                <div>
                  <p className="font-body font-semibold text-[13px] text-[#0F1628]">{t.name}</p>
                  <p className="font-body text-[12px] text-[#94A3B8]">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile slider */}
        <div className="lg:hidden">
          <div className="bg-white rounded-2xl p-6 border border-[#EEE9E2]">
            <div className="flex items-center justify-between mb-4">
              <Stars count={testimonials[active].rating} />
              <span className="font-body text-[11px] font-semibold text-[#64748B] border border-[#EEE9E2] bg-[#FAFAF8] px-2.5 py-1 rounded-full">
                {testimonials[active].industry}
              </span>
            </div>
            <p className="font-body text-[14px] text-[#475569] leading-relaxed mb-5">„{testimonials[active].text}"</p>
            <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid #F5F2EE' }}>
              <div className="w-8 h-8 rounded-full bg-[#0F1628] flex items-center justify-center flex-shrink-0">
                <span className="font-body font-bold text-xs text-white">{testimonials[active].initial}</span>
              </div>
              <div>
                <p className="font-body font-semibold text-[13px] text-[#0F1628]">{testimonials[active].name}</p>
                <p className="font-body text-[12px] text-[#94A3B8]">{testimonials[active].role}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-5">
            <button onClick={() => setActive(Math.max(0, active - 1))} disabled={active === 0}
              className="w-9 h-9 rounded-full border border-[#EEE9E2] bg-white flex items-center justify-center disabled:opacity-30">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${i === active ? 'w-5 bg-teal' : 'w-1.5 bg-[#D4CFCA]'}`} />
              ))}
            </div>
            <button onClick={() => setActive(Math.min(testimonials.length - 1, active + 1))} disabled={active === testimonials.length - 1}
              className="w-9 h-9 rounded-full border border-[#EEE9E2] bg-white flex items-center justify-center disabled:opacity-30">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
