import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Clock, Users, TrendingUp, ArrowRight, Zap, FileText, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export const metadata: Metadata = {
  title: "Casos de Éxito | Legal Tech Asociados - Resultados Comprobados",
  description: "Conoce nuestros casos de éxito: PQRs resueltas en 24h, multas anuladas y procesos civiles ganados en Barranquilla y el Atlántico.",
  keywords: ["casos éxito abogados", "PQR resueltas Barranquilla", "multas anuladas Colombia", "abogados Atlántico"],
}

const stats = [
  { value: "+500", label: "PQRs Resueltas", icon: FileText },
  { value: "95%", label: "Tasa de Éxito", icon: TrendingUp },
  { value: "24h", label: "Primera Respuesta", icon: Clock },
  { value: "+200", label: "Clientes Satisfechos", icon: Users },
]

const cases = [
  {
    id: 1,
    icon: Zap,
    category: "PQR Servicios Públicos",
    title: "PQR Energía Urumita Resuelta en 24h",
    description: "Cliente con facturación irregular de energía por más de $2.5 millones. Presentamos recurso ante la empresa prestadora y obtuvimos corrección total de la factura en tiempo récord.",
    result: "Ahorro de $2.5M para el cliente",
    location: "Urumita, Atlántico",
    time: "24 horas",
  },
  {
    id: 2,
    icon: Car,
    category: "Multas de Tránsito",
    title: "Fotomultas Malambo Anuladas",
    description: "Impugnación exitosa de 5 fotomultas por un valor total de $3.2 millones. Identificamos vicios de procedimiento en la notificación y falta de calibración de equipos.",
    result: "5 multas anuladas - $3.2M",
    location: "Malambo, Atlántico",
    time: "45 días",
  },
  {
    id: 3,
    icon: FileText,
    category: "PQR Servicios Públicos",
    title: "Recurso SSPD Agua Soledad",
    description: "Recurso de apelación ante la Superintendencia de Servicios Públicos por cobros irregulares de alcantarillado. Logramos devolución de valores cobrados indebidamente.",
    result: "Devolución de $1.8M",
    location: "Soledad, Atlántico",
    time: "30 días",
  },
  {
    id: 4,
    icon: Zap,
    category: "Auditoría Regulatoria",
    title: "Auditoría CREG para Utility Regional",
    description: "Auditoría de cumplimiento normativo CREG para empresa de gas natural. Identificamos inconsistencias y evitamos sanciones millonarias de la SSPD.",
    result: "Evitadas sanciones por $500M",
    location: "Barranquilla",
    time: "60 días",
  },
  {
    id: 5,
    icon: Car,
    category: "Multas de Tránsito",
    title: "Prescripción de Comparendos",
    description: "Tramitamos prescripción de 8 comparendos antiguos que impedían realizar trámites de vehículo. Cliente recuperó su paz de tránsito.",
    result: "8 comparendos prescritos",
    location: "Barranquilla",
    time: "15 días",
  },
  {
    id: 6,
    icon: FileText,
    category: "PQR Servicios Públicos",
    title: "Corrección Factura Gas Natural",
    description: "Reclamo por consumo atípico de gas natural durante pandemia. Logramos revisión técnica del medidor y ajuste de facturación a consumo real.",
    result: "Reducción factura 70%",
    location: "Barranquilla",
    time: "20 días",
  },
]

export default function CasosExitoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary via-background to-secondary/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Resultados Comprobados
                </span>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                  Casos de Éxito
                </h1>
                <p className="mt-6 text-lg text-muted-foreground text-pretty">
                  Conoce algunos de los casos que hemos resuelto exitosamente para nuestros 
                  clientes en Barranquilla y el departamento del Atlántico.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5ae4e83f-04cb-44f4-8f8c-57160e2e59c7-sx9xg2vK6g1PvrVzAUVOo7Uv1BCJy0.png"
                    alt="Legal Tech Asociados Logo"
                    width={300}
                    height={150}
                    className="w-full max-w-xs h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary-foreground/80" aria-hidden="true" />
                  <div className="text-3xl lg:text-4xl font-bold text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/80 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Casos Destacados
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Cada caso representa una historia de éxito y un cliente satisfecho.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cases.map((caseItem) => (
                <article
                  key={caseItem.id}
                  className="group bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      <caseItem.icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {caseItem.category}
                    </span>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EunX2CzCWVD0Lv4IpDBgRghVRpdyBk.png"
                      alt=""
                      width={50}
                      height={20}
                      className="h-4 w-auto opacity-30"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {caseItem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {caseItem.description}
                  </p>

                  {/* Result */}
                  <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg mb-4">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium text-foreground">
                      {caseItem.result}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{caseItem.location}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {caseItem.time}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              ¿Quieres ser nuestro próximo caso de éxito?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Agenda tu consulta gratuita y cuéntanos tu caso. Estamos listos para ayudarte.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/#contacto">
                  Consulta Gratis 24h
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/servicios">
                  Ver Servicios
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
