import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Wie gehen Ihre Mitarbeiter mit vertraulichen Unterlagen und sensiblen Bereichen um?',
    answer: 'Diskretion ist für uns kein Bonus, sondern Standard. Unser Team ist im Umgang mit professionellen Umgebungen — Kanzleien, Praxen, Beratungsräumen — geschult. Wir berühren und verschieben keine Unterlagen oder Akten, und gehen respektvoll mit allen Arbeitsbereichen um. Auf Wunsch schließen wir gesonderte Vertraulichkeitsvereinbarungen ab.',
  },
  {
    question: 'Können Reinigungszeiten auf Mandanten- und Patiententermine abgestimmt werden?',
    answer: 'Ja, das ist bei unseren Kunden aus Kanzleien und Praxen der Regelfall. Wir reinigen typischerweise früh morgens vor Bürobeginn, in der Mittagspause oder nach Feierabend — ganz nach Ihrem Betriebsablauf. Sondertermine vor wichtigen Veranstaltungen oder nach Umbauten sind ebenfalls möglich.',
  },
  {
    question: 'Stellen Sie ein festes Reinigungsteam für unser Objekt?',
    answer: 'Ja. Wir legen großen Wert darauf, dass ein festes, eingespieltes Team Ihr Objekt betreut. So kennen Ihre Mitarbeiter die Personen, die täglich oder wöchentlich kommen — das schafft Vertrauen und garantiert gleichbleibende Qualität.',
  },
  {
    question: 'Wie läuft die Angebotsphase und Auftragserteilung ab?',
    answer: 'Sie kontaktieren uns per Formular oder Telefon. Wir besprechen Ihren Bedarf, schauen uns das Objekt bei Bedarf an und erstellen innerhalb von 24 Stunden ein individuelles Angebot — mit klaren Leistungen, Intervallen und Konditionen. Nach Ihrer Freigabe legen wir sofort los.',
  },
  {
    question: 'Wie ist die Rechnungsstellung und Kommunikation geregelt?',
    answer: 'Sie erhalten regelmäßige, klar strukturierte Rechnungen per E-Mail — monatlich oder nach Vereinbarung. Für Rückfragen sind wir telefonisch und per E-Mail schnell erreichbar. Wir verstehen uns als professioneller Dienstleister, nicht nur als Reinigungsfirma.',
  },
  {
    question: 'Was ist der Unterschied zwischen Unterhalts- und Grundreinigung?',
    answer: 'Die Unterhaltsreinigung ist die regelmäßige, laufende Reinigung: Staubsaugen, Böden wischen, Sanitäranlagen, Oberflächen. Die Grundreinigung ist eine intensive Tiefenreinigung, die in größeren Abständen stattfindet — z. B. halbjährlich oder nach baulichen Maßnahmen. Beide Leistungen können kombiniert werden.',
  },
  {
    question: 'In welchen Städten und Bereichen sind Sie tätig?',
    answer: 'Unser Einsatzgebiet umfasst Stuttgart und die gesamte Region: Fellbach, Esslingen, Ludwigsburg, Leinfelden-Echterdingen, Vaihingen, Möhringen und weitere Orte. Sprechen Sie uns an — wir prüfen gerne, ob Ihr Standort in unserem Gebiet liegt.',
  },
];

function Item({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#EEE9E2] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span className={`font-body font-semibold text-[15px] leading-snug transition-colors ${open ? 'text-teal' : 'text-[#0F1628]'}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${open ? 'bg-teal text-white' : 'bg-[#F5F2EE] text-[#64748B]'}`}>
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? 300 : 0, opacity: open ? 1 : 0 }}>
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
    <section id="faq" ref={sectionRef} style={{ padding: '130px 0', background: '#FAFAF8' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="faq-inner grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="font-body font-semibold text-xs uppercase tracking-[0.1em] text-teal mb-3">Häufige Fragen</p>
            <h2 className="font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1 }}>
              Ihre Fragen,<br />unsere Antworten.
            </h2>
            <p className="font-body text-[#475569] mt-4 leading-relaxed text-[15px]">
              Häufige Fragen von Kanzleien, Praxen und Büros — direkt beantwortet.
            </p>
            <div className="mt-6 pt-6 border-t border-[#EEE9E2]">
              <p className="font-body text-[13px] text-[#64748B] mb-4">Noch offen gebliebene Fragen?</p>
              <a href="tel:+491728060586"
                className="inline-flex items-center gap-2 font-body font-semibold text-sm text-white bg-teal hover:bg-teal-dark px-6 py-3 rounded-xl transition-all">
                0172 80 60 586
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl px-7 py-2" style={{ border: '1px solid #EEE9E2' }}>
            {faqs.map((faq, i) => <Item key={i} question={faq.question} answer={faq.answer} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
