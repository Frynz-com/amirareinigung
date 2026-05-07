const imprintItems = [
  ['Anbieter', 'Amira Gebäudereinigung'],
  ['Leistungsgebiet', 'Stuttgart und Umgebung'],
  ['Telefon', '0711 27 350 523'],
  ['Mobil', '0172 80 60 586'],
  ['E-Mail', 'Amirareinigung@gmail.com'],
  ['Ladungsfähige Anschrift', 'Bitte vor Veröffentlichung ergänzen.'],
  ['Vertretungsberechtigte Person', 'Bitte vor Veröffentlichung ergänzen.'],
];

const privacySections = [
  {
    title: 'Verantwortlicher',
    text: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist Amira Gebäudereinigung. Die vollständige Anschrift und vertretungsberechtigte Person sind vor Veröffentlichung zu ergänzen. Kontakt: 0711 27 350 523, 0172 80 60 586, Amirareinigung@gmail.com.',
  },
  {
    title: 'Hosting und Server-Logfiles',
    text: 'Beim Aufruf der Website werden technisch notwendige Daten verarbeitet, zum Beispiel IP-Adresse, Datum und Uhrzeit des Abrufs, Browsertyp, Betriebssystem, Referrer-URL und aufgerufene Seite. Die Verarbeitung erfolgt zur sicheren und stabilen Bereitstellung der Website auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.',
  },
  {
    title: 'Kontaktformular, Telefon und E-Mail',
    text: 'Wenn Sie uns kontaktieren, verarbeiten wir Ihre Angaben wie Name, E-Mail-Adresse, Telefonnummer, ausgewählte Leistung und Nachricht zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit es um vorvertragliche oder vertragliche Maßnahmen geht, ansonsten Art. 6 Abs. 1 lit. f DSGVO.',
  },
  {
    title: 'Speicherdauer',
    text: 'Anfragedaten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
  },
  {
    title: 'Ihre Rechte',
    text: 'Sie haben nach Maßgabe der DSGVO Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Zudem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.',
  },
  {
    title: 'Cookies und externe Dienste',
    text: 'Diese Website setzt nur technisch notwendige Funktionen ein. Sollten später Analyse-, Karten-, Tracking- oder Marketingdienste ergänzt werden, muss diese Datenschutzerklärung vorher entsprechend erweitert werden.',
  },
];

import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Legal() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section id="legal" className="bg-white" style={{ paddingTop: 96, paddingBottom: 100 }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <a href="/" className="inline-flex items-center gap-2 font-body text-sm text-text-secondary hover:text-primary-dark transition-colors mb-10">
          <ArrowLeft size={15} />
          Zurück zur Startseite
        </a>
        <div className="max-w-[620px] mb-12">
          <span className="font-body font-semibold text-xs uppercase tracking-[0.08em] text-teal">
            Rechtliches
          </span>
          <h2 className="font-display font-semibold text-primary-dark mt-3" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: 1.15 }}>
            Impressum & Datenschutz
          </h2>
          <p className="font-body font-normal text-text-secondary mt-3 text-lg leading-relaxed">
            Die folgenden Angaben sind als Website-Text vorbereitet. Anschrift und vertretungsberechtigte Person müssen vor Veröffentlichung ergänzt werden.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <article id="impressum" className="scroll-mt-24">
            <h3 className="font-display font-semibold text-2xl text-primary-dark">Impressum</h3>
            <div className="mt-6 divide-y divide-border-light border-y border-border-light">
              {imprintItems.map(([label, value]) => (
                <div key={label} className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-1 sm:gap-6 py-4">
                  <dt className="font-body font-semibold text-sm text-primary-dark">{label}</dt>
                  <dd className="font-body text-[15px] text-text-secondary">{value}</dd>
                </div>
              ))}
            </div>
            <div className="mt-7 space-y-5 font-body text-[15px] text-text-secondary leading-relaxed">
              <p>
                Angaben gemäß § 5 DDG.
              </p>
              <p>
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: bitte Namen und vollständige Anschrift ergänzen.
              </p>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: https://ec.europa.eu/consumers/odr. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
              <p>
                Als Diensteanbieter sind wir nach den allgemeinen Gesetzen für eigene Inhalte verantwortlich. Für externe Links übernehmen wir keine Haftung; für Inhalte verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </div>
          </article>

          <article id="datenschutz" className="scroll-mt-24">
            <h3 className="font-display font-semibold text-2xl text-primary-dark">Datenschutz</h3>
            <div className="mt-6 space-y-6">
              {privacySections.map((section) => (
                <div key={section.title}>
                  <h4 className="font-body font-semibold text-base text-primary-dark">{section.title}</h4>
                  <p className="font-body font-normal text-[15px] text-text-secondary mt-2 leading-relaxed">{section.text}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
