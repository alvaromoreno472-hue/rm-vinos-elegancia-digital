import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { WINES, REGIONS, CATEGORIES, type WineCategory } from "@/lib/wines";

export const Route = createFileRoute("/tienda")({
  head: () => ({
    meta: [
      { title: "Tienda · Comprar vino online · RM Vinos" },
      {
        name: "description",
        content:
          "Compra online nuestra selección de vinos con envío a toda España. Más de 260 referencias de bodegas de toda España.",
      },
      { property: "og:title", content: "Tienda · RM Vinos" },
      { property: "og:description", content: "Compra online con envío a toda España." },
      { property: "og:url", content: "/tienda" },
    ],
    links: [{ rel: "canonical", href: "/tienda" }],
  }),
  component: Tienda,
});

function Tienda() {
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
          <p className="eyebrow">Tienda online</p>
          <h1 className="mt-4 font-display text-5xl text-wine-deep md:text-6xl">Compra online</h1>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Envío a toda España en 24/48h. Gastos gratuitos a partir de 60€. Precios profesionales,
            IVA no incluido.
          </p>
        </div>
      </section>

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
          <button
            type="button"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-wine md:ml-auto"
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
            Carrito (0)
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="mb-6 text-xs uppercase tracking-[0.24em] text-muted-foreground">
          {filtered.length} productos
        </p>

        <div className="divide-y divide-border/60">
          {filtered.map((wine) => (
            <div
              key={wine.slug}
              className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
            >
              <div className="min-w-0">
                <p className="truncate font-display text-lg text-wine-deep">{wine.name}</p>
                <p className="truncate text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {wine.bodega ?? wine.region}
                  {wine.location ? ` · ${wine.location}` : ""}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-4">
                <span className="w-24 shrink-0 text-right font-display text-lg text-wine">
                  {wine.price != null ? `${wine.price.toFixed(2)} €` : "Consultar"}
                </span>
                <button
                  type="button"
                  disabled={wine.price == null}
                  className="shrink-0 border border-wine bg-wine px-4 py-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-cream transition-colors hover:bg-wine-deep disabled:cursor-not-allowed disabled:border-border disabled:bg-transparent disabled:text-muted-foreground"
                >
                  {wine.price != null ? "Añadir" : "Consultar"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 border border-dashed border-gold/60 bg-cream-warm/60 p-8 text-center">
          <p className="eyebrow">Próximamente</p>
          <p className="mt-3 text-sm text-muted-foreground">
            El carrito, el checkout con pagos y los emails de confirmación se activarán al conectar
            la tienda con Lovable Cloud y Stripe. Este catálogo ya está listo para hacerse
            funcional.
          </p>
        </div>

        <div className="mt-8 border border-wine/30 bg-wine/5 p-8 text-center">
          <p className="eyebrow text-wine">¿Eres un negocio?</p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Si tienes un bar, restaurante o tienda y quieres distribuir nuestros vinos, ofrecemos
            condiciones especiales para pedidos al por mayor.
          </p>
          <Link
            to="/contacto"
            className="mt-5 inline-flex items-center gap-2 border-b border-wine pb-1 text-xs font-medium uppercase tracking-[0.22em] text-wine hover:border-gold hover:text-gold"
          >
            Contactar para pedidos mayoristas
          </Link>
        </div>
      </section>
    </>
  );
}
