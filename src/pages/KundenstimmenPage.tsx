import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote, CheckCircle2, Building2, Briefcase, Heart, Home } from 'lucide-react';
import Contact from '../sections/Contact';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Dr. Markus Hoffmann',
    role: 'Rechtsanwalt & Kanzleiinhaber',
    company: 'Hoffmann & Partner Rechtsanwälte, Stuttgart',
    industry: 'Kanzlei',
    icon: <Briefcase size={14} />,
    rating: 5,
    quote: 'Amira reinigt unsere Kanzlei seit über vier Jahren. Was mich am meisten überzeugt: Das Team ist immer dasselbe, arbeitet absolut diskret und respektiert unsere Arbeitsumgebung. Akten, Mandantenunterlagen und sensible Bereiche werden nie angerührt. Höchste Professionalität.',
    detail: 'Wöchentliche Unterhaltsreinigung + monatliche Grundreinigung',
  },
  {
    name: 'Dr. Sabine Kern',
    role: 'Fachärztin für Innere Medizin',
    company: 'Gemeinschaftspraxis Kern & Müller, Stuttgart',
    industry: 'Arztpraxis',
    icon: <Heart size={14} />,
    rating: 5,
    quote: 'Hygiene in einer Arztpraxis ist keine Verhandlungssache. Amira versteht das. Die Reinigung ist gründlich, termingerecht und das Team arbeitet zuverlässig auch in sensiblen Bereichen wie Behandlungszimmern. Patienten bemerken die Sauberkeit — das ist das größte Kompliment.',
    detail: 'Tägliche Praxisreinigung, Hygieneprotokoll auf Anfrage',
  },
  {
    name: 'Thomas Brückner',
    role: 'Geschäftsführer',
    company: 'Brückner Immobilienverwaltung GmbH, Stuttgart',
    industry: 'Hausverwaltung',
    icon: <Home size={14} />,
    rating: 5,
    quote: 'Wir beauftragen Amira für mehrere Wohnanlagen in Stuttgart. Was uns überzeugt hat: Ein Ansprechpartner, ein festes Team pro Objekt, und klare Abrechnung. Kein Chaos, keine Ausreden. Wenn mal etwas nicht stimmt, ist es sofort erledigt.',
    detail: 'Treppenhausreinigung in 6 Objekten, laufender Vertrag',
  },
  {
    name: 'Julia Steinberg',
    role: 'Office Managerin',
    company: 'Steinberg & Co. Unternehmensberatung, Stuttgart',
    industry: 'Büro',
    icon: <Building2 size={14} />,
    rating: 5,
    quote: 'Wir haben vorher zwei andere Firmen ausprobiert — jedes Mal Personalwechsel, jedes Mal neu einweisen. Mit Amira ist das kein Thema mehr. Dieselben Personen, die unsere Räume kennen und wissen, was wichtig ist. Einfach verlässlich.',
    detail: 'Büroreinigung 3x wöchentlich, Kernzeiten außerhalb Bürobetrieb',
  },
  {
    name: 'Andreas Falkner',
    role: 'Steuerberater',
    company: 'Falkner Steuerberatungsgesellschaft mbH',
    industry: 'Kanzlei',
    icon: <Briefcase size={14} />,
    rating: 5,
    quote: 'Als Steuerberater ist Diskretion in unserem Büro absolut notwendig. Amira hat das von Anfang an verstanden. Die Reinigung findet früh morgens statt, bevor Mandanten kommen — kein Kontakt, kein Risiko. Genau das, was wir brauchen.',
    detail: 'Frühmorgendliche Unterhaltsreinigung, Monatsrechnung per E-Mail',
  },
  {
    name: 'Monika Hauser',
    role: 'Praxismanagerin',
    company: 'Zahnärztliche Gemeinschaftspraxis Dr. Hauser',
    industry: 'Arztpraxis',
    icon: <Heart size={14} />,
    rating: 5,
    quote: 'Pünktlichkeit ist bei uns nicht verhandelbar — der Betrieb muss laufen. Amira ist seit zwei Jahren nie unangekündigt ausgefallen. Wenn Urlaub oder Krankheit kommt, gibt es immer eine Lösung. So stellt man sich einen verlässlichen Partner vor.',
    detail: 'Tägliche Reinigung, Samstag nach Praxisschluss',
  },
];

const industryColors: Record<string, string> = {
  Kanzlei: 'bg-[rgba(200,16,46,0.08)] text-[#C8102E]',
  Arztpraxis: 'bg-[rgba(16,102,200,0.08)] text-[#1066C8]',
  Hausverwaltung: 'bg-[rgba(100,116,139,0.1)] text-[#475569]',
  Büro: 'bg-[rgba(16,150,100,0.08)] text-[#109664]',
};

const stats = [
  { value: '4,9', suffix: '/5', label: 'Durchschnittliche Bewertung' },
  { value: '50', suffix: '+', label: 'Stammkunden in Stuttgart' },
  { value: '98', suffix: '%', label: 'Weiterempfehlungsrate' },
  { value: '7', suffix: '+', label: 'Jahre am Markt' },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-[#C8102E] fill-[#C8102E]" />
      ))}
    </div>
  );
}

export default function KundenstimmenPage() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ks-hero-text > *',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ks-stat',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: statsRef.current, start: 'top 82%' } }
      );
      gsap.fromTo('.ks-card',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 82%' } }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative flex items-end"
        style={{
          minHeight: 460,
          background: 'linear-gradient(135deg, #0F1628 0%, #1a2540 100%)',
          paddingTop: 120,
          paddingBottom: 80,
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #C8102E 0%, transparent 60%)' }}
        />
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <div className="ks-hero-text max-w-[680px]">
            <div className="inline-flex items-center gap-2 bg-[rgba(200,16,46,0.15)] border border-[rgba(200,16,46,0.3)] rounded-full px-4 py-1.5 mb-6">
              <Star size={12} className="text-[#C8102E] fill-[#C8102E]" />
              <span className="font-body font-semibold text-xs text-[#C8102E] uppercase tracking-[0.08em]">Kundenstimmen</span>
            </div>
            <h1 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.08 }}>
              Was unsere Kunden sagen.
            </h1>
            <p className="font-body text-white/70 text-[17px] leading-relaxed">
              Kanzleien, Arztpraxen, Büros und Hausverwaltungen in Stuttgart berichten über ihre Erfahrungen mit Amira Gebäudereinigung.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section ref={statsRef} style={{ background: '#F5F2EE', borderBottom: '1px solid #EEE9E2' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#EEE9E2]">
            {stats.map((s, i) => (
              <div key={i} className="ks-stat text-center md:px-8">
                <p className="font-display font-bold text-[#C8102E]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
                  {s.value}<span className="text-[1.2rem]">{s.suffix}</span>
                </p>
                <p className="font-body text-[13px] text-[#64748B] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section style={{ background: '#FAFAF8', padding: '100px 0' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="font-body font-semibold text-xs uppercase tracking-[0.1em] text-[#C8102E] mb-3">Bewertungen & Referenzen</p>
            <h2 className="font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', lineHeight: 1.1 }}>
              Vertrauen, das sich bewährt hat.
            </h2>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="ks-card bg-white rounded-2xl p-7 flex flex-col"
                style={{ border: '1px solid #EEE9E2' }}
              >
                <div className="flex items-start justify-between mb-5">
                  <StarRow count={t.rating} />
                  <Quote size={18} className="text-[#EEE9E2]" />
                </div>
                <p className="font-body text-[15px] text-[#475569] leading-relaxed flex-1 mb-6">
                  „{t.quote}"
                </p>
                <div className="pt-5 border-t border-[#F5F2EE]">
                  <p className="font-body font-bold text-[14px] text-[#0F1628]">{t.name}</p>
                  <p className="font-body text-[12px] text-[#64748B] mt-0.5">{t.role}</p>
                  <p className="font-body text-[12px] text-[#94A3B8] mt-0.5">{t.company}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full ${industryColors[t.industry]}`}>
                      {t.icon}
                      {t.industry}
                    </span>
                    <span className="text-[11px] text-[#94A3B8]">{t.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section style={{ background: '#F5F2EE', borderTop: '1px solid #EEE9E2', padding: '80px 0' }}>
        <div className="max-w-[900px] mx-auto px-5 md:px-8 text-center">
          <p className="font-body font-semibold text-xs uppercase tracking-[0.1em] text-[#C8102E] mb-4">Warum Amira</p>
          <h2 className="font-display font-bold text-[#0F1628] mb-5" style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', lineHeight: 1.15 }}>
            Jede Bewertung steht für echte Erfahrungen.
          </h2>
          <p className="font-body text-[15px] text-[#475569] leading-relaxed mb-10 max-w-[600px] mx-auto">
            Unsere Kunden kommen aus Bereichen, in denen Sauberkeit, Diskretion und Pünktlichkeit keine Optionen sind — sie sind Pflicht. Diese Ansprüche treiben uns an.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: <CheckCircle2 size={18} className="text-[#C8102E]" />, title: 'Feste Teams', text: 'Dieselben Personen — kein Wechsel, kein Einweisen.' },
              { icon: <CheckCircle2 size={18} className="text-[#C8102E]" />, title: 'Diskrete Arbeitsweise', text: 'Unterlagen, Akten und sensible Bereiche werden respektiert.' },
              { icon: <CheckCircle2 size={18} className="text-[#C8102E]" />, title: 'Verlässliche Absprachen', text: 'Termine werden eingehalten — auch kurzfristig.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 text-left" style={{ border: '1px solid #EEE9E2' }}>
                <div className="mb-3">{item.icon}</div>
                <p className="font-body font-bold text-[14px] text-[#0F1628] mb-1">{item.title}</p>
                <p className="font-body text-[13px] text-[#64748B] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F5F2EE', borderTop: '1px solid #EEE9E2', padding: '80px 0' }}>
        <div className="max-w-[700px] mx-auto px-5 md:px-8 text-center">
          <h2 className="font-display font-bold text-[#0F1628] mb-4" style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', lineHeight: 1.15 }}>
            Werden auch Sie ein zufriedener Kunde.
          </h2>
          <p className="font-body text-[#475569] text-[15px] mb-8 leading-relaxed">
            Fordern Sie ein unverbindliches Angebot an — wir melden uns innerhalb von 24 Stunden.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#contact');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
            }}
            className="inline-flex items-center font-body font-semibold text-sm text-white bg-[#C8102E] hover:bg-[#A50D24] px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-px"
          >
            Kostenloses Angebot einholen
          </a>
        </div>
      </section>

      <Contact />
    </>
  );
}
