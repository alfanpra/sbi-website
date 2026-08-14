import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  stagger?: boolean;
};

export default function ScrollReveal({
  children,
  className = '',
  as: Tag = 'div',
  stagger = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const items = stagger ? [...node.children] : [node];
    items.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    items.forEach((el, i) => {
      if (el instanceof HTMLElement) {
        el.style.setProperty('--reveal-delay', `${i * 100}ms`);
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [stagger]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
