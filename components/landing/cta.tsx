"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+57 300 123 4567",
    href: "tel:+573001234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contacto@legaltechasociados.com",
    href: "mailto:contacto@legaltechasociados.com",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Calle 72 #54-35, Of. 301, Barranquilla",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun - Vie: 8:00 AM - 6:00 PM",
    href: null,
  },
]

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    // TODO: Handle form submission (e.g., send to API)
  }

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contáctanos
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Agenda tu consulta gratuita hoy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Da el primer paso hacia la solución de tu caso. Nuestro equipo está
              listo para escucharte y orientarte sin ningún compromiso.
            </p>

            {/* Contact Info Cards */}
            <div className="mt-8 space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl bg-card p-4 border border-border"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <Button
              asChild
              size="lg"
              className="mt-8 bg-[#25D366] text-white hover:bg-[#128C7E] w-full sm:w-auto"
            >
              <a
                href="https://wa.me/573001234567?text=Hola,%20necesito%20asesoría%20legal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Escríbenos por WhatsApp
              </a>
            </Button>
          </div>

          {/* Right Column - Contact Form */}
          <div className="rounded-2xl bg-card p-8 shadow-sm border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Envíanos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nombre completo *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-background"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Correo electrónico *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-background"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Teléfono / WhatsApp
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+57 300 000 0000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-background"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  ¿Cómo podemos ayudarte? *
                </label>
                <Textarea
                  id="message"
                  required
                  placeholder="Describe brevemente tu situación o consulta..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-background resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="mr-2 h-4 w-4" />
                Solicitar Consulta Gratuita
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Al enviar este formulario, aceptas nuestra política de privacidad.
                Tu información está protegida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
