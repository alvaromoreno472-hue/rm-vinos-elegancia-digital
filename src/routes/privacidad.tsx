import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad · RM Vinos con Historia" },
      {
        name: "description",
        content:
          "Política de privacidad y tratamiento de datos personales de Ricardo Moreno, Vinos Con Historia, S.L.",
      },
      { property: "og:url", content: "/privacidad" },
    ],
    links: [{ rel: "canonical", href: "/privacidad" }],
  }),
  component: () => (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <p className="eyebrow">Datos personales</p>
      <h1 className="mt-4 font-display text-4xl text-wine-deep md:text-5xl">
        Política de privacidad
      </h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-foreground/85">
        <p>
          <strong>Responsable:</strong> Ricardo Moreno, Vinos Con Historia, S.L. (CIF B21670344).
          Los datos personales que nos facilites a través de los formularios serán tratados con la
          finalidad de gestionar tu consulta o pedido.
        </p>
        <p>
          <strong>Legitimación:</strong> consentimiento del interesado y/o ejecución de un contrato.
        </p>
        <p>
          <strong>Conservación:</strong> los datos se conservarán mientras exista un interés mutuo o
          durante el tiempo necesario para cumplir con las obligaciones legales.
        </p>
        <p>
          <strong>Derechos:</strong> puedes ejercer tus derechos de acceso, rectificación,
          supresión, portabilidad, oposición y limitación escribiendo a{" "}
          <a className="text-wine underline" href="mailto:rmoreno@losvinosconhistoria.com">
            rmoreno@losvinosconhistoria.com
          </a>
          .
        </p>
      </div>
    </div>
  ),
});

