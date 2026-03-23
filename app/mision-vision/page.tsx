import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Target, Eye, Scale, Shield, Zap, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export const metadata: Metadata = {
  title: "Misión y Visión | Legal Tech Asociados - Abogados Barranquilla",
  description: "Conoce la misión y visión de Legal Tech Asociados, firma legaltech líder en gestión de PQR, multas de tránsito y procesos civiles en Barranquilla, Colombia.",
  keywords: ["misión Legal Tech", "visión abogados Barranquilla", "legaltech Colombia", "firma abogados Atlántico"],
}

const values = [
  {
    icon: Scale,
    title: "Justicia Accesible",
    description: "Democratizamos el acceso a servicios legales de calidad mediante tecnología innovadora.",
  },
  {
    icon: Shield,
    title: "Integridad",
    description: "Actuamos con ética y transparencia en cada caso que representamos.",
  },
  {
    icon: Zap,
    title: "Eficiencia",
    description: "Optimizamos procesos legales para obtener resultados rápidos y efectivos.",
  },
  {
    icon: Users,
    title: "Compromiso",
    description: "Tu caso es nuestra prioridad. Te acompañamos en cada paso del proceso.",
  },
]

export default function MisionVisionPage() {
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
                  Nuestra Identidad
                </span>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                  Misión y Visión
                </h1>
                <p className="mt-6 text-lg text-muted-foreground text-pretty">
                  Somos una firma legaltech comprometida con transformar la práctica legal 
                  en Colombia, haciendo la justicia más accesible y eficiente para todos.
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

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission */}
              <article className="bg-card rounded-2xl p-8 lg:p-10 shadow-sm border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Target className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Misión</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Legal Tech representa a personas y empresas en la gestión estratégica de PQR, 
                  multas/fotomultas de tránsito y derecho financiero ante SSPD, SFC, SIC, 
                  entidades de tránsito y tribunales colombianos.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
                  Especializados en procesos ejecutivos, declarativos, familia y actuaciones judiciales, 
                  <strong className="text-foreground"> garantizamos acceso justo a la justicia mediante legaltech innovadora</strong>.
                </p>
              </article>

              {/* Vision */}
              <article className="bg-card rounded-2xl p-8 lg:p-10 shadow-sm border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Eye className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Visión</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Ser en <strong className="text-foreground">2030</strong> el aliado legaltech de confianza para representación 
                  estratégica ante empresas de servicios públicos, entidades de tránsito y 
                  sistemas judiciales en Colombia.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
                  Líderes en procesos ejecutivos, declarativos, familia y actuaciones judiciales, 
                  <strong className="text-foreground"> corporativizando soluciones digitales que transformen la gestión legal 
                  con excelencia y eficiencia</strong>.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Nuestros Valores
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Los principios que nos guían
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card rounded-xl p-6 shadow-sm border border-border text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <value.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-primary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
              ¿Quieres conocer más sobre nosotros?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/#contacto">
                  Consulta Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
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
