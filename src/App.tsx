import './App.css';
import { useEffect, useMemo, useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import Services from './sections/Services';
import BeforeAfter from './sections/BeforeAfter';
import About from './sections/About';
import Stats from './sections/Stats';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import CTABanner from './sections/CTABanner';
import Contact from './sections/Contact';
import Legal from './sections/Legal';
import Footer from './sections/Footer';
import FloatingActions from './components/FloatingActions';
import CookieBanner from './components/CookieBanner';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import DatenschutzPage from './pages/DatenschutzPage';
import WhyUsPage from './pages/WhyUsPage';
import KundenstimmenPage from './pages/KundenstimmenPage';
import FAQPage from './pages/FAQPage';
import { servicePageMap, type ServiceSlug } from './data/servicePages';

function setMeta(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function setCanonical(path: string) {
  let tag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!tag) {
    tag = document.createElement('link');
    tag.rel = 'canonical';
    document.head.appendChild(tag);
  }
  tag.href = `${window.location.origin}${path}`;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfter />
      <About />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Contact />
    </main>
  );
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  const service = useMemo(() => {
    const match = path.match(/^\/leistungen\/([^/]+)\/?$/);
    return match ? servicePageMap.get(match[1] as ServiceSlug) : undefined;
  }, [path]);

  const isLegal = path === '/impressum';
  const isDatenschutz = path === '/datenschutz';
  const isAbout = path === '/ueber-uns';
  const isWhyUs = path === '/warum-amira';
  const isKundenstimmen = path === '/kundenstimmen';
  const isFAQ = path === '/faq';

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (service) {
      document.title = service.metaTitle;
      setMeta('description', service.metaDescription);
      setCanonical(`/leistungen/${service.slug}`);
      return;
    }
    if (path === '/ueber-uns') {
      document.title = 'Über uns – Amira Gebäudereinigung Stuttgart';
      setMeta('description', 'Seit über 7 Jahren professionelle Gebäudereinigung in Stuttgart. Amira Gebäudereinigung – diskret, verlässlich, für Kanzleien, Praxen und Büros.');
      setCanonical('/ueber-uns');
      return;
    }
    if (path === '/warum-amira') {
      document.title = 'Warum Amira – Ihr Vorteil bei der Reinigung | Stuttgart';
      setMeta('description', 'Warum Kanzleien, Praxen und Büros auf Amira Gebäudereinigung vertrauen: Feste Teams, zertifizierte Qualität, diskrete Arbeitsweise in Stuttgart.');
      setCanonical('/warum-amira');
      return;
    }
    if (path === '/kundenstimmen') {
      document.title = 'Kundenstimmen – Amira Gebäudereinigung Stuttgart';
      setMeta('description', 'Bewertungen und Referenzen von Kanzleien, Arztpraxen, Büros und Hausverwaltungen in Stuttgart über Amira Gebäudereinigung.');
      setCanonical('/kundenstimmen');
      return;
    }
    if (path === '/faq') {
      document.title = 'FAQ – Häufige Fragen | Amira Gebäudereinigung Stuttgart';
      setMeta('description', 'Antworten auf häufige Fragen zu Diskretion, Ablauf, Leistungen und Abrechnung bei Amira Gebäudereinigung Stuttgart.');
      setCanonical('/faq');
      return;
    }
    if (path === '/impressum') {
      document.title = 'Impressum – Amira Gebäudereinigung';
      setMeta('description', 'Impressum von Amira Gebäudereinigung, Stuttgart.');
      setCanonical('/impressum');
      return;
    }
    if (path === '/datenschutz') {
      document.title = 'Datenschutz – Amira Gebäudereinigung';
      setMeta('description', 'Datenschutzerklärung von Amira Gebäudereinigung, Stuttgart.');
      setCanonical('/datenschutz');
      return;
    }
    document.title = 'Amira Gebäudereinigung | Professionelle Reinigung Stuttgart';
    setMeta('description', 'Amira Gebäudereinigung – Ihr verlässlicher Partner für Fensterreinigung, Büroreinigung, Treppenhausreinigung, Unterhalts- und Grundreinigung in Stuttgart. Kostenloses Angebot einholen.');
    setCanonical('/');
  }, [service, path]);

  return (
    <div className="font-body">
      <Header />
      {service ? <ServicePage service={service} /> : isAbout ? <AboutPage /> : isWhyUs ? <WhyUsPage /> : isKundenstimmen ? <KundenstimmenPage /> : isFAQ ? <FAQPage /> : isDatenschutz ? <DatenschutzPage /> : isLegal ? <Legal /> : <HomePage />}
      <Footer />
      <FloatingActions />
      <CookieBanner />
    </div>
  );
}
