import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { WINES, CATEGORIES, type WineCategory } from "@/lib/wines";

export const Route = createFileRoute("/vinos")({
  head: () => ({
    meta: [
      { title: "Vinos · Catálogo · Ricardo Moreno Vinos con Historia" },
      { name: "description", content: "Descubre nuestra colección de vinos: tintos, blancos, rosados y reservas de la D.O.Ca. Rioja." },
      { property: "og:title", content: "Nuestros Vinos · RM Vinos" },
      { property: "og:description", content: "Colección de tintos, blancos, rosados y reservas." },
      { property: "og:url", content: "/vinos" },
    ],
    links: [{ rel: "canonical", href: "/vinos" }],
  }),
  component: Vinos,
});

function Vinos() {
  const [category, setCategory] = useState<WineCategory | "Todos">("Todos");
  const [maxPrice, setMaxPrice] = useState(70);

  const filtered = useMemo(
    () =>
      WINES.filter(
        (w) => (category === "Todos" || w.category === category) && w.price <= maxPrice,
      ),
    [category, maxPrice],
  );

  return (
    <>
      <section className="border-b border-border/60 bg-cream-warm">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <p className="eyebrow">Colección</p>
          <h1 className="mt-4 font-display text-5xl text-wine-deep md:text-6xl">Nuestros vinos</h1>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Cada referencia es una expresión honesta del terruño y de la añada. Explora la colección por tipo o rango de precio.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="sticky top-[76px] z-20 border-b border-border/60 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {(["Todos", ...CATEGORIES] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`border px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-colors ${
                  category === c
                    ? "border-wine bg-wine text-cream"
                    : "border-border text-wine hover:border-wine"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-wine">
            <span>Hasta {maxPrice}€</span>
            <input
              type="range"
              min={10}
              max={70}
              step={1}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-40 accent-wine"
              aria-label="Precio máximo"
            />
          </label>
        </div>
      </section>

      {/* Catálogo */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        {filtered.length === 0 ? (
          <p className="py-24 text-center text-muted-foreground">No hay vinos que coincidan con tu selección.</p>
        ) : (
          <div className="grid gap-16 md:grid-cols-2 lg:gap-20">
            {filtered.map((wine) => (
              <article
                key={wine.slug}
                className="grid grid-cols-[1fr_1.4fr] items-center gap-6 border-t border-gold/40 pt-8"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-wine-deep">
                  <img
                    src={wine.image}
                    alt={`Botella ${wine.name}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={900}
                    height={1200}
                  />
                  <span className="absolute left-3 top-3 bg-gold px-2 py-1 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-wine-deep">
                    {wine.category}
                  </span>
                </div>
                <div>
                  <p className="eyebrow">{wine.do}</p>
                  <h3 className="mt-2 font-display text-3xl text-wine-deep">
                    {wine.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Añada {wine.vintage} · {wine.grape} · {wine.abv}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">{wine.tasting}</p>
                  <p className="mt-3 text-sm leading-relaxed">
                    <span className="font-medium text-wine-deep">Maridaje: </span>
                    <span className="text-muted-foreground">{wine.pairing}</span>
                  </p>
                  <div className="mt-6 flex items-center gap-5">
                    <span className="font-display text-2xl text-wine">{wine.price.toFixed(2)} €</span>
                    <button
                      type="button"
                      className="border border-wine bg-wine px-5 py-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-cream transition-colors hover:bg-wine-deep"
                    >
                      Añadir a la tienda
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}