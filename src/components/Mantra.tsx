import { mantraLatin, mantraLine } from "../data";

function MantraGroup({ hidden = false }: { hidden?: boolean }) {
  const items = Array.from({ length: 6 });
  return (
    <div className="flex items-center gap-14 pr-14" aria-hidden={hidden || undefined}>
      {items.map((_, i) => (
        <span key={i} className="flex items-center gap-14 whitespace-nowrap">
          <span className="font-tibetan text-lg text-gold">{mantraLine}</span>
          <span className="h-1.5 w-1.5 rotate-45 bg-cream/30" />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-cream/60">
            {mantraLatin}
          </span>
          <span className="h-1.5 w-1.5 rotate-45 bg-cream/30" />
        </span>
      ))}
    </div>
  );
}

export default function Mantra() {
  return (
    <div className="marquee overflow-hidden border-y border-burgundy-deep bg-burgundy py-3.5">
      <div className="marquee-track">
        <MantraGroup />
        <MantraGroup hidden />
      </div>
    </div>
  );
}
