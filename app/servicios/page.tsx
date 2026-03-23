import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { FileText, Car, Scale, Users, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export const metadata: Metadata = {
  title: "Servicios | Legal Tech Asociados - Abogados PQR y Multas Barranquilla",
  description: "Servicios legales especializados: PQR servicios públicos SSPD/CREG, multas de tránsito, derecho civil ejecutivos y derecho de familia en Barranquilla.",
  keywords: ["abogados PQR Barranquilla", "multas tránsito Colombia", "derecho civil", "derecho familia", "SSPD", "CREG"],
}

const services = [
  {
    id: "pqr",
    icon: FileText,
    title: "PQR Servicios Públicos",
    subtitle: "SSPD / CREG",
    description: "Gestión estratégica de Peticiones, Quejas, Reclamos y Recursos ante empresas de servicios públicos domiciliarios y la Superintendencia de Servicios Públicos Domiciliarios.",
    features: [
      "Reclamos por facturación irregular de energía, gas y agua",
      "Recursos de reposición y apelación ante SSPD",
      "Auditorías de cumplimiento normativo CREG",
      "Representación ante Comisión de Regulación CREG",
      "Resolución de PQRs en máximo 24 horas",
    ],
    cta: "Resolver mi PQR",
  },
  {
    id: "multas",
    icon: Car,
    title: "Multas de Tránsito",
    subtitle: "Fotomultas y Comparendos",
    description: "Impugnación especializada de multas y fotomultas ante secretarías de tránsito municipales y departamentales del Atlántico y la Costa Caribe.",
    features: [
      "Análisis técnico-jurídico de fotomultas",
      "Identificación de vicios de procedimiento",
      "Recursos ante secretarías de tránsito",
      "Prescripción de multas antiguas",
      "Representación en audiencias",
    ],
    cta: "Impugnar mi multa",
  },
  {
    id: "civil",
    icon: Scale,
    title: "Derecho Civil",
    subtitle: "Procesos Ejecutivos y Declarativos",
    description: "Procesos ejecutivos para cobro de deudas, títulos valores y obligaciones contractuales con seguimiento digital en tiempo real de tu caso.",
    features: [
      "Cobro de deudas y pagarés",
      "Ejecución de títulos valores",
      "Procesos de responsabilidad civil",
      "Contratos y obligaciones",
      "Procesos de pertenencia y servidumbres",
    ],
    cta: "Iniciar proceso",
  },
  {
    id: "familia",
    icon: Users,
    title: "Derecho de Familia",
    subtitle: "Procesos Digitales",
    description: "Divorcios, custodia, pensiones alimentarias y sucesiones manejados con herramientas digitales éticas que agilizan los procesos.",
    features: [
      "Divorcios de mutuo acuerdo y contenciosos",
      "Custodia y régimen de visitas",
      "Fijación y cobro de pensiones alimentarias",
      "Sucesiones y liquidación de herencias",
      "Liquidación de sociedad conyugal",
    ],
    cta: "Consultar caso",
  },
]

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary via-background to-secondary/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Nuestros Servicios
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Soluciones Legales Especializadas
              </h1>
              <p className="mt-6 text-lg text-muted-foreground text-pretty">
                Combinamos experiencia jurídica con tecnología legaltech para resolver 
                tus casos de manera eficiente, transparente y con resultados comprobables.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="group bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground">
                        {service.title}
                      </h2>
                      <p className="text-sm text-primary font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                    {/* Small logo */}
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EunX2CzCWVD0Lv4IpDBgRghVRpdyBk.png"
                      alt=""
                      width={60}
                      height={20}
                      className="h-5 w-auto ml-auto opacity-30"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/#contacto">
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-primary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
              ¿Listo para resolver tu caso?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Agenda tu consulta gratuita hoy y recibe orientación legal sin compromiso.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8">
              <Link href="/#contacto">
                Consulta Gratis 24h
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
