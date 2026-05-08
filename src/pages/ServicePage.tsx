import { ArrowRight, Check, Clock, KeyRound, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { serviceArea, servicePages, type ServicePageData } from '../data/servicePages';
import Contact from '../sections/Contact';

interface ServicePageProps {
  service: ServicePageData;
}

const referenceImages = [
  { src: '/images/reference-office-wide.jpg', alt: 'Repräsentative Bürofläche in Stuttgart' },
  { src: '/images/reference-glass-office.jpg', alt: 'Gepflegte Glasflächen in einem Praxis- oder Bürobereich' },
  { src: '/images/reference-washroom.jpg', alt: 'Sauberer Sanitärbereich als Referenz für Gebäudereinigung' },
];

const qualityStandards = [
  {
    icon: ShieldCheck,
    title: 'Diskretes Auftreten',
    text: 'Für Kanzleien, Büros und Praxen zählt ein ruhiger, respektvoller Umgang mit Arbeitsumgebung und sensiblen Bereichen.',
  },
  {
    icon: Clock,
    title: 'Planbare Zeiten',
    text: 'Reinigungstermine werden so abgestimmt, dass Kundenverkehr, Sprechzeiten und interne Abläufe möglichst wenig gestört werden.',
  },
  {
    icon: KeyRound,
    title: 'Klare Absprachen',
    text: 'Leistungsumfang, Intervalle, Zugang und Prioritäten werden vorab sauber festgelegt, damit die Ausführung verlässlich bleibt.',
  },
  {
    icon: Sparkles,
    title: 'Repräsentative Wirkung',
    text: 'Der Fokus liegt auf Räumen, die gegenüber Mandanten, Patienten, Kunden und Mitarbeitenden gepflegt wirken müssen.',
  },
];

export default function ServicePage({ service }: ServicePageProps) {
  const Icon = service.icon;
  const canonicalUrl = `https://xn--amira-gebudereiniger-jzb.de/leistungen/${service.slug}`;
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://xn--amira-gebudereiniger-jzb.de/#business',
        name: 'Amira Gebäudereinigung',
        url: 'https://xn--amira-gebudereiniger-jzb.de/',
        telephone: ['+4971127350523', '+491728060586'],
        email: 'Amirareinigung@gmail.com',
        areaServed: ['Stuttgart', 'Stuttgart Umgebung', 'Fellbach', 'Esslingen', 'Ludwigsburg'],
        priceRange: '$$',
      },
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: service.title,
        description: service.metaDescription,
        provider: { '@id': 'https://xn--amira-gebudereiniger-jzb.de/#business' },
        areaServed: serviceArea,
        serviceType: service.navTitle,
        url: canonicalUrl,
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        mainEntity: service.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Startseite',
            item: 'https://xn--amira-gebudereiniger-jzb.de/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Leistungen',
            item: 'https://xn--amira-gebudereiniger-jzb.de/#services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.navTitle,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <main className="bg-white pt-[72px]">
        <section className="relative overflow-hidden bg-primary-dark">
          <div className="absolute inset-0">
            <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,23,0.88)_0%,rgba(23,23,23,0.58)_48%,rgba(215,25,32,0.18)_100%)]" />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 py-20 md:py-24">
            <div className="max-w-[720px]">
              <nav className="mb-10 flex flex-wrap items-center gap-2 font-body text-sm text-[rgba(255,255,255,0.68)]" aria-label="Breadcrumb">
                <a href="/" className="hover:text-white transition-colors">Startseite</a>
                <span>/</span>
                <a href="/#services" className="hover:text-white transition-colors">Leistungen</a>
                <span>/</span>
                <span className="text-white">{service.navTitle}</span>
              </nav>
              <span className="inline-flex items-center gap-2 font-body font-semibold text-xs uppercase tracking-[0.08em] text-[rgba(255,255,255,0.75)]">
                <Icon size={16} className="text-teal" />
                {service.eyebrow}
              </span>
              <h1 className="font-display font-bold text-white mt-5" style={{ fontSize: 'clamp(2.15rem, 4.6vw, 4rem)', lineHeight: 1.06 }}>
                {service.h1}
              </h1>
              <p className="font-body text-[rgba(255,255,255,0.82)] text-lg leading-relaxed mt-6 max-w-[620px]">
                {service.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-9">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white font-body font-semibold px-7 py-3.5 rounded-lg transition-all">
                  Angebot einholen
                  <ArrowRight size={18} />
                </a>
                <a href="tel:+491728060586" className="inline-flex items-center justify-center gap-2 border border-white/35 text-white font-body font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-all">
                  <Phone size={18} />
                  0172 80 60 586
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-border-light">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-body font-semibold text-primary-dark">Fokus</p>
                <p className="font-body text-text-secondary mt-1">Kanzleien, Büros, Praxen und Gewerbeflächen</p>
              </div>
              <div>
                <p className="font-body font-semibold text-primary-dark">Region</p>
                <p className="font-body text-text-secondary mt-1">Stuttgart und Umgebung</p>
              </div>
              <div>
                <p className="font-body font-semibold text-primary-dark">Anfrage</p>
                <p className="font-body text-text-secondary mt-1">Kostenloses Angebot über Kontaktformular</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white" style={{ padding: '100px 0' }}>
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 items-start">
              <div>
                <span className="font-body font-semibold text-xs uppercase tracking-[0.08em] text-teal">
                  Für wen geeignet
                </span>
                <h2 className="font-display font-semibold text-primary-dark mt-3" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.7rem)', lineHeight: 1.15 }}>
                  Gebäudereinigung für Unternehmen, die seriös auftreten wollen
                </h2>
                <p className="font-body text-text-secondary text-lg leading-relaxed mt-5">
                  Amira Gebäudereinigung richtet sich an Kunden, bei denen Sauberkeit Teil des professionellen Eindrucks ist: Kanzleien, Büros, Praxen, Beratungsräume und Gewerbeobjekte in Stuttgart und Umgebung.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 border-y border-border-light py-6">
                {service.fit.map((item) => (
                  <div key={item} className="flex gap-3">
                    <Check size={18} className="text-teal mt-0.5 flex-shrink-0" />
                    <p className="font-body font-medium text-primary-dark">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F2EE]" style={{ padding: '90px 0' }}>
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="max-w-[620px] mb-10">
              <span className="font-body font-semibold text-xs uppercase tracking-[0.08em] text-teal">
                Qualitätsanspruch
              </span>
              <h2 className="font-display font-semibold text-[#0F1628] mt-3" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.7rem)', lineHeight: 1.15 }}>
                Professionelle Reinigung für sensible Geschäftsräume
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {qualityStandards.map((standard) => {
                const StandardIcon = standard.icon;
                return (
                  <div key={standard.title} className="border border-[#EEE9E2] rounded-lg p-6 bg-white">
                    <StandardIcon size={24} className="text-teal" />
                    <h3 className="font-body font-semibold text-[#0F1628] mt-5">{standard.title}</h3>
                    <p className="font-body text-sm text-[#64748B] leading-relaxed mt-3">{standard.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-bg-main" style={{ padding: '100px 0' }}>
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="font-display font-semibold text-primary-dark" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.7rem)', lineHeight: 1.15 }}>
                  Leistungsumfang
                </h2>
                <div className="mt-7 divide-y divide-border-light border-y border-border-light">
                  {service.scope.map((item) => (
                    <div key={item} className="flex gap-3 py-4">
                      <Check size={18} className="text-teal mt-0.5 flex-shrink-0" />
                      <p className="font-body text-text-secondary leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-display font-semibold text-primary-dark" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.7rem)', lineHeight: 1.15 }}>
                  Ablauf bis zum Angebot
                </h2>
                <ol className="mt-7 space-y-4">
                  {service.process.map((item, index) => (
                    <li key={item} className="grid grid-cols-[44px_1fr] gap-4 items-start">
                      <span className="w-11 h-11 rounded-full bg-teal text-white font-body font-semibold flex items-center justify-center">{index + 1}</span>
                      <p className="font-body text-text-secondary leading-relaxed pt-2">{item}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white" style={{ padding: '100px 0' }}>
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
              <div>
                <span className="font-body font-semibold text-xs uppercase tracking-[0.08em] text-teal">
                  Referenzwirkung
                </span>
                <h2 className="font-display font-semibold text-primary-dark mt-3" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.7rem)', lineHeight: 1.15 }}>
                  {service.proofTitle}
                </h2>
                <p className="font-body text-text-secondary text-lg leading-relaxed mt-5">{service.proofText}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src={referenceImages[0].src} alt={referenceImages[0].alt} className="col-span-2 aspect-[16/8] w-full object-cover rounded-lg" loading="lazy" />
                <img src={referenceImages[1].src} alt={referenceImages[1].alt} className="aspect-[4/3] w-full object-cover rounded-lg" loading="lazy" />
                <img src={referenceImages[2].src} alt={referenceImages[2].alt} className="aspect-[4/3] w-full object-cover rounded-lg" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FAFAF8]" style={{ padding: '90px 0', borderTop: '1px solid #EEE9E2', borderBottom: '1px solid #EEE9E2' }}>
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-10 lg:gap-14">
              <div>
                <span className="inline-flex items-center gap-2 font-body font-semibold text-xs uppercase tracking-[0.08em] text-teal">
                  <MapPin size={16} className="text-teal" />
                  Einsatzgebiet
                </span>
                <h2 className="font-display font-semibold text-[#0F1628] mt-3" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.7rem)', lineHeight: 1.15 }}>
                  Stuttgart und Umgebung
                </h2>
                <p className="font-body text-[#475569] text-lg leading-relaxed mt-5">
                  Wir bedienen Stuttgart sowie umliegende Orte. Für Kanzleien, Büros und Gewerbekunden erstellen wir ein passendes Angebot nach Objekt, Intervall und gewünschtem Leistungsumfang.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {serviceArea.map((area) => (
                  <div key={area} className="border border-[#EEE9E2] rounded-lg px-4 py-3 font-body text-[#475569] bg-white">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white" style={{ padding: '100px 0' }}>
          <div className="max-w-[900px] mx-auto px-5 md:px-8">
            <h2 className="font-display font-semibold text-primary-dark" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.7rem)', lineHeight: 1.15 }}>
              Häufige Fragen zu {service.title}
            </h2>
            <div className="mt-8 divide-y divide-border-light border-y border-border-light">
              {service.faq.map((item) => (
                <div key={item.question} className="py-6">
                  <h3 className="font-body font-semibold text-lg text-primary-dark">{item.question}</h3>
                  <p className="font-body text-text-secondary leading-relaxed mt-2">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg-main" style={{ padding: '90px 0' }}>
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
              <div>
                <span className="font-body font-semibold text-xs uppercase tracking-[0.08em] text-teal">
                  Weitere Leistungen
                </span>
                <h2 className="font-display font-semibold text-primary-dark mt-3" style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.3rem)', lineHeight: 1.15 }}>
                  Gebäudereinigung aus einer Hand
                </h2>
              </div>
              <a href="/#services" className="font-body font-semibold text-teal hover:text-teal-dark transition-colors">
                Alle Leistungen ansehen
              </a>
            </div>
            <RelatedServices currentSlug={service.slug} />
          </div>
        </section>

        <section className="bg-teal-ultra" style={{ padding: '90px 0' }}>
          <div className="max-w-[900px] mx-auto px-5 md:px-8 text-center">
            <h2 className="font-display font-semibold text-primary-dark" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.7rem)', lineHeight: 1.15 }}>
              Kostenloses Angebot für {service.navTitle} einholen
            </h2>
            <p className="font-body text-text-secondary text-lg leading-relaxed mt-4">
              Beschreiben Sie kurz Ihr Objekt, die gewünschte Leistung und den passenden Zeitraum. Wir melden uns mit einer seriösen Einschätzung für Stuttgart und Umgebung.
            </p>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 mt-8 bg-teal hover:bg-teal-dark text-white font-body font-semibold px-8 py-4 rounded-lg transition-all">
              Anfrage senden
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}

export function RelatedServices({ currentSlug }: { currentSlug: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {servicePages.filter((item) => item.slug !== currentSlug).slice(0, 4).map((item) => (
        <a key={item.slug} href={`/leistungen/${item.slug}`} className="border border-border-light rounded-lg p-5 hover:border-teal/40 hover:-translate-y-0.5 transition-all">
          <p className="font-body font-semibold text-primary-dark">{item.navTitle}</p>
          <p className="font-body text-sm text-text-secondary mt-2">{item.title}</p>
        </a>
      ))}
    </div>
  );
}
