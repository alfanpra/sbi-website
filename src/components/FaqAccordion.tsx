import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../types';

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const triggers = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    triggers.current = triggers.current.slice(0, items.length);
  }, [items.length]);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const next =
        event.key === 'ArrowDown'
          ? (index + 1) % items.length
          : (index - 1 + items.length) % items.length;
      triggers.current[next]?.focus();
    }
  };

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const expanded = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;
        return (
          <div key={item.id} className={`faq-item ${expanded ? 'is-open' : ''}`}>
            <h3>
              <button
                id={buttonId}
                ref={(el) => {
                  triggers.current[index] = el;
                }}
                type="button"
                className="faq-trigger"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpenId(expanded ? null : item.id)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                <span>{item.question}</span>
                <ChevronDown size={20} aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} className="faq-panel">
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
