import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { WINES, REGIONS, CATEGORIES, type WineCategory } from "@/lib/wines";

export const Route = createFileRoute("/vinos")({
  head: () => ({
    meta: [
      { title: "Vinos · Catálogo · Ricardo Moreno Vinos con Historia" },
      {
        name: "description",
        content:
          "Catálogo completo de más de 260 vinos de bodegas de toda España: Ribera del Duero, Rioja, Rías Baixas, Toro, Jumilla y muchas más.",
      },
      { property: "og:title", content: "Nuestros Vinos · RM Vinos" },
      {
        property: "og:description",
        content: "Más de 260 referencias de bodegas de toda España.",
      },
      { property: "og:url", content: "/vinos" },
    ],
    links: [{ rel: "canonical", href: "/vinos" }],
  }),
  component: Vinos,
});

function Vinos() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<string>("Todas");
  const [category, setCategory] = useState<WineCategory | "Todos">("Todos");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return WINES.filter((w) => {
      if (region !== "Todas" && w.region !== region) return false;
      if (category !== "Todos" && w.category !== category) return false;
      if (q) {
        const haystack = `${w.name} ${w.bodega ?? ""} ${w.location ?? ""}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [query, region, category]);

  return (
    <>
      <section className="border-b border-border/60 bg-cream-warm">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-28">
          <p className="eyebrow">Catálogo</p>
          <h1 className="mt-4 font-display text-5xl text-wine-deep md:text-6xl">Nuestros vinos</h1>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Más de 260 referencias de bodegas de toda España. Precios profesionales, IVA no
            incluido. Consulta condiciones para hostelería y particulares.
          </p>
        </div>
      </section>

      {/* Buscador y filtros */}
      <section className="sticky top-16 z-30 border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por vino o bodega…"
            className="w-full rounded-none border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-wine focus:outline-none md:max-w-xs"
          />
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full rounded-none border border-border bg-background px-4 py-3 text-sm focus:border-wine focus:outline-none md:w-auto"
          >
            <option value="Todas">Todas las regiones</option>
            {REGIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as WineCategory | "Todos")}
            className="w-full rounded-none border border-border bg-background px-4 py-3 text-sm focus:border-wine focus:outline-none md:w-auto"
          >
            <option value="Todos">Todos los tipos</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground md:ml-auto">
            {filtered.length} vinos
          </p>
        </div>
      </section>

      {/* Listado */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        {filtered.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">
            No hay vinos que coincidan con tu búsqueda.
          </p>
        ) : (
          <div className="divide-y divide-border/60">
            {filtered.map((wine) => (
              <div
                key={wine.slug}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <div className="min-w-0">
                  <p className="truncate font-display text-lg text-wine-deep">{wine.name}</p>
                  <p className="truncate text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {wine.bodega ?? wine.region}
                    {wine.location ? ` · ${wine.location}` : ""}
                  </p>
                  {wine.note && (
                    <p className="mt-0.5 text-xs italic text-muted-foreground">{wine.note}</p>
                  )}
                </div>
                <div className="flex shrink-0 items-center gap-4">
                  <span className="rounded-none bg-cream-warm px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-wine">
                    {wine.category}
                  </span>
                  <span className="w-24 shrink-0 text-right font-display text-lg text-wine">
                    {wine.price != null ? `${wine.price.toFixed(2)} €` : "Consultar"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        <p className="mt-10 text-center text-xs text-muted-foreground">
          Precios profesionales, IVA no incluido. Disponemos de más de 100 referencias adicionales
          de vinos del mundo bajo consulta — contáctanos para más información.
        </p>
      </section>
    </>
  );
}
