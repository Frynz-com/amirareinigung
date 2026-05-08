import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Sparkles, Clock, CalendarCheck, FileText, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    icon: ShieldCheck,
    num: '01',
    title: 'Diskretion bei sensiblen Bereichen',
    desc: 'Mandantenakten, Patientendaten, vertrauliche Unterlagen — unser Team ist im Umgang mit professionellen Umgebungen geschult und handelt entsprechend diskret.',
  },
  {
    icon: Sparkles,
    num: '02',
    title: 'Erfahrung mit Kanzleien & Praxen',
    desc: 'Wir kennen die besonderen Anforderungen rechtlicher und medizinischer Einrichtungen: Hygiene, Ordnung und eine Umgebung, die Vertrauen ausstrahlt.',
  },
  {
    icon: Clock,
    num: '03',
    title: 'Reinigung ohne Betriebsunterbrechung',
    desc: 'Wir arbeiten vor Bürobeginn, in Pausen oder nach Feierabend. Ihre Mandanten und Patienten bemerken uns nicht — nur das Ergebnis.',
  },
  {
    icon: CalendarCheck,
    num: '04',
    title: 'Verlässliches Festteam für Ihr Objekt',
    desc: 'Kein ständig wechselndes Personal. Sie erhalten ein eingespieltes Team, das Ihr Objekt kennt und das Vertrauen Ihres Hauses verdient.',
  },
  {
    icon: FileText,
    num: '05',
    title: 'Professionelle Abwicklung',
    desc: 'Klare Verträge, pünktliche Rechnungsstellung, zuverlässige Erreichbarkeit. Genau das, was Unternehmen von einem professionellen Dienstleister erwarten.',
  },
  {
    icon: Users,
    num: '06',
    title: 'Angebot in 24 Stunden',
    desc: 'Nach Ihrer Anfrage erhalten Sie innerhalb von 24 Stunden ein maßgeschneidertes Angebot — abgestimmt auf Ihr Objekt, Ihre Intervalle und Ihren Bedarf.',
  },
];

const clientTypes = ['Steuerberatungen', 'Rechtsanwaltskanzleien', 'Arztpraxen', 'Bürozentren', 'Hausverwaltungen', 'Praxisgemeinschaften'];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.wcu-head', { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' } });
      gsap.fromTo('.wcu-item', { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.wcu-grid', start: 'top 85%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} style={{ padding: '130px 0', background: '#FFFFFF' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="wcu-head grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-end mb-16">
          <div>
            <p className="font-body font-semibold text-[11px] uppercase tracking-[0.16em] text-teal mb-4">Warum Amira</p>
            <h2
              className="font-display font-bold text-[#0F1628]"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.1rem)', lineHeight: 1.06, letterSpacing: '-0.02em' }}
            >
              Warum Kanzleien und Büros<br />
              <span className="text-[#475569]">auf uns vertrauen.</span>
            </h2>
          </div>
          <p className="font-body text-[#64748B] leading-relaxed text-[15px]">
            Professionelle Reinigung setzt mehr voraus als Sauberkeit. Sie braucht Diskretion, Verlässlichkeit und einen Partner, der die Anforderungen Ihres Unternehmens versteht.
          </p>
        </div>

        {/* Advantages grid */}
        <div className="wcu-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a, i) => {
            const Icon = a.icon;
            const isLastRow = i >= 3;
            const isLastInRow = (i + 1) % 3 === 0;
            return (
              <div
                key={a.title}
                className="wcu-item group py-10 px-8"
                style={{
                  borderBottom: !isLastRow ? '1px solid #F0EDE8' : 'none',
                  borderRight: !isLastInRow ? '1px solid #F0EDE8' : 'none',
                }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F2EE] group-hover:bg-[rgba(200,16,46,0.07)] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Icon size={18} className="text-[#64748B] group-hover:text-teal transition-colors duration-300" />
                  </div>
                  <span className="font-body text-[11px] font-semibold text-[#D4CFCA] mt-2.5 tracking-wider">{a.num}</span>
                </div>
                <h3 className="font-display font-semibold text-[18px] text-[#0F1628] leading-snug mb-3">{a.title}</h3>
                <p className="font-body text-[14px] text-[#64748B] leading-relaxed">{a.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Client types bar */}
        <div className="mt-14 pt-10 border-t border-[#F0EDE8]">
          <p className="font-body text-[12px] font-semibold text-[#94A3B8] uppercase tracking-[0.12em] mb-5">Wir betreuen unter anderem</p>
          <div className="flex flex-wrap gap-3">
            {clientTypes.map((type) => (
              <span key={type} className="font-body text-[13px] font-medium text-[#475569] bg-[#FAFAF8] border border-[#EEE9E2] px-4 py-2 rounded-full">
                {type}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
