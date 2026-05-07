import { Briefcase, Building, ClipboardCheck, Sparkles, Sun, HardHat } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ServiceSlug =
  | 'fensterreinigung'
  | 'buero-reinigung'
  | 'treppenhausreinigung'
  | 'unterhaltsreinigung'
  | 'grundreinigung'
  | 'bauendreinigung';

export interface ServicePageData {
  slug: ServiceSlug;
  title: string;
  navTitle: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  fit: string[];
  scope: string[];
  process: string[];
  proofTitle: string;
  proofText: string;
  faq: Array<{ question: string; answer: string }>;
}

export const servicePages: ServicePageData[] = [
  {
    slug: 'fensterreinigung',
    title: 'Fensterreinigung Stuttgart',
    navTitle: 'Fensterreinigung',
    eyebrow: 'Streifenfreie Glasflächen',
    h1: 'Fensterreinigung in Stuttgart für Büros, Kanzleien und Gewerbeflächen',
    metaTitle: 'Fensterreinigung Stuttgart | Amira Gebäudereinigung',
    metaDescription: 'Professionelle Fensterreinigung in Stuttgart und Umgebung für Büros, Kanzleien, Praxen und Gewerbe. Streifenfreie Glasflächen, flexible Termine, Angebot einholen.',
    intro: 'Saubere Fenster prägen den ersten Eindruck eines Unternehmens. Amira Gebäudereinigung reinigt Glasflächen, Rahmen und zugängliche Fensterbereiche gründlich, planbar und mit Blick auf repräsentative Geschäftsräume.',
    image: '/images/reference-glass-office.jpg',
    imageAlt: 'Gepflegte Glasflächen in moderner Praxis als Referenz für Fensterreinigung in Stuttgart',
    icon: Sun,
    fit: ['Kanzleien und Beratungsbüros', 'Praxen und Empfangsbereiche', 'Büroetagen mit Glasabtrennungen', 'Gewerberäume mit Kundenverkehr'],
    scope: ['Innen- und Außenseiten zugänglicher Fenster', 'Glasflächen, Türen und Trennwände', 'Fensterrahmen und Fensterbänke nach Absprache', 'Regelmäßige Reinigung oder Einzeltermin'],
    process: ['Objekt und Glasflächen kurz abstimmen', 'Termin passend zum Betriebsablauf planen', 'Reinigung sauber und störungsarm durchführen', 'Ergebnis prüfen und Folgetermine festlegen'],
    proofTitle: 'Für Räume, die professionell wirken sollen',
    proofText: 'Gerade Kanzleien, Büros und Praxen leben von hellen, gepflegten Räumen. Klare Glasflächen lassen Wartebereiche, Besprechungsräume und Eingänge hochwertiger erscheinen.',
    faq: [
      { question: 'Reinigen Sie auch Glaswände in Büros?', answer: 'Ja. Neben klassischen Fenstern reinigen wir auch Glasabtrennungen, Glastüren und sichtbare Innenverglasungen in Büro- und Praxisflächen.' },
      { question: 'Kann die Fensterreinigung regelmäßig erfolgen?', answer: 'Ja. Je nach Objekt sind monatliche, quartalsweise oder individuelle Intervalle möglich.' },
      { question: 'Erstellen Sie ein Angebot vorab?', answer: 'Ja. Über das Kontaktformular können Sie ein kostenloses und unverbindliches Angebot anfragen.' },
    ],
  },
  {
    slug: 'buero-reinigung',
    title: 'Büroreinigung Stuttgart',
    navTitle: 'Büroreinigung',
    eyebrow: 'Seriöse Arbeitsumgebung',
    h1: 'Büroreinigung in Stuttgart für Kanzleien, Agenturen und moderne Unternehmen',
    metaTitle: 'Büroreinigung Stuttgart | Büros & Kanzleien reinigen lassen',
    metaDescription: 'Büroreinigung in Stuttgart und Umgebung für Kanzleien, Praxen und Unternehmen. Arbeitsplätze, Empfang, Sanitärbereiche und Böden zuverlässig reinigen lassen.',
    intro: 'Eine zuverlässige Büroreinigung hält Arbeitsplätze, Besprechungsräume, Empfangsbereiche und Sanitärzonen dauerhaft gepflegt. Wir arbeiten diskret, planbar und so, dass Ihr Team am nächsten Tag in eine saubere Umgebung kommt.',
    image: '/images/reference-office-wide.jpg',
    imageAlt: 'Helle, saubere Bürofläche als Referenz für Büroreinigung in Stuttgart',
    icon: Briefcase,
    fit: ['Rechtsanwaltskanzleien', 'Steuerberater und Beratungsfirmen', 'Praxen mit Empfangsbereich', 'Büros mit täglichem Kundenkontakt'],
    scope: ['Reinigung von Arbeitsplätzen und Oberflächen', 'Bodenpflege durch Saugen und Wischen', 'Sanitär- und Küchenbereiche', 'Müllentsorgung und Verbrauchsmaterial nach Absprache'],
    process: ['Bedarf und Reinigungszeiten aufnehmen', 'Leistungsplan für Räume und Intervalle erstellen', 'Regelmäßige Ausführung mit festen Abläufen', 'Ansprechbar bleiben und Qualität nachjustieren'],
    proofTitle: 'Diskret, ordentlich und geschäftstauglich',
    proofText: 'Für Kanzleien und Büros zählt nicht nur Sauberkeit, sondern Verlässlichkeit. Reinigungszeiten, Schlüsselabläufe und sensible Bereiche werden vorab klar abgestimmt.',
    faq: [
      { question: 'Reinigen Sie auch außerhalb der Bürozeiten?', answer: 'Ja. Termine können so geplant werden, dass der laufende Betrieb möglichst wenig gestört wird.' },
      { question: 'Ist Büroreinigung auch wöchentlich möglich?', answer: 'Ja. Wir bieten regelmäßige Reinigung täglich, mehrmals wöchentlich, wöchentlich oder nach individuellem Bedarf an.' },
      { question: 'Sind Kanzleien eine passende Zielgruppe?', answer: 'Ja. Gerade Kanzleien profitieren von einer diskreten, verlässlichen und repräsentativen Reinigung.' },
    ],
  },
  {
    slug: 'treppenhausreinigung',
    title: 'Treppenhausreinigung Stuttgart',
    navTitle: 'Treppenhausreinigung',
    eyebrow: 'Gepflegte Eingänge',
    h1: 'Treppenhausreinigung in Stuttgart für Immobilien, Büros und Wohnanlagen',
    metaTitle: 'Treppenhausreinigung Stuttgart | Amira Gebäudereinigung',
    metaDescription: 'Treppenhausreinigung in Stuttgart und Umgebung für Wohnanlagen, Bürohäuser und Gewerbeimmobilien. Eingänge, Geländer, Böden und Gemeinschaftsflächen reinigen lassen.',
    intro: 'Das Treppenhaus ist oft der erste Kontaktpunkt mit einer Immobilie. Wir sorgen für gepflegte Eingänge, saubere Laufwege und einen ordentlichen Gesamteindruck für Mieter, Kunden und Besucher.',
    image: '/images/reference-treatment-room.jpg',
    imageAlt: 'Gepflegte Gewerbefläche mit sauberen Laufwegen als Referenz für Treppenhausreinigung',
    icon: Building,
    fit: ['Wohnanlagen und Mehrfamilienhäuser', 'Bürogebäude mit Kundenverkehr', 'Gewerbeimmobilien', 'Praxis- und Kanzleigebäude'],
    scope: ['Kehren, Saugen und Wischen von Laufwegen', 'Reinigung von Geländern und Handläufen', 'Eingangsbereiche und sichtbare Ablagen', 'Turnus nach Objektgröße und Nutzung'],
    process: ['Objektbegehung und Rhythmus festlegen', 'Leistungsumfang je Etage definieren', 'Regelmäßige Reinigung dokumentiert ausführen', 'Sonderreinigung bei stärkerer Verschmutzung abstimmen'],
    proofTitle: 'Ein Eingang, der Vertrauen schafft',
    proofText: 'Gepflegte Gemeinschaftsflächen wirken sich direkt auf Wahrnehmung und Werterhalt einer Immobilie aus, besonders bei gewerblich genutzten Häusern.',
    faq: [
      { question: 'Übernehmen Sie auch kleine Mehrfamilienhäuser?', answer: 'Ja. Die Treppenhausreinigung ist für kleine und größere Objekte in Stuttgart und Umgebung möglich.' },
      { question: 'Kann ein fester Reinigungstag vereinbart werden?', answer: 'Ja. Wir stimmen feste Intervalle und passende Reinigungstage mit Ihnen ab.' },
      { question: 'Sind Eingangsbereiche inklusive?', answer: 'Nach Absprache ja. Eingänge, Handläufe und sichtbare Gemeinschaftsflächen können in den Leistungsplan aufgenommen werden.' },
    ],
  },
  {
    slug: 'unterhaltsreinigung',
    title: 'Unterhaltsreinigung Stuttgart',
    navTitle: 'Unterhaltsreinigung',
    eyebrow: 'Dauerhaft gepflegt',
    h1: 'Unterhaltsreinigung in Stuttgart für Kanzleien, Büros und Praxen',
    metaTitle: 'Unterhaltsreinigung Stuttgart | Regelmäßige Gebäudereinigung',
    metaDescription: 'Unterhaltsreinigung in Stuttgart und Umgebung für Büros, Kanzleien, Praxen und Gewerbe. Regelmäßige Reinigung mit flexiblen Intervallen und Angebot auf Anfrage.',
    intro: 'Unterhaltsreinigung bedeutet verlässliche Sauberkeit im Alltag. Wir reinigen regelmäßig nach einem abgestimmten Plan, damit Räume dauerhaft repräsentativ, hygienisch und nutzbar bleiben.',
    image: '/images/reference-practice-room.jpg',
    imageAlt: 'Repräsentative Praxisfläche als Referenz für Unterhaltsreinigung in Stuttgart',
    icon: ClipboardCheck,
    fit: ['Büros mit festen Arbeitsplätzen', 'Kanzleien mit Mandantenverkehr', 'Praxen und Beratungsräume', 'Gewerbeflächen mit wiederkehrender Nutzung'],
    scope: ['Oberflächen und Kontaktpunkte', 'Bodenreinigung je nach Belag', 'Sanitärbereiche und Teeküchen', 'Regelmäßiger Turnus nach Bedarf'],
    process: ['Reinigungsplan je Raumgruppe erstellen', 'Prioritäten und sensible Bereiche definieren', 'Durchführung zu vereinbarten Zeiten', 'Qualität regelmäßig abstimmen'],
    proofTitle: 'Planbare Sauberkeit ohne Reibungsverlust',
    proofText: 'Die regelmäßige Gebäudereinigung entlastet interne Teams und sorgt dafür, dass Mandanten, Kunden und Mitarbeitende jeden Tag einen professionellen Eindruck erleben.',
    faq: [
      { question: 'Was ist der Unterschied zur Grundreinigung?', answer: 'Die Unterhaltsreinigung erfolgt regelmäßig und hält Räume dauerhaft sauber. Die Grundreinigung ist intensiver und wird meist in größeren Abständen durchgeführt.' },
      { question: 'Können einzelne Bereiche priorisiert werden?', answer: 'Ja. Empfang, Besprechungsräume, Sanitärbereiche oder Arbeitsplätze können je nach Nutzung unterschiedlich gewichtet werden.' },
      { question: 'Gibt es ein kostenloses Angebot?', answer: 'Ja. Sie können beim Kontakt ein kostenloses und unverbindliches Angebot einholen.' },
    ],
  },
  {
    slug: 'grundreinigung',
    title: 'Grundreinigung Stuttgart',
    navTitle: 'Grundreinigung',
    eyebrow: 'Intensive Reinigung',
    h1: 'Grundreinigung in Stuttgart für Büros, Praxen und Gewerberäume',
    metaTitle: 'Grundreinigung Stuttgart | Intensive Reinigung für Gewerbe',
    metaDescription: 'Grundreinigung in Stuttgart und Umgebung für Büros, Kanzleien, Praxen und Gewerbe. Intensive Reinigung von Böden, Oberflächen und stark genutzten Bereichen.',
    intro: 'Eine Grundreinigung bringt stark genutzte Räume wieder auf ein gepflegtes Niveau. Sie eignet sich nach intensiver Nutzung, vor einem Neubezug, nach Umbauten oder ergänzend zur regelmäßigen Reinigung.',
    image: '/images/reference-washroom.jpg',
    imageAlt: 'Sauberer Sanitärbereich als Referenz für Grundreinigung in Stuttgart',
    icon: Sparkles,
    fit: ['Büros vor Übergabe oder Neubezug', 'Praxen und Sanitärbereiche', 'Kanzleien mit repräsentativen Flächen', 'Gewerberäume nach starker Nutzung'],
    scope: ['Intensive Boden- und Oberflächenreinigung', 'Sanitärbereiche und Kontaktflächen', 'Entfernung hartnäckiger Verschmutzungen', 'Ergänzung zur laufenden Unterhaltsreinigung'],
    process: ['Verschmutzungsgrad und Räume prüfen', 'Zeitfenster und Umfang verbindlich planen', 'Grundreinigung sorgfältig durchführen', 'Folgepflege oder Unterhaltsreinigung empfehlen'],
    proofTitle: 'Wenn Räume wieder wirklich präsentabel sein müssen',
    proofText: 'Für Mandantenbereiche, Wartezonen, Besprechungsräume und Sanitärflächen kann eine Grundreinigung den Unterschied zwischen ordentlich und überzeugend machen.',
    faq: [
      { question: 'Wann lohnt sich eine Grundreinigung?', answer: 'Sie lohnt sich bei sichtbarer Abnutzung, vor einem Einzug, nach Renovierungen oder wenn die laufende Reinigung allein nicht mehr ausreicht.' },
      { question: 'Kann Grundreinigung mit Unterhaltsreinigung kombiniert werden?', answer: 'Ja. Häufig startet man mit einer Grundreinigung und hält den Zustand danach durch regelmäßige Unterhaltsreinigung stabil.' },
      { question: 'Arbeiten Sie auch in Stuttgart Umgebung?', answer: 'Ja. Amira Gebäudereinigung bedient Stuttgart und Umgebung.' },
    ],
  },
  {
    slug: 'bauendreinigung',
    title: 'Bauendreinigung Stuttgart',
    navTitle: 'Bauendreinigung',
    eyebrow: 'Bezugsfertig ab Tag 1',
    h1: 'Bauendreinigung in Stuttgart – professionell und gründlich nach dem Bau',
    metaTitle: 'Bauendreinigung Stuttgart | Amira Gebäudereinigung',
    metaDescription: 'Professionelle Bauendreinigung in Stuttgart und Umgebung. Nach Neubau, Umbau oder Renovierung: Wir reinigen gründlich und machen Ihr Objekt bezugsfertig.',
    intro: 'Nach Bau- und Renovierungsarbeiten hinterlassen Staub, Mörtelreste und Schmutz ein Chaos. Amira Gebäudereinigung macht Ihre Räume bezugsfertig sauber – schnell, gründlich und termingerecht.',
    image: '/images/bauendreinigung.jpg',
    imageAlt: 'Sauberes Büro nach Bauendreinigung in Stuttgart',
    icon: HardHat,
    fit: ['Neubauten vor dem Einzug', 'Büros nach Renovierungen', 'Gewerberäume nach Umbau', 'Praxen und Kanzleien nach Modernisierung'],
    scope: ['Entfernung von Baustaub und -schmutz', 'Reinigung aller Oberflächen und Böden', 'Fenster und Glasflächen', 'Sanitärbereiche und Küche'],
    process: ['Objekt und Verschmutzungsgrad besichtigen', 'Umfang und Zeitfenster verbindlich planen', 'Bauendreinigung gründlich durchführen', 'Qualität prüfen und übergeben'],
    proofTitle: 'Ihr Objekt – direkt nach der Reinigung bezugsfertig',
    proofText: 'Eine professionelle Bauendreinigung spart Zeit und schont die Nerven. Wir übernehmen den mühsamen Teil, damit Sie und Ihre Mieter, Mitarbeiter oder Patienten sofort einziehen können.',
    faq: [
      { question: 'Wie schnell können Sie nach dem Bauende reinigen?', answer: 'In der Regel können wir innerhalb von 1–3 Werktagen nach Abschluss der Bauarbeiten einen Termin realisieren. Sprechen Sie uns früh an, damit wir planen können.' },
      { question: 'Ist die Bauendreinigung auch für private Neubauten möglich?', answer: 'Ja. Wir reinigen sowohl gewerbliche Objekte als auch private Neubauten und Renovierungsprojekte.' },
      { question: 'Was kostet eine Bauendreinigung?', answer: 'Der Preis richtet sich nach Objektgröße, Verschmutzungsgrad und Umfang. Wir erstellen Ihnen ein kostenloses, unverbindliches Angebot nach einer kurzen Besichtigung oder Beschreibung.' },
    ],
  },
];

export const servicePageMap = new Map(servicePages.map((service) => [service.slug, service]));

export const serviceArea = [
  'Stuttgart-Mitte',
  'Stuttgart-West',
  'Stuttgart-Ost',
  'Bad Cannstatt',
  'Degerloch',
  'Vaihingen',
  'Möhringen',
  'Fellbach',
  'Esslingen',
  'Leinfelden-Echterdingen',
  'Ludwigsburg',
];
