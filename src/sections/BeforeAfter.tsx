import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MoveHorizontal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ComparisonPair {
  before: string;
  after: string;
  caption: string;
}

const comparisons: ComparisonPair[] = [
  {
    before: '/images/before-office.jpg',
    after: '/images/after-office.jpg',
    caption: 'Bauendreinigung — Gewerbeobjekt Stuttgart',
  },
  {
    before: '/images/before-bathroom.jpg',
    after: '/images/after-bathroom.jpg',
    caption: 'Sanitärgrundreinigung — Praxis',
  },
];


function ComparisonSlider({ before, after, caption }: ComparisonPair) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };
    const handleEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{ touchAction: 'none' }}
      >
        {/* After image (full, underneath) */}
        <img
          src={after}
          alt="Nachher"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={before}
            alt="Vorher"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Labels */}
        <div
          className="absolute top-4 left-4 bg-[rgba(26,31,46,0.75)] text-white text-xs font-body font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg backdrop-blur-sm transition-opacity"
          style={{ opacity: sliderPos > 8 ? 1 : 0 }}
        >
          Vorher
        </div>
        <div
          className="absolute top-4 right-4 bg-teal text-white text-xs font-body font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg backdrop-blur-sm transition-opacity"
          style={{ opacity: sliderPos < 92 ? 1 : 0 }}
        >
          Nachher
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex items-center justify-center z-10 transition-transform"
          style={{
            left: `${sliderPos}%`,
            transform: `translate(-50%, -50%) scale(${isDragging ? 1.1 : 1})`,
          }}
        >
          <MoveHorizontal size={20} className="text-primary-dark" />
        </div>
      </div>
      <p className="font-body font-medium text-sm text-text-secondary text-center">{caption}</p>
    </div>
  );
}

export default function BeforeAfter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = sectionRef.current?.querySelector('.ba-content');
      if (el) {
        gsap.fromTo(el, { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="beforeafter" ref={sectionRef} className="bg-[#F5F2EE]" style={{ padding: '120px 0' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 ba-content">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-body font-semibold text-xs uppercase tracking-[0.08em] text-teal">
            Ergebnisse
          </span>
          <h2 className="font-display font-semibold text-[#0F1628] mt-3" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: 1.15 }}>
            Ergebnisse & Referenzflächen
          </h2>
          <p className="font-body font-normal text-[#64748B] mt-3 text-lg max-w-[500px] mx-auto">
            Überzeugen Sie sich selbst von sauberer Wirkung in Geschäfts-, Praxis- und Büroflächen.
          </p>
        </div>

        {/* Main Slider */}
        <ComparisonSlider {...comparisons[activeIndex]} />

        {/* Thumbnail selectors */}
        <div className="flex justify-center gap-4 mt-8">
          {comparisons.map((comp, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative w-24 h-16 md:w-32 md:h-20 rounded-xl overflow-hidden transition-all duration-200 ${
                i === activeIndex
                  ? 'ring-2 ring-teal ring-offset-2 ring-offset-[#F5F2EE] scale-105'
                  : 'opacity-60 hover:opacity-90'
              }`}
            >
              <img src={comp.after} alt={comp.caption} className="w-full h-full object-cover" />
              <span className="absolute bottom-1 left-1.5 text-[10px] font-body font-semibold text-white bg-[rgba(0,0,0,0.5)] px-1.5 py-0.5 rounded">
                {comp.caption.split(' — ')[0]}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
