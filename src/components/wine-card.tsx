import { Link } from "@tanstack/react-router";
import type { Wine } from "@/lib/wines";

export function WineCard({ wine }: { wine: Wine }) {
  return (
    <article className="group flex flex-col">
      <Link
        to="/vinos"
        className="relative block overflow-hidden bg-wine-deep aspect-[3/4]"
      >
        <img
          src={wine.image}
          alt={`Botella ${wine.name} ${wine.vintage}`}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          width={900}
          height={1200}
          loading="lazy"
        />
        <span className="absolute left-4 top-4 bg-gold px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-wine-deep">
          {wine.category}
        </span>
      </Link>
      <div className="mt-5 flex flex-col text-center">
        <span className="eyebrow">{wine.do}</span>
        <h3 className="mt-2 font-display text-2xl text-wine-deep">
          {wine.name} <span className="text-muted-foreground">· {wine.vintage}</span>
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{wine.grape}</p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <span className="font-display text-xl text-wine">{wine.price.toFixed(2)} €</span>
          <button
            type="button"
            className="inline-flex items-center justify-center border border-wine px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-wine transition-colors hover:bg-wine hover:text-cream"
          >
            Añadir
          </button>
        </div>
      </div>
    </article>
  );
}