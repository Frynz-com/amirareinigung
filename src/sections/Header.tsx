import { useEffect, useState, useCallback } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Leistungen', href: '#services' },
  { label: 'Ergebnisse', href: '#beforeafter' },
  { label: 'Über uns', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = useCallback(() => setScrolled(window.scrollY > 60), []);

  useEffect(() => {
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

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    if (href.startsWith('/')) { window.location.href = href; return; }
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: 72,
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid #E2E8F0' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 16px rgba(0,0,0,0.05)' : 'none',
        }}
      >
        <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-5 md:px-8">

          {/* Logo */}
          <a href="/" aria-label="Amira Gebäudereinigung Startseite" className="flex items-center h-full py-2 flex-shrink-0">
            <div className={`transition-all duration-300 rounded-xl px-3 py-1.5 ${!scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : ''}`}>
              <img
                src="/images/amira-logo-cropped.png"
                alt="Amira Gebäudereinigung"
                className="h-8 w-auto max-w-[160px] object-contain object-left"
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`font-body font-medium text-sm transition-colors duration-200 ${
                  activeSection === link.href
                    ? 'text-teal'
                    : scrolled ? 'text-[#475569] hover:text-[#0F1628]' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+491728060586"
              className={`inline-flex items-center gap-1.5 font-body font-medium text-sm transition-colors ${scrolled ? 'text-[#475569] hover:text-[#0F1628]' : 'text-white/80 hover:text-white'}`}
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
              className="font-body font-semibold text-sm text-white bg-teal px-4 py-2 rounded-lg transition-all"
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="font-body font-medium text-xl text-[#0F1628] hover:text-teal py-3 border-b border-[#E2E8F0] transition-colors"
              >
                {link.label}
              </a>
            ))}
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
              className="font-body font-semibold text-base text-[#0F1628] border border-[#E2E8F0] text-center px-6 py-3.5 rounded-xl"
            >
              0172 80 60 586
            </a>
          </div>
        </div>
      )}
    </>
  );
}
