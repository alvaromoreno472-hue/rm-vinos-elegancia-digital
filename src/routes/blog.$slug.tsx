import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react";
import { POSTS } from "./blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Artículo no encontrado · RM Vinos" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${loaderData.post.title} · Blog RM Vinos` },
        { name: "description", content: loaderData.post.excerpt },
        { property: "og:title", content: loaderData.post.title },
        { property: "og:description", content: loaderData.post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: ({ error }) => <p className="p-10 text-center text-destructive">{error.message}</p>,
  component: BlogPost,
});

function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl text-wine-deep">Artículo no encontrado</h1>
      <Link to="/blog" className="mt-6 inline-block text-sm uppercase tracking-[0.22em] text-wine underline">
        Volver al blog
      </Link>
    </div>
  );
}

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <article>
      <header className="border-b border-border/60 bg-cream-warm">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-wine hover:text-gold">
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Volver al blog
          </Link>
          <p className="eyebrow mt-8">{post.category} · {post.date}</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-wine-deep md:text-5xl">{post.title}</h1>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 pt-12">
        <img src={post.image} alt={post.title} className="aspect-[16/9] w-full object-cover" width={1600} height={900} />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
          <p className="font-display text-2xl italic leading-relaxed text-wine-deep">
            {post.excerpt}
          </p>
          <p>
            En esta entrada compartimos con vosotros los detalles y aprendizajes desde el viñedo y la bodega. Cada gesto, cada decisión, es fruto de años de experiencia acumulada por nuestra familia elaborando vinos en La Rioja.
          </p>
          <p>
            La elaboración artesanal exige tiempo y atención al detalle. En este blog documentamos lo que hacemos y por qué lo hacemos así, con la esperanza de que os acerque un poco más a nuestro trabajo.
          </p>
          <p>
            Si te interesa profundizar, no dudes en escribirnos o venir a visitarnos. La bodega está abierta con cita previa para catas y visitas guiadas.
          </p>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-border pt-8">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Compartir</p>
          <div className="flex gap-2">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <button
                key={label}
                type="button"
                aria-label={`Compartir en ${label}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-wine transition-colors hover:border-wine hover:bg-wine hover:text-cream"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}