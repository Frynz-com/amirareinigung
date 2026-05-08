import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sun, Building, Briefcase, ArrowRight, ClipboardCheck, HardHat, Sparkles, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const featuredServices = [
  {
    title: 'Büro- & Unterhaltsreinigung',
    href: '/leistungen/buero-reinigung',
    image: '/images/reference-office-wide.jpg',
    tag: 'Beliebteste Leistung',
    description: 'Regelmäßige, zuverlässige Reinigung für ein sauberes und hygienisches Arbeitsumfeld.',
    features: ['Büroreinigung', 'Sanitärbereiche', 'Saugen & Wischen', 'Flexible Intervalle'],
  },
  {
    title: 'Bauendreinigung',
    href: '/leistungen/bauendreinigung',
    image: '/images/bauendreinigung.jpg',
    tag: 'Für Neubau & Renovierung',
    description: 'Nach Neubau, Umbau oder Renovierung: Ihr Objekt bezugsfertig — schnell und gründlich.',
    features: ['Baustaub entfernen', 'Böden & Oberflächen', 'Fenster & Glas', 'Termingerecht'],
  },
];

const listServices = [
  { title: 'Fensterreinigung',      icon: Sun,            href: '/leistungen/fensterreinigung',      desc: 'Streifenfrei – für Büros und Praxen.' },
  { title: 'Büroreinigung',         icon: Briefcase,      href: '/leistungen/buero-reinigung',       desc: 'Hygienisch sauber für Kanzleien & Unternehmen.' },
  { title: 'Treppenhausreinigung',  icon: Building,       href: '/leistungen/treppenhausreinigung',  desc: 'Gepflegte Eingänge für Wohnanlagen.' },
  { title: 'Unterhaltsreinigung',   icon: ClipboardCheck, href: '/leistungen/unterhaltsreinigung',   desc: 'Regelmäßige Sauberkeit nach Ihrem Rhythmus.' },
  { title: 'Grundreinigung',        icon: Sparkles,       href: '/leistungen/grundreinigung',        desc: 'Intensive Tiefenreinigung für alle Flächen.' },
  { title: 'Bauendreinigung',       icon: HardHat,        href: '/leistungen/bauendreinigung',       desc: 'Professionell nach Bau- und Renovierungsarbeiten.' },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.srv-header', { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' } });
      gsap.fromTo('.srv-card', { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.srv-cards', start: 'top 85%' } });
      gsap.fromTo('.srv-row', { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out',
          scrollTrigger: { trigger: '.srv-list', start: 'top 88%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const gotoContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <section id="services" ref={sectionRef} style={{ padding: '130px 0', background: '#FAFAF8' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Header — editorial split */}
        <div className="srv-header grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-end mb-16">
          <div>
            <p className="font-body font-semibold text-[11px] uppercase tracking-[0.16em] text-teal mb-4">Leistungen</p>
            <h2
              className="font-display font-bold text-[#0F1628]"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
            >
              Professionelle Reinigung<br />
              <span className="text-[#475569]">aus einer Hand.</span>
            </h2>
          </div>
          <p className="font-body text-[#64748B] max-w-[300px] leading-relaxed text-[15px] lg:text-right">
            Zuverlässig, flexibel und zu attraktiven Preisen — in Stuttgart und der gesamten Region.
          </p>
        </div>

        {/* Featured cards — cinematic */}
        <div className="srv-cards grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16">
          {featuredServices.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="srv-card group relative overflow-hidden rounded-2xl block"
              style={{ aspectRatio: '16/10' }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to top, rgba(6,8,18,0.88) 0%, rgba(6,8,18,0.45) 50%, rgba(6,8,18,0.10) 100%)'
              }} />

              {/* Tag */}
              <div className="absolute top-5 left-5">
                <span className="inline-flex font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full">
                  {service.tag}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-display font-bold text-white" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', lineHeight: 1.1 }}>
                  {service.title}
                </h3>
                <p className="font-body text-[14px] text-white/65 mt-2 leading-relaxed max-w-[380px]">
                  {service.description}
                </p>
                <div className="flex items-center gap-1.5 mt-5 font-body font-semibold text-[13px] text-white/85 group-hover:text-white transition-colors">
                  Mehr erfahren
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* All services — editorial list */}
        <div className="srv-list bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #EEE9E2' }}>
          <div className="px-7 pt-7 pb-5" style={{ borderBottom: '1px solid #F0EDE8' }}>
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">Alle Leistungen</p>
          </div>
          {listServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <a
                key={service.title}
                href={service.href}
                className="srv-row group flex items-center justify-between px-7 py-5 transition-colors hover:bg-[#FAFAF8]"
                style={{ borderBottom: i < listServices.length - 1 ? '1px solid #F5F2EE' : 'none' }}
              >
                <div className="flex items-center gap-5">
                  <div className="w-9 h-9 rounded-xl bg-[#F5F2EE] group-hover:bg-[rgba(200,16,46,0.07)] flex items-center justify-center flex-shrink-0 transition-colors">
                    <Icon size={16} className="text-[#64748B] group-hover:text-teal transition-colors" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-[15px] text-[#0F1628]">{service.title}</p>
                    <p className="font-body text-[13px] text-[#94A3B8] mt-0.5">{service.desc}</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-[#D4CFCA] group-hover:text-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-4" />
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            onClick={gotoContact}
            className="inline-flex items-center gap-2 font-body font-semibold text-[15px] text-white bg-teal hover:bg-teal-dark px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-[0_8px_24px_rgba(200,16,46,0.32)] hover:-translate-y-0.5"
          >
            Kostenloses Angebot einholen <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}
