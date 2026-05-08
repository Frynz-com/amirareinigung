import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, CheckCircle, Lock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const serviceOptions = ['Bitte wählen...','Fensterreinigung','Büroreinigung','Treppenhausreinigung','Unterhaltsreinigung','Grundreinigung','Bauendreinigung','Wohnungsreinigung','Sonstiges'];

type F = { name: string; email: string; phone: string; service: string; message: string; privacy: boolean };

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState<F>({ name:'', email:'', phone:'', service:'', message:'', privacy: false });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-left',  { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' } });
      gsap.fromTo('.contact-right', { opacity: 0, x:  20 }, { opacity: 1, x: 0, duration: 0.6, delay: 0.15, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => {
    const t = e.target;
    setForm(p => ({ ...p, [t.name]: t instanceof HTMLInputElement && t.type === 'checkbox' ? t.checked : t.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true); setError(false);
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'kontakt', name: form.name, email: form.email, phone: form.phone, service: form.service, message: form.message }).toString(),
      });
      if (res.ok) setSubmitted(true); else setError(true);
    } catch { setError(true); }
    finally { setSubmitting(false); }
  };

  const inp = "w-full bg-white border border-[#EEE9E2] rounded-xl px-4 py-3.5 font-body text-[15px] text-[#0F1628] placeholder:text-[#94A3B8] focus:border-teal focus:ring-2 focus:ring-teal/10 focus:outline-none transition-all";

  return (
    <section id="contact" ref={sectionRef} className="bg-[#FAFAF8]" style={{ padding: '120px 0' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-12 lg:gap-16">

          {/* Form */}
          <div className="contact-left">
            <p className="font-body font-semibold text-xs uppercase tracking-[0.1em] text-teal mb-3">Kontakt</p>
            <h2 className="font-display font-bold text-[#0F1628]" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: 1.1 }}>
              Kostenloses Angebot anfragen
            </h2>
            <p className="font-body text-[#475569] mt-3 text-lg">
              Wir beraten Sie prompt zu Gebäudereinigung in Stuttgart und Umgebung.
            </p>

            {submitted ? (
              <div className="mt-8 flex items-start gap-4 p-6 bg-white border border-[#EEE9E2] rounded-2xl">
                <CheckCircle size={26} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body font-semibold text-[#0F1628] text-lg">Vielen Dank!</p>
                  <p className="font-body text-[#475569] mt-1">Wir melden uns innerhalb von 24 Stunden. Oder rufen Sie uns direkt an: 0172 80 60 586</p>
                </div>
              </div>
            ) : (
              <form name="kontakt" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="mt-8 space-y-4">
                <input type="hidden" name="form-name" value="kontakt" />
                <input type="hidden" name="bot-field" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body font-medium text-[13px] text-[#475569] mb-1.5">Name <span className="text-teal">*</span></label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Ihr Name" className={inp} />
                  </div>
                  <div>
                    <label className="block font-body font-medium text-[13px] text-[#475569] mb-1.5">E-Mail <span className="text-teal">*</span></label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="ihre@email.de" className={inp} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body font-medium text-[13px] text-[#475569] mb-1.5">Telefon</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="0172 80 60 586" className={inp} />
                  </div>
                  <div>
                    <label className="block font-body font-medium text-[13px] text-[#475569] mb-1.5">Leistung</label>
                    <select name="service" value={form.service} onChange={handleChange} className={inp + ' cursor-pointer appearance-none'}>
                      {serviceOptions.map(o => <option key={o} value={o === 'Bitte wählen...' ? '' : o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-body font-medium text-[13px] text-[#475569] mb-1.5">Nachricht</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                    placeholder="Kurze Beschreibung Ihres Objekts und Reinigungsbedarfs..." className={inp + ' resize-none'} />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="privacy" required checked={form.privacy} onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded accent-[#C8102E]" />
                  <span className="font-body text-sm text-[#475569] leading-relaxed">
                    Ich habe die <a href="/datenschutz" className="text-teal underline underline-offset-2">Datenschutzhinweise</a> zur Kenntnis genommen.
                  </span>
                </label>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-sm text-red-700 font-body">
                    Fehler beim Senden. Bitte erneut versuchen oder direkt anrufen.
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
                  <button type="submit" disabled={submitting}
                    className="font-body font-semibold text-base text-white bg-teal hover:bg-teal-dark px-10 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(200,16,46,0.3)] disabled:opacity-50">
                    {submitting ? 'Wird gesendet…' : 'Anfrage senden'}
                  </button>
                  <span className="flex items-center gap-1.5 text-xs text-[#94A3B8] font-body">
                    <Lock size={12} /> Ihre Daten sind sicher
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="contact-right lg:self-start space-y-4">
            <div className="bg-white border border-[#EEE9E2] rounded-2xl p-7 space-y-6">
              {[
                { Icon: MapPin, label: 'Einsatzgebiet', content: 'Stuttgart und gesamte Region:\nFellbach, Esslingen, Ludwigsburg,\nLeinfelden-Echterdingen u. v. m.' },
                { Icon: Phone, label: 'Telefon', content: null },
                { Icon: Mail, label: 'E-Mail', content: null },
                { Icon: Clock, label: 'Verfügbarkeit', content: 'Termine nach Vereinbarung\nTäglich, wöchentlich oder monatlich' },
              ].map(({ Icon, label, content }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#F5F2EE] flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#64748B]" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-[13px] text-[#0F1628]">{label}</p>
                    {label === 'Telefon' && (
                      <div className="mt-1 space-y-0.5">
                        <a href="tel:+4971127350523" className="block font-body text-[14px] text-teal hover:underline">0711 27 350 523</a>
                        <a href="tel:+491728060586"  className="block font-body text-[14px] text-teal hover:underline">0172 80 60 586</a>
                      </div>
                    )}
                    {label === 'E-Mail' && (
                      <a href="mailto:Amirareinigung@gmail.com" className="block font-body text-[14px] text-teal mt-1 hover:underline break-all">
                        Amirareinigung@gmail.com
                      </a>
                    )}
                    {content && label !== 'Telefon' && label !== 'E-Mail' && (
                      <p className="font-body text-[14px] text-[#475569] mt-1 whitespace-pre-line">{content}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="border-t border-[#EEE9E2] pt-5">
                <p className="font-body text-[14px] text-[#475569] mb-3">Lieber direkt anrufen?</p>
                <a href="tel:+491728060586"
                  className="inline-flex items-center gap-2 font-body font-semibold text-sm text-white bg-teal hover:bg-teal-dark px-5 py-2.5 rounded-xl transition-all">
                  <Phone size={15} /> 0172 80 60 586
                </a>
              </div>
            </div>

            {/* Trust mini */}
            <div className="grid grid-cols-3 gap-3">
              {[{v:'7+', l:'Jahre'},{v:'3.000+', l:'Aufträge'},{v:'100%', l:'Zufriedenheit'}].map(b=>(
                <div key={b.v} className="bg-[#F5F2EE] border border-[#EEE9E2] rounded-xl p-4 text-center">
                  <p className="font-display font-bold text-lg text-teal">{b.v}</p>
                  <p className="font-body text-xs text-[#64748B] mt-0.5">{b.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
