import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const COOKIE_KEY = 'amira_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
      role="dialog"
      aria-label="Cookie-Einstellungen"
    >
      <div className="max-w-[860px] mx-auto bg-white rounded-2xl shadow-[0_8px_40px_rgba(26,31,46,0.15)] border border-border-light p-5 md:p-7">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-teal-light flex items-center justify-center flex-shrink-0 mt-0.5">
            <Cookie size={18} className="text-teal" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-body font-semibold text-[15px] text-primary-dark">
              Diese Website verwendet Cookies
            </p>
            <p className="font-body font-normal text-sm text-text-secondary mt-1 leading-relaxed">
              Wir setzen ausschließlich technisch notwendige Cookies ein, um einen sicheren und stabilen Betrieb der Website zu gewährleisten. Es werden keine Tracking- oder Marketingdienste eingesetzt.{' '}
              <a href="#datenschutz" onClick={() => setVisible(false)} className="text-teal hover:underline">
                Datenschutzhinweise
              </a>
            </p>
          </div>
          <button
            onClick={decline}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-text-muted hover:text-primary-dark transition-colors"
            aria-label="Ablehnen"
          >
            <X size={18} />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-5 sm:justify-end">
          <button
            onClick={decline}
            className="font-body font-semibold text-sm text-text-secondary border border-border-light hover:border-primary-dark rounded-lg px-5 py-2.5 transition-all"
          >
            Nur notwendige
          </button>
          <button
            onClick={accept}
            className="font-body font-semibold text-sm text-white bg-teal hover:bg-teal-dark rounded-lg px-5 py-2.5 transition-all"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
