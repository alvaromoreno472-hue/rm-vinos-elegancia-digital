import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import logoAsset from "@/assets/rm-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-wine-deep text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img
              src={logoAsset.url}
              alt="Ricardo Moreno Vinos con Historia"
              className="h-14 w-auto object-contain"
              width={480}
              height={320}
              loading="lazy"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
              Bodega familiar dedicada a elaborar vinos con carácter, tradición y respeto por la
              tierra. Cada botella cuenta una historia.
            </p>
            <a
              href="https://instagram.com/rmvinosconhistoria"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-gold hover:text-gold-soft"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
              @rmvinosconhistoria
            </a>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.24em] text-gold">Navegación</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              <li>
                <Link to="/" className="hover:text-gold">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/historia" className="hover:text-gold">
                  Historia
                </Link>
              </li>
              <li>
                <Link to="/vinos" className="hover:text-gold">
                  Vinos
                </Link>
              </li>
              <li>
                <Link to="/tienda" className="hover:text-gold">
                  Tienda
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gold">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-gold">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.24em] text-gold">Contacto</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span>
                  Calle Ferial, 15, 2º A
                  <br />
                  19002 Guadalajara, España
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <a href="tel:+34900000000" className="hover:text-gold">
                  +34 900 000 000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <a href="mailto:rmoreno@losvinosconhistoria.com" className="hover:text-gold">
                  rmoreno@losvinosconhistoria.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-6 border-t border-gold/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-cream/60">
            © {new Date().getFullYear()} RM Vinos con Historia, S.L. Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-cream/70">
            <li>
              <Link to="/aviso-legal" className="hover:text-gold">
                Aviso legal
              </Link>
            </li>
            <li>
              <Link to="/privacidad" className="hover:text-gold">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:text-gold">
                Política de cookies
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-6 text-center text-[0.65rem] uppercase tracking-[0.28em] text-cream/40">
          Bebe con moderación · Prohibida la venta a menores de 18 años
        </p>
      </div>
    </footer>
  );
}

