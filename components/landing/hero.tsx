"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Shield, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234b3286' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Shield className="h-4 w-4" />
              <span>Firma Legaltech Certificada</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Legaltech Experto en{" "}
              <span className="text-primary">PQR y Multas</span>
              <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl text-muted-foreground">
                Barranquilla
              </span>
            </h1>

            <h2 className="mt-6 text-xl sm:text-2xl font-semibold text-primary">
              Resuelve CREG/SSPD en 24h
            </h2>

            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Representamos a personas y empresas en gestión estratégica de PQR, 
              multas de tránsito y procesos civiles ante SSPD, SFC, SIC y tribunales colombianos.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#contacto">
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

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Respuesta en 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <span>+500 PQRs Resueltas</span>
              </div>
            </div>
          </div>

          {/* Logo/Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative circles */}
              <div className="absolute -top-8 -left-8 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
              
              {/* Main card */}
              <div className="relative bg-card rounded-2xl shadow-2xl p-8 border border-border">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EunX2CzCWVD0Lv4IpDBgRghVRpdyBk.png"
                  alt="Legal Tech Asociados"
                  width={400}
                  height={150}
                  className="w-full h-auto"
                  priority
                />
                
                {/* Stats Grid */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-xs text-muted-foreground mt-1">Éxito</div>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs text-muted-foreground mt-1">PQRs</div>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <div className="text-2xl font-bold text-primary">24h</div>
                    <div className="text-xs text-muted-foreground mt-1">Respuesta</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
