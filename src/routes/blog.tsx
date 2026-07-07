import { createFileRoute, Link } from "@tanstack/react-router";
import cellarImg from "@/assets/cellar.jpg";
import grapesImg from "@/assets/grapes.jpg";
import heroImg from "@/assets/hero-vineyard.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog · Cultura del vino · RM Vinos con Historia" },
      { name: "description", content: "Artículos sobre vino, maridajes, eventos y cultura vinícola desde nuestra bodega familiar en La Rioja." },
      { property: "og:title", content: "Blog · RM Vinos" },
      { property: "og:description", content: "Artículos sobre vino, maridajes y cultura vinícola." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

export const POSTS = [
  {
    slug: "vendimia-2025",
    title: "Vendimia 2025: una añada excepcional",
    excerpt: "El equilibrio perfecto entre calor diurno y noches frescas ha dado uvas con una madurez fenólica sobresaliente.",
    category: "Bodega",
    date: "12 octubre 2025",
    image: grapesImg,
  },
  {
    slug: "maridaje-cordero-tempranillo",
    title: "Maridaje: cordero asado y Tempranillo",
    excerpt: "Cómo elegir la crianza adecuada para acompañar el plato más emblemático de la mesa española.",
    category: "Maridajes",
    date: "28 septiembre 2025",
    image: heroImg,
  },
  {
    slug: "cata-comentada-noviembre",
    title: "Cata comentada en la bodega — 15 de noviembre",
    excerpt: "Te invitamos a descubrir en primera persona el corazón de nuestra bodega y catar los vinos junto al enólogo.",
    category: "Eventos",
    date: "10 septiembre 2025",
    image: cellarImg,
  },
  {
    slug: "roble-frances-vs-americano",
    title: "Roble francés vs. americano: dos maneras de envejecer",
    excerpt: "El tipo de barrica moldea el carácter del vino. Te contamos qué aporta cada madera y por qué elegimos combinarlas.",
    category: "Elaboración",
    date: "22 agosto 2025",
    image: cellarImg,
  },
];

function Blog() {
  const [featured, ...rest] = POSTS;
  return (
    <>
      <section className="border-b border-border/60 bg-cream-warm">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-28">
          <p className="eyebrow">Diario de bodega</p>
          <h1 className="mt-4 font-display text-5xl text-wine-deep md:text-6xl">Nuestro blog</h1>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Noticias, maridajes, eventos y todo lo que ocurre entre cepa y cepa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        {/* Featured */}
        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="group grid gap-8 lg:grid-cols-2 lg:items-center"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-wine-deep">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={1200}
              height={900}
            />
          </div>
          <div>
            <p className="eyebrow">{featured.category} · {featured.date}</p>
            <h2 className="mt-4 font-display text-4xl text-wine-deep md:text-5xl">{featured.title}</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{featured.excerpt}</p>
            <span className="mt-8 inline-flex items-center gap-2 border-b border-wine pb-1 text-xs font-medium uppercase tracking-[0.24em] text-wine">
              Leer artículo
            </span>
          </div>
        </Link>

        {/* Grid */}
        <div className="mt-24 grid gap-12 md:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-wine-deep">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <p className="eyebrow mt-5">{post.category} · {post.date}</p>
              <h3 className="mt-3 font-display text-2xl leading-tight text-wine-deep">{post.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}