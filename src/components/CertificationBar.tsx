import { BadgeCheck, FileCheck2, ScrollText, ShieldCheck, type LucideIcon } from 'lucide-react';

const items: Array<{ id: string; label: string; Icon: LucideIcon }> = [
  { id: 'nib', label: 'NIB', Icon: BadgeCheck },
  { id: 'izin', label: 'Izin Usaha', Icon: ShieldCheck },
  { id: 'kelayakan', label: 'Sertifikat Kelayakan', Icon: FileCheck2 },
  { id: 'sop', label: 'SOP', Icon: ScrollText },
];

export default function CertificationBar() {
  return (
    <ul className="cert-bar">
      {items.map(({ id, label, Icon }) => (
        <li key={id}>
          <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
