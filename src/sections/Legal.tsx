import { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

export default function Legal() {
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
            <FileText size={13} className="text-[#C8102E]" />
            <span className="font-body font-semibold text-xs text-[#C8102E] uppercase tracking-[0.08em]">Rechtliches</span>
          </div>
          <h1 className="font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: 1.1 }}>
            Impressum
          </h1>
          <p className="font-body text-[#475569] mt-4 text-lg leading-relaxed max-w-[560px]">
            Angaben gemäß § 5 DDG.
          </p>
        </div>

        {/* Anbieter */}
        <div className="bg-white border border-[#EEE9E2] rounded-2xl overflow-hidden mb-8">
          <div className="px-7 py-5 border-b border-[#F5F2EE]">
            <p className="font-body font-semibold text-[13px] text-[#94A3B8] uppercase tracking-[0.08em]">Anbieter</p>
          </div>
          <div className="divide-y divide-[#F5F2EE]">
            {[
              ['Unternehmensname',   'Amira Gebäudereinigung'],
              ['Anschrift',          'Wera Straße 53, 70190 Stuttgart'],
              ['Telefon',            '0711 27 350 523'],
              ['Mobil',              '0172 80 60 586'],
              ['E-Mail',             'amirareinigung@gmail.com'],
              ['Steuernummer',       '93061/27831'],
              ['Leistungsgebiet',    'Stuttgart und Umgebung'],
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-1 sm:gap-6 px-7 py-4">
                <dt className="font-body font-semibold text-[14px] text-[#0F1628]">{label}</dt>
                <dd className="font-body text-[14px] text-[#475569]">{value}</dd>
              </div>
            ))}
          </div>
        </div>

        {/* Weitere Angaben */}
        <div className="bg-white border border-[#EEE9E2] rounded-2xl p-7 space-y-5 mb-8">
          <h2 className="font-display font-semibold text-[#0F1628] text-xl mb-4">Weitere Angaben</h2>

          <div>
            <h3 className="font-body font-semibold text-[14px] text-[#0F1628] mb-1">Verantwortlich für den Inhalt</h3>
            <p className="font-body text-[14px] text-[#475569] leading-relaxed">
              Amira Gebäudereinigung, Wera Straße 53, 70190 Stuttgart<br />
              (gem. § 18 Abs. 2 MStV)
            </p>
          </div>

          <div>
            <h3 className="font-body font-semibold text-[14px] text-[#0F1628] mb-1">Online-Streitbeilegung</h3>
            <p className="font-body text-[14px] text-[#475569] leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#C8102E] hover:underline">
                https://ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h3 className="font-body font-semibold text-[14px] text-[#0F1628] mb-1">Haftung für Inhalte</h3>
            <p className="font-body text-[14px] text-[#475569] leading-relaxed">
              Als Diensteanbieter sind wir nach den allgemeinen Gesetzen für eigene Inhalte verantwortlich. Für externe Links übernehmen wir keine Haftung; für Inhalte verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>
        </div>

        {/* Link to Datenschutz */}
        <div className="bg-[#F5F2EE] border border-[#EEE9E2] rounded-2xl p-6 flex items-center justify-between gap-4">
          <div>
            <p className="font-body font-semibold text-[14px] text-[#0F1628]">Datenschutzerklärung</p>
            <p className="font-body text-[13px] text-[#64748B] mt-0.5">Informationen zur Verarbeitung Ihrer personenbezogenen Daten.</p>
          </div>
          <a href="/datenschutz" className="flex-shrink-0 font-body font-semibold text-sm text-white bg-[#C8102E] hover:bg-[#A50D24] px-5 py-2.5 rounded-xl transition-all">
            Zur Datenschutzerklärung
          </a>
        </div>

      </div>
    </main>
  );
}
