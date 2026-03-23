"use client"

import { Settings, Building2, Users, FileCheck, Zap, Shield } from "lucide-react"

const benefits = [
  {
    icon: Settings,
    title: "Auditoría Regulatoria Utilities",
    description:
      "Cumplimiento normativo CREG/SSPD para energía, agua y gas. Resolución eficiente de PQRs con enfoque técnico-jurídico.",
  },
  {
    icon: Building2,
    title: "Gestión PQRs Municipales",
    description:
      "Servicios para personerías del Atlántico (Urumita, Malambo, Soledad). Clarificaciones y respuestas rápidas.",
  },
  {
    icon: Users,
    title: "Civil/Familia Digital",
    description:
      "Divorcios, contratos, pensiones alimentarias y sucesiones con herramientas digitales éticas y eficientes.",
  },
  {
    icon: FileCheck,
    title: "Procesos Ejecutivos",
    description:
      "Cobro de deudas, títulos valores y obligaciones contractuales con seguimiento digital en tiempo real.",
  },
  {
    icon: Zap,
    title: "Respuesta en 24h",
    description:
      "Garantizamos primera respuesta en menos de 24 horas para todos los casos de PQR y consultas urgentes.",
  },
  {
    icon: Shield,
    title: "Tecnología Legaltech",
    description:
      "Plataforma digital para seguimiento de casos, documentos y comunicación directa con tu abogado.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Por qué elegirnos
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Beneficios de Legal Tech Asociados
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Combinamos experiencia legal con innovación tecnológica para ofrecer 
            soluciones eficientes y transparentes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <benefit.icon className="h-6 w-6" aria-hidden="true" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>

              {/* Number indicator */}
              <span className="absolute top-4 right-4 text-4xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
