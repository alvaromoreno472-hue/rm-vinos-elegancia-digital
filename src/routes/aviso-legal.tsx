import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso legal · RM Vinos con Historia" },
      {
        name: "description",
        content: "Aviso legal y condiciones de uso del sitio web de RM Vinos con Historia, S.L.",
      },
      { property: "og:url", content: "/aviso-legal" },
    ],
    links: [{ rel: "canonical", href: "/aviso-legal" }],
  }),
  component: () => (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <p className="eyebrow">Información legal</p>
      <h1 className="mt-4 font-display text-4xl text-wine-deep md:text-5xl">Aviso legal</h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-foreground/85">
        <p>
          <strong>Titular:</strong> Ricardo Moreno, Vinos Con Historia, S.L. · CIF B21670344 · Calle
          Ferial, 15, 2º A, 19002 Guadalajara, Castilla-La Mancha, España · Inscrita en el Registro
          Mercantil de Guadalajara.
        </p>
        <p>
          El acceso y uso de este sitio web implica la aceptación de las presentes condiciones. Los
          contenidos aquí publicados tienen carácter meramente informativo y están sujetos a
          modificación sin previo aviso.
        </p>
        <p>
          Todos los contenidos, textos, imágenes y marcas son propiedad de Ricardo Moreno, Vinos Con
          Historia, S.L. o de sus legítimos titulares y están protegidos por la normativa vigente
          sobre propiedad intelectual e industrial.
        </p>
        <p>
          La venta de bebidas alcohólicas a través de este sitio está restringida a personas mayores
          de 18 años.
        </p>
      </div>
    </div>
  ),
});
