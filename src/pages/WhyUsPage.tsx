import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone, ShieldCheck, Sparkles, Clock, CalendarCheck, FileText, Users, Check, Quote } from 'lucide-react';
import Contact from '../sections/Contact';

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    icon: ShieldCheck,
    num: '01',
    title: 'Diskretion bei sensiblen Bereichen',
    desc: 'Mandantenakten, Patientendaten, vertrauliche Unterlagen — unser Team ist geschult im Umgang mit professionellen Umgebungen. Wir berühren keine Akten und respektieren alle Arbeitsbereiche. Auf Wunsch schließen wir Vertraulichkeitsvereinbarungen ab.',
    detail: 'Besonders wichtig für: Kanzleien, Arztpraxen, Steuerberatungen',
  },
  {
    icon: CalendarCheck,
    num: '02',
    title: 'Reinigung ohne Betriebsunterbrechung',
    desc: 'Wir arbeiten vor Bürobeginn, in Pausen oder nach Feierabend — ganz nach Ihrem Betriebsablauf. Ihre Mandanten, Patienten und Mitarbeiter bemerken uns nicht. Nur das Ergebnis.',
    detail: 'Termine nach Vereinbarung: früh, mittags, abends oder am Wochenende',
  },
  {
    icon: Users,
    num: '03',
    title: 'Festes Team für Ihr Objekt',
    desc: 'Kein ständig wechselndes Personal. Ein eingespieltes Team, das Ihr Objekt kennt, Ihre Abläufe respektiert und das Vertrauen Ihres Hauses verdient. Verlässlichkeit durch Kontinuität.',
    detail: 'Feste Ansprechpartner — keine Überraschungen',
  },
  {
    icon: Sparkles,
    num: '04',
    title: 'Gleichbleibend hohe Qualität',
    desc: 'Professionelle Reinigung, die nicht nach den ersten Wochen nachlässt. Wir reinigen bei jedem Termin mit dem gleichen Anspruch — als würden Ihre Kunden den Raum das erste Mal betreten.',
    detail: '7+ Jahre Erfahrung mit gewerblichen Objekten',
  },
  {
    icon: FileText,
    num: '05',
    title: 'Professionelle Abwicklung',
    desc: 'Klare Verträge, pünktliche Rechnungsstellung, zuverlässige Erreichbarkeit per Telefon und E-Mail. Wir bieten einen Dienstleistungsstandard, den Unternehmen von einem seriösen Partner erwarten.',
    detail: 'Monatliche Abrechnung, transparente Konditionen',
  },
  {
    icon: Clock,
    num: '06',
    title: 'Angebot in 24 Stunden',
    desc: 'Nach Ihrer Anfrage erhalten Sie innerhalb von 24 Stunden ein maßgeschneidertes Angebot — abgestimmt auf Objekt, Umfang und Intervall. Kein langes Warten, keine unverbindlichen Versprechungen.',
    detail: 'Kostenlos, unverbindlich, schnell',
  },
];

const comparisons = [
  { label: 'Festes Reinigungsteam',         amira: true,  other: false },
  { label: 'Diskretion bei Mandantenakten', amira: true,  other: false },
  { label: 'Reinigung nach Büroschluss',    amira: true,  other: true  },
  { label: 'Angebot in 24 Stunden',         amira: true,  other: false },
  { label: 'Transparente Abrechnung',       amira: true,  other: true  },
  { label: 'Vertraulichkeitsvereinbarung',  amira: true,  other: false },
];

const testimonial = {
  name: 'Markus Hoffmann',
  role: 'Kanzleiinhaber, Stuttgart-Mitte',
  industry: 'Rechtsanwaltskanzlei',
  text: 'Amira reinigt unsere Kanzlei seit über einem Jahr verlässlich und diskret. Der Umgang mit unserem Mandantenbereich ist professionell — genau das, was wir für unser Haus brauchen. Die Ergebnisse überzeugen jeden Morgen aufs Neue.',
  initial: 'M',
};

function Checkmark({ yes }: { yes: boolean }) {
  return yes
    ? <span className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center"><Check size={13} className="text-teal" /></span>
    : <span className="w-6 h-6 rounded-full bg-[#F5F2EE] flex items-center justify-center"><span className="w-2 h-0.5 bg-[#D4CFCA] rounded-full" /></span>;
}

export default function WhyUsPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.why-item', { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 82%' } });
    });
    return () => ctx.revert();
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <main className="pt-[72px]">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0F1628]" style={{ minHeight: 440 }}>
        <div className="absolute inset-0">
          <img src="/images/reference-office-wide.jpg" alt="Professionell gereinigte Bürofläche" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,22,40,0.93)_0%,rgba(15,22,40,0.68)_55%,rgba(15,22,40,0.3)_100%)]" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 py-20 md:py-26">
          <nav className="mb-8 flex items-center gap-2 font-body text-sm text-white/50">
            <a href="/" className="hover:text-white transition-colors">Startseite</a>
            <span>/</span>
            <a href="/ueber-uns" className="hover:text-white transition-colors">Unternehmen</a>
            <span>/</span>
            <span className="text-white">Warum Amira</span>
          </nav>
          <p className="font-body font-semibold text-xs uppercase tracking-[0.12em] text-teal mb-4">Unternehmen</p>
          <h1 className="font-display font-bold text-white max-w-[640px]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', lineHeight: 1.06 }}>
            Warum Kanzleien und Büros<br />auf Amira vertrauen.
          </h1>
          <p className="font-body text-white/70 text-lg leading-relaxed mt-5 max-w-[520px]">
            Sechs Gründe, warum führende Unternehmen in Stuttgart ihren Reinigungsauftrag langfristig bei uns lassen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-9">
            <a href="#contact" onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white font-body font-semibold px-7 py-3.5 rounded-lg transition-all hover:shadow-[0_6px_20px_rgba(200,16,46,0.4)]">
              Kostenloses Angebot <ArrowRight size={17} />
            </a>
            <a href="tel:+491728060586"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-body font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-all">
              <Phone size={17} /> 0172 80 60 586
            </a>
          </div>
        </div>
      </section>

      {/* ── 6 Advantages ─────────────────────────────────────── */}
      <section className="bg-white" style={{ padding: '100px 0' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="mb-14">
            <p className="font-body font-semibold text-xs uppercase tracking-[0.12em] text-teal mb-3">Unsere Stärken</p>
            <h2 className="font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
              Was uns von anderen<br />Reinigungsunternehmen unterscheidet.
            </h2>
          </div>
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="why-item group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F2EE] group-hover:bg-[rgba(200,16,46,0.07)] flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon size={18} className="text-[#64748B] group-hover:text-teal transition-colors" />
                    </div>
                    <span className="font-body text-[11px] font-semibold text-[#D4CFCA] tracking-wider">{a.num}</span>
                  </div>
                  <h3 className="font-display font-semibold text-[18px] text-[#0F1628] leading-snug mb-3">{a.title}</h3>
                  <p className="font-body text-[14px] text-[#64748B] leading-relaxed mb-4">{a.desc}</p>
                  <p className="font-body text-[12px] font-medium text-teal">{a.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Comparison table ─────────────────────────────────── */}
      <section className="bg-[#F5F2EE]" style={{ padding: '90px 0' }}>
        <div className="max-w-[860px] mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="font-body font-semibold text-xs uppercase tracking-[0.12em] text-teal mb-3">Vergleich</p>
            <h2 className="font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', lineHeight: 1.1 }}>
              Amira vs. durchschnittliche Reinigungsfirma
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-[#EEE9E2] overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_100px_100px] border-b border-[#EEE9E2] px-6 py-4 bg-[#FAFAF8]">
              <span className="font-body text-[12px] font-semibold text-[#94A3B8] uppercase tracking-wider">Leistungsmerkmal</span>
              <span className="font-body text-[12px] font-semibold text-teal uppercase tracking-wider text-center">Amira</span>
              <span className="font-body text-[12px] font-semibold text-[#94A3B8] uppercase tracking-wider text-center">Andere</span>
            </div>
            {comparisons.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-[1fr_100px_100px] px-6 py-4 items-center ${i < comparisons.length - 1 ? 'border-b border-[#F5F2EE]' : ''}`}>
                <span className="font-body text-[14px] text-[#0F1628] font-medium">{row.label}</span>
                <div className="flex justify-center"><Checkmark yes={row.amira} /></div>
                <div className="flex justify-center"><Checkmark yes={row.other} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────────── */}
      <section className="bg-white" style={{ padding: '90px 0' }}>
        <div className="max-w-[860px] mx-auto px-5 md:px-8">
          <div className="bg-[#0F1628] rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-between mb-6">
              <Quote size={32} className="text-white/15" />
              <span className="font-body text-[11px] font-semibold text-[#64748B] bg-[#F5F2EE] border border-[#EEE9E2] px-3 py-1 rounded-full">
                {testimonial.industry}
              </span>
            </div>
            <p className="font-display font-semibold text-white/90 leading-snug"
              style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', lineHeight: 1.5 }}>
              „{testimonial.text}"
            </p>
            <div className="flex items-center gap-4 mt-8 pt-7" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                <span className="font-body font-bold text-base text-white">{testimonial.initial}</span>
              </div>
              <div>
                <p className="font-body font-semibold text-[15px] text-white">{testimonial.name}</p>
                <p className="font-body text-[13px] text-white/45 mt-0.5">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="bg-[#FAFAF8]" style={{ padding: '90px 0', borderTop: '1px solid #EEE9E2' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="font-body font-semibold text-xs uppercase tracking-[0.12em] text-teal mb-4">Ablauf</p>
              <h2 className="font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.1 }}>
                Von der Anfrage zum<br />ersten Reinigungstermin.
              </h2>
              <p className="font-body text-[#64748B] leading-relaxed mt-4">
                Einfach, schnell und ohne unnötige Bürokratie — so starten wir die Zusammenarbeit.
              </p>
            </div>
            <ol className="space-y-5">
              {[
                { step: '01', title: 'Anfrage stellen',      desc: 'Per Formular oder Telefon — in unter 2 Minuten.' },
                { step: '02', title: 'Angebot erhalten',     desc: 'Innerhalb von 24 Stunden: maßgeschneidert, klar kalkuliert.' },
                { step: '03', title: 'Objektbegehung',       desc: 'Bei Bedarf besuchen wir Ihr Objekt und klären alle Details.' },
                { step: '04', title: 'Reinigung beginnt',    desc: 'Ihr festes Team startet — diskret, pünktlich, professionell.' },
              ].map(({ step, title, desc }) => (
                <li key={step} className="flex gap-5 items-start">
                  <span className="w-11 h-11 rounded-full bg-teal text-white font-body font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    {step}
                  </span>
                  <div>
                    <p className="font-body font-semibold text-[15px] text-[#0F1628]">{title}</p>
                    <p className="font-body text-[14px] text-[#64748B] mt-0.5">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-[#FAFAF8]" style={{ padding: '80px 0', borderTop: '1px solid #EEE9E2' }}>
        <div className="max-w-[840px] mx-auto px-5 md:px-8 text-center">
          <h2 className="font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.1 }}>
            Überzeugen Sie sich selbst.
          </h2>
          <p className="font-body text-[#475569] text-lg leading-relaxed mt-4 max-w-[480px] mx-auto">
            Kostenloses, unverbindliches Angebot — abgestimmt auf Ihr Objekt, Ihre Intervalle und Ihren Bedarf.
          </p>
          <a href="#contact" onClick={scrollToContact}
            className="inline-flex items-center gap-2 mt-8 bg-teal hover:bg-teal-dark text-white font-body font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-[0_6px_20px_rgba(200,16,46,0.3)]">
            Angebot einholen <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <Contact />
    </main>
  );
}
