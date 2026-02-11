import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Services = () => {
  const services = [
    {
      value: "ai-products",
      trigger: "AI-Powered Products",
      content: "I design and build end-to-end AI-powered applications - from intelligent features to full production systems. Using Python-based AI microservices integrated via gRPC, I turn models into real-world, scalable product experiences.",
    },
    {
      value: "web",
      trigger: "Web Applications",
      content: "I build fast, modern, and scalable web applications using Next.js. From AI dashboards to SaaS platforms, I focus on performance, clean architecture, and production-ready deployments.",
    },
    {
      value: "mobile",
      trigger: "Mobile Applications",
      content: "I develop cross-platform mobile apps using Flutter, delivering smooth, high-performance experiences on both iOS and Android — tightly integrated with intelligent backend systems.",
    },
    {
      value: "backend",
      trigger: "Scalable Backend Systems",
      content: "I architect high-performance backend systems using Go, with gRPC-based service communication and Python AI microservices. Built for scale, reliability, and real-time AI workloads.",
    }
  ]

  return (
    <section className="w-full my-24 md:my-32 lg:my-40">
      <div className="flex flex-col justify-start items-start gap-4">
        <h6 className="text-2xl shrink-0">Services</h6>

        <Accordion type="multiple" className="w-full">
          {services.map((service) => (
            <AccordionItem key={service.value} value={service.value}>
              <AccordionTrigger className="group text-3xl pt-8 md:pt-4 md:text-4xl/relaxed font-normal hover:no-underline cursor-pointer">
                <span>{service.trigger}</span>

                <svg width="28" height="28" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className='ml-auto rotate-135 group-data-open:-rotate-45 transition-transform duration-300'>
                  <path fill="currentColor" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z" className="fill-primary" />
                  <path fill="currentColor" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z" className="fill-primary" />
                </svg>
              </AccordionTrigger>

              <AccordionContent className="text-lg/relaxed md:text-2xl/relaxed font-normal text-secondary">{service.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Services