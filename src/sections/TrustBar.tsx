import { ShieldCheck, Clock, Star, Phone } from 'lucide-react';

const items = [
  { icon: ShieldCheck, title: 'Zuverlässig & diskret', desc: 'Vertrauen seit über 7 Jahren' },
  { icon: Star,        title: '100 % Kundenzufriedenheit', desc: 'Geprüfte Qualität' },
  { icon: Clock,       title: 'Flexible Termine', desc: 'Täglich, wöchentlich, monatlich' },
  { icon: Phone,       title: 'Schnell erreichbar', desc: '0172 80 60 586' },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y-0 lg:divide-x lg:divide-[#E2E8F0]">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-4 lg:px-8 first:pl-0 last:pr-0">
                <div className="w-10 h-10 rounded-xl bg-[#F1F5F9] flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#475569]" />
                </div>
                <div>
                  <p className="font-body font-semibold text-[14px] text-[#0F1628] leading-tight">{item.title}</p>
                  <p className="font-body font-normal text-[12px] text-[#94A3B8] mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
