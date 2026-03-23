"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Qué tipos de PQR manejan?",
    answer:
      "Gestionamos Peticiones, Quejas, Reclamos y Recursos ante empresas de servicios públicos domiciliarios (energía, gas, agua), entidades de tránsito, y organismos reguladores como SSPD, CREG, SFC y SIC.",
  },
  {
    question: "¿Cuánto tiempo toma resolver una PQR de servicios públicos?",
    answer:
      "Garantizamos primera respuesta en 24 horas. Los tiempos de resolución varían según la complejidad: PQRs simples entre 15-30 días, recursos de apelación hasta 60 días según normativa SSPD.",
  },
  {
    question: "¿Pueden ayudarme con multas y fotomultas de tránsito?",
    answer:
      "Sí, somos especialistas en impugnación de multas y fotomultas ante secretarías de tránsito municipales y departamentales. Analizamos cada caso para identificar posibles vicios de procedimiento o fondo.",
  },
  {
    question: "¿Qué servicios de derecho de familia ofrecen?",
    answer:
      "Manejamos divorcios, separación de bienes, custodia, pensiones alimentarias, sucesiones y liquidación de sociedad conyugal con herramientas digitales que agilizan los procesos.",
  },
  {
    question: "¿Cómo funciona la consulta gratuita?",
    answer:
      "Ofrecemos una primera consulta sin costo donde evaluamos tu caso, te explicamos las opciones legales disponibles y te damos un presupuesto claro. Puedes agendar por WhatsApp o a través de nuestro formulario de contacto.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Preguntas Frecuentes
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Resolvemos tus dudas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Encuentra respuestas a las consultas más comunes sobre nuestros servicios legales.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-primary py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
