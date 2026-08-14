import { Anchor, ClipboardCheck, Snowflake, Truck, type LucideIcon } from 'lucide-react';
import { supplyChain } from '../data/services';
import type { SupplyChainId } from '../types';

const icons: Record<SupplyChainId, LucideIcon> = {
  pengadaan: Anchor,
  'cold-chain': Snowflake,
  inspeksi: ClipboardCheck,
  distribusi: Truck,
};

export default function SupplyChainFlow() {
  return (
    <ol className="supply-flow">
      {supplyChain.map((step, index) => {
        const Icon = icons[step.id];
        return (
          <li key={step.id} className="supply-step">
            <div className="supply-icon">
              <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
            </div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            {index < supplyChain.length - 1 && <span className="supply-line" aria-hidden="true" />}
          </li>
        );
      })}
    </ol>
  );
}
