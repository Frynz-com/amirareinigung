import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { question: 'In welchen Bereichen ist Amira Gebäudereinigung tätig?', answer: 'Wir reinigen Büros, Kanzleien, Arztpraxen, Treppenhäuser, Wohnanlagen und Gewerbeflächen in Stuttgart und der gesamten Region – von Ludwigsburg über Esslingen bis Leinfelden-Echterdingen.' },
  { question: 'Wie läuft ein Angebot ab?', answer: 'Sie füllen einfach unser Kontaktformular aus oder rufen uns direkt an. Wir besprechen Ihren Bedarf, schauen uns das Objekt bei Bedarf an und erstellen ein kostenloses, unverbindliches Angebot – meist innerhalb von 24 Stunden.' },
  { question: 'Wie flexibel sind Ihre Reinigungszeiten?', answer: 'Sehr flexibel. Wir reinigen morgens vor Geschäftsbeginn, tagsüber oder abends nach Büroschluss. Auch Wochenendtermine sind nach Absprache möglich.' },
  { question: 'Kann ich Reinigungsintervalle selbst bestimmen?', answer: 'Ja. Je nach Bedarf bieten wir tägliche, mehrmals wöchentliche, wöchentliche oder monatliche Reinigung an. Wir passen uns Ihrem Rhythmus an.' },
  { question: 'Bringen Sie eigene Reinigungsmittel und -geräte mit?', answer: 'Ja. Wir kommen mit allen benötigten Reinigungsmitteln und Geräten. Sie müssen nichts bereitstellen. Auf Wunsch setzen wir auch bestimmte Produkte ein, z. B. bei Allergien.' },
  { question: 'Was ist der Unterschied zwischen Unterhalts- und Grundreinigung?', answer: 'Die Unterhaltsreinigung ist die regelmäßige Sauberkeit im Alltag. Die Grundreinigung ist eine intensive Tiefenreinigung, die in größeren Abständen durchgeführt wird.' },
  { question: 'Arbeiten Sie auch in umliegenden Städten?', answer: 'Ja. Unser Einsatzgebiet umfasst Stuttgart und die gesamte Region: Fellbach, Esslingen, Ludwigsburg, Leinfelden-Echterdingen, Möhringen, Vaihingen und weitere Orte.' },
];

function Item({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E2E8F0] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span className={`font-body font-semibold text-[15px] leading-snug transition-colors ${open ? 'text-teal' : 'text-[#0F1628]'}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${open ? 'bg-teal text-white' : 'bg-[#F1F5F9] text-[#64748B]'}`}>
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? 200 : 0, opacity: open ? 1 : 0 }}>
        <p className="font-body text-[15px] text-[#475569] leading-relaxed pb-5">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-inner', { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={sectionRef} style={{ padding: "130px 0", background: "#FAFAF8" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="faq-inner grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="font-body font-semibold text-xs uppercase tracking-[0.1em] text-teal mb-3">Häufige Fragen</p>
            <h2 className="font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1 }}>
              Ihre Fragen, unsere Antworten
            </h2>
            <p className="font-body text-[#475569] mt-4 leading-relaxed">Weitere Fragen? Wir beraten Sie gerne persönlich.</p>
            <a href="tel:+491728060586"
              className="inline-flex items-center gap-2 mt-6 font-body font-semibold text-sm text-white bg-teal hover:bg-teal-dark px-6 py-3 rounded-xl transition-all">
              0172 80 60 586
            </a>
          </div>
          <div className="bg-white rounded-2xl px-7 py-2" style={{ border: '1px solid #EEE9E2' }}>
            {faqs.map((faq, i) => <Item key={i} question={faq.question} answer={faq.answer} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
