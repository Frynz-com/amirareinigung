const serviceLinks = [
  { label: 'Fensterreinigung',     href: '/leistungen/fensterreinigung' },
  { label: 'Büroreinigung',        href: '/leistungen/buero-reinigung' },
  { label: 'Treppenhausreinigung', href: '/leistungen/treppenhausreinigung' },
  { label: 'Unterhaltsreinigung',  href: '/leistungen/unterhaltsreinigung' },
  { label: 'Grundreinigung',       href: '/leistungen/grundreinigung' },
  { label: 'Bauendreinigung',      href: '/leistungen/bauendreinigung' },
];
const companyLinks = [
  { label: 'Über uns',       href: '#about' },
  { label: 'Warum Amira',    href: '#why-us' },
  { label: 'Kundenstimmen',  href: '#testimonials' },
  { label: 'FAQ',            href: '#faq' },
  { label: 'Angebot einholen', href: '#contact' },
];
const legalLinks = [
  { label: 'Impressum',   href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
];

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href.startsWith('#')) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  }
}

export default function Footer() {
  return (
    <footer className="bg-[#0A1020]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-16 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/[0.06]">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="inline-flex bg-white rounded-xl px-4 py-3 mb-5">
              <img
                src="/images/amira-logo-cropped.png"
                alt="Amira Gebäudereinigung"
                className="h-9 w-auto max-w-[160px] object-contain object-left"
              />
            </div>
            <p className="font-body text-[14px] text-white/50 leading-relaxed max-w-[240px]">
              Professionelle Gebäudereinigung in Stuttgart und Umgebung seit über 7 Jahren.
            </p>
            <div className="mt-4 space-y-1.5">
              <a href="tel:+491728060586"   className="block font-body text-[14px] text-white/70 hover:text-teal transition-colors">0172 80 60 586</a>
              <a href="tel:+4971127350523"  className="block font-body text-[14px] text-white/70 hover:text-teal transition-colors">0711 27 350 523</a>
              <a href="mailto:Amirareinigung@gmail.com" className="block font-body text-[13px] text-white/50 hover:text-teal transition-colors break-all">Amirareinigung@gmail.com</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body font-semibold text-[13px] text-white/80 uppercase tracking-[0.08em] mb-5">Leistungen</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-body text-[14px] text-white/50 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body font-semibold text-[13px] text-white/80 uppercase tracking-[0.08em] mb-5">Unternehmen</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} onClick={(e) => scrollTo(e, l.href)} className="font-body text-[14px] text-white/50 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-body font-semibold text-[13px] text-white/80 uppercase tracking-[0.08em] mb-5">Rechtliches</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} onClick={(e) => scrollTo(e, l.href)} className="font-body text-[14px] text-white/50 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col-reverse md:flex-row items-center justify-between gap-2">
          <p className="font-body text-[13px] text-white/30">© 2026 Amira Gebäudereinigung. Alle Rechte vorbehalten.</p>
          <p className="font-body text-[13px] text-white/30">Stuttgart und Umgebung</p>
        </div>
      </div>
    </footer>
  );
}
