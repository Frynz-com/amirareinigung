import { useEffect, useState, useCallback, useRef } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const mainLinks = [
  { label: 'Leistungen', href: '#services' },
  { label: 'Ergebnisse', href: '#beforeafter' },
  { label: 'Kontakt',    href: '#contact' },
];

const companyLinks = [
  { label: 'Über uns',       href: '/ueber-uns',       desc: 'Geschichte & Team' },
  { label: 'Warum Amira',    href: '/warum-amira',     desc: 'Unsere Stärken' },
  { label: 'Kundenstimmen',  href: '/kundenstimmen',   desc: 'Referenzen & Bewertungen' },
  { label: 'FAQ',            href: '/faq',             desc: 'Häufige Fragen' },
];

export default function Header() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [dropOpen, setDropOpen]       = useState(false);
  const [mobileCompOpen, setMobileCompOpen] = useState(false);
  const [activeSection, setActiveSection]   = useState('');
  const dropRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => setScrolled(window.scrollY > 60), []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(`#${e.target.id}`); }),
      { rootMargin: '-72px 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    setDropOpen(false);
    if (href.startsWith('/')) { window.location.href = href; return; }
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  const textColor = scrolled ? 'text-[#475569] hover:text-[#0F1628]' : 'text-white/80 hover:text-white';
  const isCompanyActive = window.location.pathname.startsWith('/ueber-uns') ||
    window.location.pathname.startsWith('/warum-amira') ||
    window.location.pathname.startsWith('/kundenstimmen') ||
    window.location.pathname.startsWith('/faq');

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: 72,
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid #EEE9E2' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 16px rgba(0,0,0,0.05)' : 'none',
        }}
      >
        <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-5 md:px-8">

          {/* Logo */}
          <a href="/" aria-label="Amira Gebäudereinigung Startseite" className="flex items-center h-full py-2 flex-shrink-0">
            <img
              src="/images/amira-logo-transparent.png"
              alt="Amira Gebäudereinigung"
              className="h-9 w-auto max-w-[170px] object-contain object-left transition-all duration-300"
              style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {mainLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`font-body font-medium text-sm transition-colors duration-200 ${
                  activeSection === link.href ? 'text-teal' : textColor
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Unternehmen dropdown */}
            <div ref={dropRef} className="relative">
              <button
                onClick={() => setDropOpen(!dropOpen)}
                className={`inline-flex items-center gap-1 font-body font-medium text-sm transition-colors duration-200 ${
                  isCompanyActive ? 'text-teal' : textColor
                }`}
              >
                Unternehmen
                <ChevronDown size={14} className={`transition-transform duration-200 ${dropOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[260px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-[#EEE9E2] overflow-hidden z-50">
                  <div className="p-2">
                    {companyLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => scrollTo(e, link.href)}
                        className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-[#FAFAF8] transition-colors group"
                      >
                        <div className="flex-1 min-w-0">
                          <p className={`font-body font-semibold text-[14px] transition-colors ${
                            window.location.pathname === link.href ? 'text-teal' : 'text-[#0F1628] group-hover:text-teal'
                          }`}>
                            {link.label}
                          </p>
                          <p className="font-body text-[12px] text-[#94A3B8] mt-0.5">{link.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="border-t border-[#F5F2EE] px-4 py-3 bg-[#FAFAF8]">
                    <p className="font-body text-[11px] text-[#94A3B8]">Amira Gebäudereinigung · Stuttgart</p>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+491728060586"
              className={`inline-flex items-center gap-1.5 font-body font-medium text-sm transition-colors ${textColor}`}
            >
              <Phone size={14} />
              0172 80 60 586
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="inline-flex items-center font-body font-semibold text-sm text-white bg-teal hover:bg-teal-dark px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-[0_4px_14px_rgba(200,16,46,0.3)] hover:-translate-y-px"
            >
              Angebot einholen
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="font-body font-semibold text-sm text-white bg-teal px-4 py-2 rounded-lg"
            >
              Angebot
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 transition-colors ${scrolled ? 'text-[#0F1628]' : 'text-white'}`}
              aria-label="Menü"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-20 pb-8 px-6 lg:hidden overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {mainLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="font-body font-medium text-xl text-[#0F1628] hover:text-teal py-3 border-b border-[#EEE9E2] transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Unternehmen accordion */}
            <div className="border-b border-[#EEE9E2]">
              <button
                onClick={() => setMobileCompOpen(!mobileCompOpen)}
                className="w-full flex items-center justify-between font-body font-medium text-xl text-[#0F1628] py-3 text-left"
              >
                Unternehmen
                <ChevronDown size={18} className={`transition-transform ${mobileCompOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileCompOpen && (
                <div className="pb-3 space-y-1">
                  {companyLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#FAFAF8] hover:bg-[#F5F2EE] transition-colors"
                    >
                      <div>
                        <p className="font-body font-semibold text-[15px] text-[#0F1628]">{link.label}</p>
                        <p className="font-body text-[12px] text-[#94A3B8]">{link.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="font-body font-semibold text-base text-white bg-teal text-center px-6 py-3.5 rounded-xl"
            >
              Kostenloses Angebot
            </a>
            <a
              href="tel:+491728060586"
              className="font-body font-semibold text-base text-[#0F1628] border border-[#EEE9E2] text-center px-6 py-3.5 rounded-xl"
            >
              0172 80 60 586
            </a>
          </div>
        </div>
      )}
    </>
  );
}
