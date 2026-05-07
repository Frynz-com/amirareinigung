import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Sparkles, MessageSquare, CalendarCheck, Euro, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  { icon: ShieldCheck,   num: '01', title: 'Über 7 Jahre Erfahrung',            desc: 'Wir kennen die Anforderungen von Büros, Kanzleien und Praxen – und arbeiten mit dem nötigen Gespür dafür.' },
  { icon: Sparkles,      num: '02', title: 'Gründliche, sorgfältige Arbeit',    desc: 'Fachkompetenz, Sorgfalt und gleichbleibend hohe Qualität – bei jedem Termin, ohne Ausnahme.' },
  { icon: MessageSquare, num: '03', title: 'Angebot in 24 Stunden',             desc: 'Unverbindliches Angebot passend zu Objekt, Umfang und Rhythmus – schnell und unkompliziert.' },
  { icon: CalendarCheck, num: '04', title: 'Flexibel & termingerecht',          desc: 'Wir richten uns nach Ihrem Betriebsablauf – ob früh, tagsüber oder nach Büroschluss.' },
  { icon: Euro,          num: '05', title: 'Faires Preis-Leistungs-Verhältnis', desc: 'Transparente Preise ohne versteckte Kosten. Qualität, die sich für kleine und große Unternehmen lohnt.' },
  { icon: Users,         num: '06', title: 'Diskretes, vertrauensvolles Team',  desc: 'Diskret und verlässlich – besonders bei sensiblen Bereichen wie Kanzleien und Arztpraxen.' },
];

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

        {/* Header — aligned left, editorial */}
        <div className="wcu-head grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-end mb-16">
          <div>
            <p className="font-body font-semibold text-[11px] uppercase tracking-[0.16em] text-teal mb-4">Warum Amira</p>
            <h2
              className="font-display font-bold text-[#0F1628]"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
            >
              Ihr verlässlicher Partner<br />
              <span className="text-[#475569]">für Sauberkeit.</span>
            </h2>
          </div>
          <p className="font-body text-[#64748B] leading-relaxed text-[15px]">
            Was uns auszeichnet – und warum unsere Kunden seit Jahren auf uns vertrauen und empfehlen.
          </p>
        </div>

        {/* Advantages — clean grid, no card boxes */}
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
                  <div className="w-10 h-10 rounded-xl bg-[#F5F2EE] group-hover:bg-teal/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Icon size={18} className="text-[#64748B] group-hover:text-teal transition-colors duration-300" />
                  </div>
                  <span className="font-body text-[11px] font-semibold text-[#CBD5E1] mt-2.5 tracking-wider">{a.num}</span>
                </div>
                <h3 className="font-display font-semibold text-[18px] text-[#0F1628] leading-snug mb-3">{a.title}</h3>
                <p className="font-body text-[14px] text-[#64748B] leading-relaxed">{a.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
