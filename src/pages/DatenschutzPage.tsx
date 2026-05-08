import { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

type Block =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'address'; lines: string[] };

type Section = { id: string; title: string; content: Block[] };

const sections: Section[] = [
  {
    id: 'verantwortlicher',
    title: '1. Verantwortlicher',
    content: [
      {
        type: 'p',
        text: 'Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der DSGVO ist:',
      },
      {
        type: 'address',
        lines: [
          'Amira Gebäudereinigung',
          'Stuttgart und Umgebung',
          'Telefon: 0711 27 350 523',
          'Mobil: 0172 80 60 586',
          'E-Mail: Amirareinigung@gmail.com',
        ],
      },
    ],
  },
  {
    id: 'grundsaetze',
    title: '2. Grundsätze der Datenverarbeitung',
    content: [
      {
        type: 'p',
        text: 'Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Personenbezogene Daten werden nur mit Ihrer Einwilligung, zur Erfüllung eines Vertrags oder aufgrund berechtigter Interessen verarbeitet. Eine Weitergabe an Dritte findet nicht statt, sofern keine gesetzliche Pflicht besteht oder Sie ausdrücklich eingewilligt haben.',
      },
    ],
  },
  {
    id: 'hosting',
    title: '3. Hosting und technischer Betrieb',
    content: [
      {
        type: 'p',
        text: 'Diese Website wird bei Netlify Inc., 44 Montgomery Street, Suite 300, San Francisco, California 94104, USA gehostet. Beim Aufruf der Website werden automatisch Informationen in sogenannten Server-Logfiles gespeichert:',
      },
      {
        type: 'list',
        items: [
          'IP-Adresse des aufrufenden Endgeräts (anonymisiert)',
          'Datum und Uhrzeit des Abrufs',
          'Name und URL der abgerufenen Datei',
          'Übertragene Datenmenge',
          'Meldung über erfolgreichen Abruf',
          'Browsertyp und -version',
          'Betriebssystem des Nutzers',
          'Referrer-URL (zuvor besuchte Seite)',
        ],
      },
      {
        type: 'p',
        text: 'Die Verarbeitung dieser Daten ist technisch notwendig für den sicheren und stabilen Betrieb der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Die Daten werden nach 30 Tagen automatisch gelöscht. Netlify kann Daten in die USA übertragen; Netlify ist unter dem EU-US Data Privacy Framework zertifiziert.',
      },
    ],
  },
  {
    id: 'kontaktformular',
    title: '4. Kontaktformular und Kontaktaufnahme',
    content: [
      {
        type: 'p',
        text: 'Wenn Sie uns über das Kontaktformular, per E-Mail oder Telefon kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten (Name, E-Mail-Adresse, Telefonnummer, gewählte Leistung und Nachricht) zur Bearbeitung Ihrer Anfrage.',
      },
      {
        type: 'p',
        text: 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf den Abschluss eines Vertrags abzielt, und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen) im Übrigen.',
      },
      {
        type: 'p',
        text: 'Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nach Abschluss des Vorgangs gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen (in der Regel 6–10 Jahre für Geschäftskorrespondenz).',
      },
    ],
  },
  {
    id: 'netlify-forms',
    title: '5. Netlify Forms (Formularübertragung)',
    content: [
      {
        type: 'p',
        text: 'Das Kontaktformular dieser Website nutzt den Dienst „Netlify Forms" von Netlify Inc. Die von Ihnen eingegebenen Formulardaten werden bei der Übermittlung über eine verschlüsselte HTTPS-Verbindung an Server von Netlify übertragen und dort gespeichert, bevor sie uns zugeleitet werden.',
      },
      {
        type: 'p',
        text: 'Netlify verarbeitet Formulardaten ausschließlich zur Weiterleitung an den Website-Betreiber. Eine weitergehende Nutzung durch Netlify findet nicht statt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO sowie Art. 28 DSGVO (Auftragsverarbeitung). Netlify ist unter dem EU-US Data Privacy Framework zertifiziert.',
      },
      {
        type: 'p',
        text: 'Weitere Informationen zum Datenschutz bei Netlify finden Sie unter: https://www.netlify.com/privacy/',
      },
    ],
  },
  {
    id: 'cookies',
    title: '6. Cookies und lokale Speicherung',
    content: [
      {
        type: 'p',
        text: 'Diese Website setzt ausschließlich technisch notwendige Cookies und Browser-Speicher ein, die für den ordnungsgemäßen Betrieb erforderlich sind (z. B. Speicherung Ihrer Cookie-Präferenz). Es werden keine Tracking-, Analyse- oder Marketing-Cookies verwendet.',
      },
      {
        type: 'p',
        text: 'Technisch notwendige Cookies können ohne Einwilligung gesetzt werden (Art. 6 Abs. 1 lit. f DSGVO). Sie können Cookies in Ihrem Browser jederzeit löschen oder blockieren; die Nutzung der Website ist jedoch eingeschränkt möglich, wenn alle Cookies deaktiviert sind.',
      },
    ],
  },
  {
    id: 'ssl',
    title: '7. SSL/TLS-Verschlüsselung',
    content: [
      {
        type: 'p',
        text: 'Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.',
      },
    ],
  },
  {
    id: 'externe-links',
    title: '8. Externe Links',
    content: [
      {
        type: 'p',
        text: 'Unsere Website enthält Links zu externen Websites Dritter. Auf den Inhalt dieser externen Seiten haben wir keinen Einfluss; wir übernehmen daher keine Gewähr für deren Richtigkeit oder Datenschutzkonformität. Der jeweilige Anbieter ist für die Inhalte verantwortlich.',
      },
    ],
  },
  {
    id: 'betroffenenrechte',
    title: '9. Ihre Rechte als betroffene Person',
    content: [
      {
        type: 'p',
        text: 'Sie haben nach der DSGVO folgende Rechte in Bezug auf die Sie betreffenden personenbezogenen Daten:',
      },
      {
        type: 'list',
        items: [
          'Recht auf Auskunft (Art. 15 DSGVO): Sie können Auskunft über die von uns verarbeiteten Daten verlangen.',
          'Recht auf Berichtigung (Art. 16 DSGVO): Sie können die Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten verlangen.',
          'Recht auf Löschung (Art. 17 DSGVO): Sie können unter bestimmten Voraussetzungen die Löschung Ihrer Daten verlangen.',
          'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO): Sie können in bestimmten Fällen die Einschränkung der Verarbeitung verlangen.',
          'Recht auf Datenübertragbarkeit (Art. 20 DSGVO): Sie können die Herausgabe Ihrer Daten in einem strukturierten, gängigen Format verlangen.',
          'Recht auf Widerspruch (Art. 21 DSGVO): Sie können der Verarbeitung Ihrer Daten auf Basis berechtigter Interessen jederzeit widersprechen.',
          'Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO): Soweit die Verarbeitung auf einer Einwilligung beruht, können Sie diese jederzeit widerrufen.',
        ],
      },
      {
        type: 'p',
        text: 'Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: Amirareinigung@gmail.com oder 0172 80 60 586.',
      },
    ],
  },
  {
    id: 'beschwerderecht',
    title: '10. Beschwerderecht bei der Aufsichtsbehörde',
    content: [
      {
        type: 'p',
        text: 'Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige Aufsichtsbehörde für Baden-Württemberg ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit (LfDI):',
      },
      {
        type: 'address',
        lines: [
          'Landesbeauftragter für den Datenschutz und die Informationsfreiheit Baden-Württemberg',
          'Postfach 10 29 32',
          '70025 Stuttgart',
          'Telefon: 0711 615541-0',
          'E-Mail: poststelle@lfdi.bwl.de',
          'Website: www.baden-wuerttemberg.datenschutz.de',
        ],
      },
    ],
  },
  {
    id: 'aktualisierung',
    title: '11. Aktualität und Änderungen',
    content: [
      {
        type: 'p',
        text: 'Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website oder durch geänderte gesetzliche oder behördliche Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Version ist unter /datenschutz abrufbar.',
      },
    ],
  },
];

export default function DatenschutzPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="bg-[#FAFAF8]" style={{ paddingTop: 96, paddingBottom: 100 }}>
      <div className="max-w-[900px] mx-auto px-5 md:px-8">

        {/* Back */}
        <a href="/" className="inline-flex items-center gap-2 font-body text-sm text-[#475569] hover:text-[#0F1628] transition-colors mb-10">
          <ArrowLeft size={15} />
          Zurück zur Startseite
        </a>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[rgba(200,16,46,0.08)] rounded-full px-4 py-1.5 mb-5">
            <Shield size={13} className="text-[#C8102E]" />
            <span className="font-body font-semibold text-xs text-[#C8102E] uppercase tracking-[0.08em]">Datenschutz</span>
          </div>
          <h1 className="font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: 1.1 }}>
            Datenschutzerklärung
          </h1>
          <p className="font-body text-[#475569] mt-4 text-lg leading-relaxed max-w-[620px]">
            Amira Gebäudereinigung nimmt den Schutz Ihrer personenbezogenen Daten ernst. Diese Erklärung informiert Sie über Art, Umfang und Zweck der Datenverarbeitung auf dieser Website.
          </p>
          <p className="font-body text-[13px] text-[#94A3B8] mt-3">
            Stand: Mai 2025 · Gilt für amira-gebaeudereinigung.de
          </p>
        </div>

        {/* TOC */}
        <nav className="bg-white border border-[#EEE9E2] rounded-2xl p-6 mb-12">
          <p className="font-body font-semibold text-[13px] text-[#94A3B8] uppercase tracking-[0.08em] mb-4">Inhalt</p>
          <ol className="space-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="font-body text-[14px] text-[#475569] hover:text-[#C8102E] transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <article key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="font-display font-semibold text-[#0F1628] mb-5" style={{ fontSize: 'clamp(1.15rem, 2vw, 1.4rem)', lineHeight: 1.2 }}>
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((block, i) => {
                  if (block.type === 'p') {
                    return (
                      <p key={i} className="font-body text-[15px] text-[#475569] leading-relaxed">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === 'list') {
                    return (
                      <ul key={i} className="space-y-2 pl-1">
                        {block.items!.map((item, j) => (
                          <li key={j} className="flex gap-3">
                            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#C8102E] flex-shrink-0" />
                            <span className="font-body text-[15px] text-[#475569] leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === 'address') {
                    return (
                      <address key={i} className="not-italic bg-white border border-[#EEE9E2] rounded-xl p-5 space-y-1">
                        {block.lines!.map((line, j) => (
                          <p key={j} className="font-body text-[14px] text-[#475569]">{line}</p>
                        ))}
                      </address>
                    );
                  }
                  return null;
                })}
              </div>
              <div className="mt-8 border-b border-[#EEE9E2]" />
            </article>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 bg-white border border-[#EEE9E2] rounded-2xl p-6 flex gap-4">
          <Shield size={20} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-body font-semibold text-[14px] text-[#0F1628] mb-1">Fragen zum Datenschutz?</p>
            <p className="font-body text-[14px] text-[#475569]">
              Kontaktieren Sie uns direkt:{' '}
              <a href="mailto:Amirareinigung@gmail.com" className="text-[#C8102E] hover:underline">Amirareinigung@gmail.com</a>
              {' '}oder{' '}
              <a href="tel:+491728060586" className="text-[#C8102E] hover:underline">0172 80 60 586</a>.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
