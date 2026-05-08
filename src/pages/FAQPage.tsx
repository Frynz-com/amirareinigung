import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus, Phone, MessageSquare } from 'lucide-react';
import Contact from '../sections/Contact';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: 'Diskretion & Vertrauen',
    faqs: [
      {
        q: 'Wie gehen Ihre Mitarbeiter mit vertraulichen Unterlagen und sensiblen Bereichen um?',
        a: 'Diskretion ist für uns kein Bonus, sondern Standard. Unser Team ist im Umgang mit professionellen Umgebungen — Kanzleien, Praxen, Beratungsräumen — geschult. Wir berühren und verschieben keine Unterlagen oder Akten und gehen respektvoll mit allen Arbeitsbereichen um. Auf Wunsch schließen wir gesonderte Vertraulichkeitsvereinbarungen ab.',
      },
      {
        q: 'Werden bei Ihnen Mitarbeiter überprüft?',
        a: 'Ja. Alle unsere Mitarbeiter durchlaufen ein persönliches Auswahlgespräch und werden sorgfältig eingearbeitet. Auf Anfrage — insbesondere bei der Reinigung von Kanzleien oder Arztpraxen — können wir erweiterte Führungszeugnisse und Nachweise vorlegen.',
      },
      {
        q: 'Können wir eine Vertraulichkeitsvereinbarung abschließen?',
        a: 'Selbstverständlich. Wenn Ihr Betrieb besondere Anforderungen an Vertraulichkeit stellt — wie es bei Rechtsanwaltskanzleien oder Steuerberatungen üblich ist — schließen wir auf Wunsch eine individuelle Vertraulichkeitsvereinbarung ab.',
      },
    ],
  },
  {
    title: 'Ablauf & Organisation',
    faqs: [
      {
        q: 'Können Reinigungszeiten auf Mandanten- und Patiententermine abgestimmt werden?',
        a: 'Ja, das ist bei unseren Kunden aus Kanzleien und Praxen der Regelfall. Wir reinigen typischerweise früh morgens vor Bürobeginn, in der Mittagspause oder nach Feierabend — ganz nach Ihrem Betriebsablauf. Sondertermine vor wichtigen Veranstaltungen oder nach Umbauten sind ebenfalls möglich.',
      },
      {
        q: 'Stellen Sie ein festes Reinigungsteam für unser Objekt?',
        a: 'Ja. Wir legen großen Wert darauf, dass ein festes, eingespieltes Team Ihr Objekt betreut. So kennen Ihre Mitarbeiter die Personen, die täglich oder wöchentlich kommen — das schafft Vertrauen und garantiert gleichbleibende Qualität.',
      },
      {
        q: 'Wie läuft die Angebotsphase und Auftragserteilung ab?',
        a: 'Sie kontaktieren uns per Formular oder Telefon. Wir besprechen Ihren Bedarf, schauen uns das Objekt bei Bedarf an und erstellen innerhalb von 24 Stunden ein individuelles Angebot — mit klaren Leistungen, Intervallen und Konditionen. Nach Ihrer Freigabe legen wir sofort los.',
      },
      {
        q: 'Was passiert, wenn ein Mitarbeiter kurzfristig ausfällt?',
        a: 'Wir haben interne Vertretungsregelungen, sodass Ihr Objekt auch bei Krankheit oder Urlaub zuverlässig gereinigt wird. Sie werden informiert, wenn eine Änderung im Team stattfindet — überraschende Fremde kommen nicht.',
      },
    ],
  },
  {
    title: 'Leistungen & Qualität',
    faqs: [
      {
        q: 'Was ist der Unterschied zwischen Unterhalts- und Grundreinigung?',
        a: 'Die Unterhaltsreinigung ist die regelmäßige, laufende Reinigung: Staubsaugen, Böden wischen, Sanitäranlagen, Oberflächen. Die Grundreinigung ist eine intensive Tiefenreinigung, die in größeren Abständen stattfindet — z. B. halbjährlich oder nach baulichen Maßnahmen. Beide Leistungen können kombiniert werden.',
      },
      {
        q: 'Welche Reinigungsmittel und Geräte verwenden Sie?',
        a: 'Wir setzen auf professionelle, geprüfte Reinigungsmittel, die sowohl effektiv als auch schonend für Oberflächen und Böden sind. Auf Wunsch verwenden wir auch allergiker- oder umweltfreundliche Alternativen — sprechen Sie uns einfach an.',
      },
      {
        q: 'Übernehmen Sie auch Fensterreinigung?',
        a: 'Ja. Fensterreinigung gehört zu unseren Kernleistungen. Wir reinigen Innen- und Außenscheiben, Rahmen und Fensterbänke — sowohl als Einzelleistung als auch im Rahmen einer laufenden Unterhaltsreinigung.',
      },
    ],
  },
  {
    title: 'Abrechnung & Kommunikation',
    faqs: [
      {
        q: 'Wie ist die Rechnungsstellung geregelt?',
        a: 'Sie erhalten regelmäßige, klar strukturierte Rechnungen per E-Mail — monatlich oder nach Vereinbarung. Wir verstehen uns als professioneller Dienstleister: keine unklaren Positionen, keine Überraschungen.',
      },
      {
        q: 'Gibt es einen festen Ansprechpartner für unser Objekt?',
        a: 'Ja. Sie haben immer einen direkten Ansprechpartner bei Amira — telefonisch und per E-Mail. Kein Callcenter, kein Weiterleiten. Wenn Sie etwas brauchen oder ein Problem besteht, wird es sofort gelöst.',
      },
      {
        q: 'Wie kurzfristig kann ich einen Auftrag erteilen oder ändern?',
        a: 'Für laufende Kunden sind kurzfristige Änderungen in der Regel kein Problem — sprechen Sie uns einfach an. Für neue Aufträge planen wir gemeinsam mit Ihnen, damit alles reibungslos läuft.',
      },
    ],
  },
  {
    title: 'Einsatzgebiet',
    faqs: [
      {
        q: 'In welchen Städten und Bereichen sind Sie tätig?',
        a: 'Unser Einsatzgebiet umfasst Stuttgart und die gesamte Region: Fellbach, Esslingen, Ludwigsburg, Leinfelden-Echterdingen, Vaihingen, Möhringen und weitere Orte. Sprechen Sie uns an — wir prüfen gerne, ob Ihr Standort in unserem Gebiet liegt.',
      },
      {
        q: 'Betreuen Sie auch mehrere Objekte desselben Kunden?',
        a: 'Ja, und das ist bei unseren Kunden aus Hausverwaltungen und größeren Kanzleien oft der Fall. Wir koordinieren die Reinigung mehrerer Objekte unter einem Ansprechpartner und einer einheitlichen Abrechnung.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#EEE9E2] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span className={`font-body font-semibold text-[15px] leading-snug transition-colors ${open ? 'text-[#C8102E]' : 'text-[#0F1628]'}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${open ? 'bg-[#C8102E] text-white' : 'bg-[#F5F2EE] text-[#64748B]'}`}>
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? 400 : 0, opacity: open ? 1 : 0 }}
      >
        <p className="font-body text-[15px] text-[#475569] leading-relaxed pb-5">{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faqp-hero > *',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative flex items-end"
        style={{
          minHeight: 420,
          background: 'linear-gradient(135deg, #0F1628 0%, #1a2540 100%)',
          paddingTop: 120,
          paddingBottom: 72,
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #C8102E 0%, transparent 60%)' }}
        />
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <div className="faqp-hero max-w-[640px]">
            <div className="inline-flex items-center gap-2 bg-[rgba(200,16,46,0.15)] border border-[rgba(200,16,46,0.3)] rounded-full px-4 py-1.5 mb-6">
              <MessageSquare size={12} className="text-[#C8102E]" />
              <span className="font-body font-semibold text-xs text-[#C8102E] uppercase tracking-[0.08em]">FAQ</span>
            </div>
            <h1 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.08 }}>
              Häufig gestellte Fragen.
            </h1>
            <p className="font-body text-white/70 text-[17px] leading-relaxed">
              Antworten auf die wichtigsten Fragen von Kanzleien, Praxen, Büros und Hausverwaltungen in Stuttgart.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ content */}
      <section style={{ background: '#FAFAF8', padding: '90px 0' }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">

            {/* Sidebar nav */}
            <div className="lg:sticky lg:top-28">
              <p className="font-body font-semibold text-xs uppercase tracking-[0.1em] text-[#94A3B8] mb-4">Kategorien</p>
              <nav className="flex flex-col gap-1">
                {categories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCategory(i)}
                    className={`text-left px-4 py-2.5 rounded-xl font-body font-medium text-[14px] transition-all ${
                      activeCategory === i
                        ? 'bg-[#C8102E] text-white'
                        : 'text-[#475569] hover:bg-[#F5F2EE] hover:text-[#0F1628]'
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </nav>

              {/* Contact box */}
              <div className="mt-8 p-5 bg-white rounded-2xl" style={{ border: '1px solid #EEE9E2' }}>
                <p className="font-body font-bold text-[14px] text-[#0F1628] mb-1">Frage nicht dabei?</p>
                <p className="font-body text-[13px] text-[#64748B] mb-4">Rufen Sie uns direkt an — wir antworten sofort.</p>
                <a
                  href="tel:+491728060586"
                  className="inline-flex items-center gap-2 font-body font-semibold text-sm text-white bg-[#C8102E] hover:bg-[#A50D24] px-5 py-2.5 rounded-xl transition-all w-full justify-center"
                >
                  <Phone size={14} />
                  0172 80 60 586
                </a>
              </div>
            </div>

            {/* FAQ items */}
            <div>
              <h2 className="font-display font-bold text-[#0F1628] mb-2" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)' }}>
                {categories[activeCategory].title}
              </h2>
              <p className="font-body text-[13px] text-[#94A3B8] mb-6">
                {categories[activeCategory].faqs.length} Fragen in dieser Kategorie
              </p>
              <div className="bg-white rounded-2xl px-7 py-2" style={{ border: '1px solid #EEE9E2' }}>
                {categories[activeCategory].faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>

              {/* All other categories below */}
              <div className="mt-10 space-y-6">
                {categories
                  .filter((_, i) => i !== activeCategory)
                  .map((cat, i) => (
                    <div key={i}>
                      <button
                        onClick={() => setActiveCategory(categories.indexOf(cat))}
                        className="font-body font-semibold text-[13px] text-[#C8102E] uppercase tracking-[0.08em] mb-3 hover:underline"
                      >
                        {cat.title} →
                      </button>
                      <div className="bg-white rounded-2xl px-7 py-2 opacity-60" style={{ border: '1px solid #EEE9E2' }}>
                        {cat.faqs.slice(0, 2).map((faq, j) => (
                          <FAQItem key={j} q={faq.q} a={faq.a} />
                        ))}
                        {cat.faqs.length > 2 && (
                          <button
                            onClick={() => setActiveCategory(categories.indexOf(cat))}
                            className="w-full py-3 font-body text-[13px] text-[#C8102E] text-center hover:underline"
                          >
                            + {cat.faqs.length - 2} weitere Fragen anzeigen
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0F1628', padding: '80px 0' }}>
        <div className="max-w-[700px] mx-auto px-5 md:px-8 text-center">
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', lineHeight: 1.15 }}>
            Bereit für professionelle Reinigung?
          </h2>
          <p className="font-body text-white/65 text-[15px] mb-8 leading-relaxed">
            Kostenloses Angebot in 24 Stunden — unverbindlich und auf Ihr Objekt zugeschnitten.
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
            Angebot einholen
          </a>
        </div>
      </section>

      <Contact />
    </>
  );
}
