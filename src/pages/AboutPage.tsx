import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone, ShieldCheck, Clock, Star, Check } from 'lucide-react';
import Contact from '../sections/Contact';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 7,    suffix: '+',   label: 'Jahre Erfahrung',         sub: 'in Stuttgart & Region' },
  { value: 3000, suffix: '+',   label: 'Abgeschlossene Aufträge', sub: 'seit Gründung' },
  { value: 50,   suffix: '+',   label: 'Stammkunden',             sub: 'vertrauen uns dauerhaft' },
  { value: 100,  suffix: '%',   label: 'Kundenzufriedenheit',     sub: 'laut eigener Befragung' },
];

const values = [
  {
    icon: ShieldCheck,
    title: 'Diskretion',
    desc: 'Vertrauliche Unterlagen, sensible Bereiche, Mandantenakten — wir arbeiten respektvoll und ohne Eingriff in Ihre Abläufe. Auf Wunsch schließen wir Vertraulichkeitsvereinbarungen ab.',
  },
  {
    icon: Clock,
    title: 'Verlässlichkeit',
    desc: 'Ein festes Team für Ihr Objekt. Keine wechselnden Gesichter, keine Überraschungen. Wir erscheinen pünktlich, halten Absprachen ein und halten Sie proaktiv informiert.',
  },
  {
    icon: Star,
    title: 'Qualität',
    desc: 'Gleichbleibend hochwertige Ergebnisse — bei jedem Termin. Kein Nachlassen nach den ersten Wochen. Wir reinigen so, als würden Ihre Kunden jeden Morgen neu bewertet.',
  },
];

const clientTypes = [
  { label: 'Rechtsanwaltskanzleien', desc: 'Diskrete Reinigung sensibler Mandantenbereiche' },
  { label: 'Steuerberatungen',       desc: 'Zuverlässig vor dem Arbeitsbeginn' },
  { label: 'Arztpraxen',             desc: 'Hygiene nach medizinischen Standards' },
  { label: 'Bürokomplexe',           desc: 'Regelmäßige Unterhaltsreinigung nach Büroschluss' },
  { label: 'Hausverwaltungen',       desc: 'Treppenhäuser, Tiefgaragen, Gemeinschaftsflächen' },
  { label: 'Gewerbeobjekte',         desc: 'Flexibel nach Betriebsablauf' },
];

function AnimatedStat({ value, suffix, label, sub }: { value: number; suffix: string; label: string; sub: string }) {
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
        gsap.to(obj, { val: value, duration: 1.8, ease: 'power2.out',
          onUpdate: () => setDisplay(Math.round(obj.val)) });
      },
    });
    return () => trigger.kill();
  }, [value]);

  return (
    <div ref={ref} className="text-center py-8 px-6">
      <p className="font-display font-bold text-teal" style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', letterSpacing: '-0.03em' }}>
        {display.toLocaleString('de-DE')}{suffix}
      </p>
      <p className="font-body font-semibold text-[14px] text-[#0F1628] mt-2">{label}</p>
      <p className="font-body text-[12px] text-[#94A3B8] mt-0.5">{sub}</p>
    </div>
  );
}

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <main className="pt-[72px]">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0F1628]" style={{ minHeight: 480 }}>
        <div className="absolute inset-0">
          <img src="/images/team.jpg" alt="Amira Reinigungsteam" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,22,40,0.92)_0%,rgba(15,22,40,0.65)_50%,rgba(15,22,40,0.3)_100%)]" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 py-20 md:py-28">
          <nav className="mb-8 flex items-center gap-2 font-body text-sm text-white/50" aria-label="Breadcrumb">
            <a href="/" className="hover:text-white transition-colors">Startseite</a>
            <span>/</span>
            <span className="text-white">Über uns</span>
          </nav>
          <p className="font-body font-semibold text-xs uppercase tracking-[0.12em] text-teal mb-4">Unternehmen</p>
          <h1 className="font-display font-bold text-white max-w-[620px]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', lineHeight: 1.06 }}>
            Seit über 7 Jahren für Räume,<br />in denen Ihr Ruf zählt.
          </h1>
          <p className="font-body text-white/70 text-lg leading-relaxed mt-5 max-w-[500px]">
            Amira Gebäudereinigung steht für professionelle Sauberkeit in Kanzleien, Praxen und Büros — verlässlich, diskret, termingerecht.
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

      {/* ── Story ────────────────────────────────────────────── */}
      <section className="bg-white" style={{ padding: '100px 0' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <p className="font-body font-semibold text-xs uppercase tracking-[0.12em] text-teal mb-4">Unsere Geschichte</p>
              <h2 className="font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
                Gegründet in Stuttgart.<br />Gewachsen durch Vertrauen.
              </h2>
              <p className="font-body text-[#475569] text-lg leading-relaxed mt-5">
                Amira Gebäudereinigung wurde mit einem klaren Auftrag gegründet: professionelle Sauberkeit für Unternehmen, die Wert auf Diskretion und Qualität legen. Kanzleien, Arztpraxen und Büros gehören von Anfang an zu unserem Kernkundenstamm.
              </p>
              <p className="font-body text-[#64748B] leading-relaxed mt-4">
                Über 7 Jahre später betreuen wir mehr als 50 Stammkunden in Stuttgart und Umgebung. Was uns geblieben ist: ein festes Team, klare Absprachen und der Anspruch, jeden Termin so auszuführen, als wäre es der erste.
              </p>
              <p className="font-body text-[#64748B] leading-relaxed mt-4">
                Unser Einsatzgebiet reicht von Stuttgart-Mitte bis Ludwigsburg, Esslingen, Fellbach und Leinfelden-Echterdingen — für Kunden, die auf langfristige Verlässlichkeit setzen.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
                <img src="/images/cleaner-portrait.jpg" alt="Amira Reinigungskraft" className="w-full aspect-[4/5] object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-4 -right-2 md:bottom-6 md:-right-6 bg-[#0F1628] text-white rounded-2xl px-5 py-4 shadow-xl">
                <p className="font-display font-bold text-2xl">7+</p>
                <p className="font-body text-xs text-white/60 mt-0.5">Jahre in Stuttgart</p>
              </div>
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm border border-[#EEE9E2] rounded-xl px-4 py-2.5 shadow-sm">
                <p className="font-body font-semibold text-[12px] text-[#0F1628]">Diskret & vertrauensvoll</p>
                <p className="font-body text-[11px] text-[#94A3B8] mt-0.5">Für Kanzleien & Praxen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="bg-[#F5F2EE]" style={{ padding: '90px 0' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="font-body font-semibold text-xs uppercase tracking-[0.12em] text-teal mb-3">Unsere Werte</p>
            <h2 className="font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.1 }}>
              Was uns antreibt — jeden Tag.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-[#EEE9E2]">
                <div className="w-12 h-12 rounded-xl bg-[#F5F2EE] flex items-center justify-center mb-5">
                  <Icon size={22} className="text-teal" />
                </div>
                <h3 className="font-display font-semibold text-[20px] text-[#0F1628] mb-3">{title}</h3>
                <p className="font-body text-[14px] text-[#64748B] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="bg-white" style={{ borderTop: '1px solid #EEE9E2', borderBottom: '1px solid #EEE9E2' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#EEE9E2]">
            {stats.map((s) => <AnimatedStat key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── Team / Approach ──────────────────────────────────── */}
      <section className="bg-white" style={{ padding: '100px 0' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/team-cleaning.jpg" alt="Amira Team bei der Arbeit" className="col-span-2 aspect-[16/8] w-full object-cover rounded-2xl" loading="lazy" />
                <img src="/images/reference-office-wide.jpg" alt="Gereinigte Bürofläche" className="aspect-[4/3] w-full object-cover rounded-2xl" loading="lazy" />
                <img src="/images/reference-glass-office.jpg" alt="Saubere Glasflächen" className="aspect-[4/3] w-full object-cover rounded-2xl" loading="lazy" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="font-body font-semibold text-xs uppercase tracking-[0.12em] text-teal mb-4">Unser Ansatz</p>
              <h2 className="font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
                Ein festes Team.<br />Kein ständig wechselndes Personal.
              </h2>
              <p className="font-body text-[#475569] text-lg leading-relaxed mt-5">
                Vertrauen entsteht durch Bekanntheit. Deshalb erhält jeder Kunde ein fest zugeteiltes Reinigungsteam — Mitarbeiter, die Ihr Objekt, Ihre Abläufe und Ihre Anforderungen kennen.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Einarbeitung in objektspezifische Anforderungen',
                  'Diskretes Auftreten in sensiblen Bereichen',
                  'Verlässliche Anwesenheit ohne Personalwechsel',
                  'Direkte Ansprechpartner bei Änderungswünschen',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[rgba(200,16,46,0.07)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-teal" />
                    </div>
                    <span className="font-body text-[15px] text-[#475569]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who we serve ─────────────────────────────────────── */}
      <section className="bg-[#FAFAF8]" style={{ padding: '90px 0', borderTop: '1px solid #EEE9E2' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="mb-12">
            <p className="font-body font-semibold text-xs uppercase tracking-[0.12em] text-teal mb-3">Kundenstamm</p>
            <h2 className="font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.1 }}>
              Wen wir betreuen.
            </h2>
            <p className="font-body text-[#64748B] mt-3 max-w-[500px] leading-relaxed">
              Unsere Kunden kommen aus Branchen, in denen Sauberkeit und Diskretion zum Kerngeschäft gehören.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clientTypes.map(({ label, desc }) => (
              <div key={label} className="bg-white border border-[#EEE9E2] rounded-xl p-6">
                <p className="font-body font-semibold text-[15px] text-[#0F1628]">{label}</p>
                <p className="font-body text-[13px] text-[#64748B] mt-1.5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-[#FAFAF8]" style={{ padding: '80px 0', borderTop: '1px solid #EEE9E2' }}>
        <div className="max-w-[840px] mx-auto px-5 md:px-8 text-center">
          <h2 className="font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.1 }}>
            Lernen Sie uns kennen.
          </h2>
          <p className="font-body text-[#475569] text-lg leading-relaxed mt-4 max-w-[480px] mx-auto">
            Schildern Sie uns Ihren Bedarf — wir erstellen innerhalb von 24 Stunden ein unverbindliches Angebot für Ihr Objekt.
          </p>
          <a href="#contact" onClick={scrollToContact}
            className="inline-flex items-center gap-2 mt-8 bg-teal hover:bg-teal-dark text-white font-body font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-[0_6px_20px_rgba(200,16,46,0.3)]">
            Kostenloses Angebot einholen <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <Contact />
    </main>
  );
}
