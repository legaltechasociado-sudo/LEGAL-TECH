"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  servicios: [
    { label: "PQR Servicios Públicos", href: "/servicios#pqr" },
    { label: "Multas de Tránsito", href: "/servicios#multas" },
    { label: "Derecho Civil", href: "/servicios#civil" },
    { label: "Derecho de Familia", href: "/servicios#familia" },
  ],
  empresa: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Casos de Éxito", href: "/casos-exito" },
    { label: "Misión y Visión", href: "/mision-vision" },
  ],
  legal: [
    { label: "Política de Privacidad", href: "/privacidad" },
    { label: "Términos de Servicio", href: "/terminos" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EunX2CzCWVD0Lv4IpDBgRghVRpdyBk.png"
              alt="Legal Tech Asociados"
              width={150}
              height={50}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
              Firma legaltech especializada en PQR, multas de tránsito y 
              procesos civiles en Barranquilla, Colombia.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Barranquilla, Atlántico</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+573001234567" className="hover:text-primary-foreground transition-colors">
                  +57 300 123 4567
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:contacto@legaltech.com" className="hover:text-primary-foreground transition-colors">
                  contacto@legaltech.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Clock className="h-4 w-4 shrink-0" />
                <span>Lun - Vie: 8:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Servicios
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Empresa
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/80">
              © 2026 Legal Tech Asociados. Todos los derechos reservados.
            </p>
            <p className="text-sm text-primary-foreground/80">
              contacto@legaltech.com | Barranquilla, Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
