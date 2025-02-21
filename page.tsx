"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, Star, PhoneIcon as WhatsappIcon } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Page() {
  const [isOpen, setIsOpen] = useState<number | null>(null)
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 59,
    seconds: 59,
  })
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 15000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(countdown)
  }, [])

  return (
    <div className="flex flex-col min-h-[100dvh] bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
            alt="Pessoa subindo montanha"
            fill
            className="object-cover opacity-30 transform scale-105 hover:scale-100 transition-transform duration-[3000ms]"
            priority
          />
        </div>
        <div className="container px-4 md:px-6 z-10 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold animate-fade-in tracking-tight">VOCÊ NÃO PROMETEU MUDAR?</h1>
          <p className="text-red-500 text-xl md:text-2xl max-w-2xl mx-auto">
            Transforme sua mentalidade e sua produtividade com o Pack Mente de Aço.
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 text-lg"
          >
            QUERO ME TORNAR INQUEBRÁVEL
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">O QUE VOCÊ VAI RECEBER?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-zinc-800 hover:border-red-500 transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={benefit.image || "/placeholder.svg"}
                    alt={benefit.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CheckCircle className="h-8 w-8 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-zinc-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">QUEM JÁ USOU, APROVA!</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-zinc-800 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-red-500" fill="currentColor" />
                      ))}
                    </div>
                    <p className="font-bold">{testimonial.author}</p>
                  </div>
                </div>
                <p className="text-zinc-200">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6 text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src="https://images.unsplash.com/photo-1508345228704-935cc84bf5e2"
              alt="Selo de garantia"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">RESULTADOS OU SEU DINHEIRO DE VOLTA!</h2>
          <p className="text-red-500 text-xl mb-8">
            Se em 7 dias você não sentir que sua produtividade melhorou, devolvemos seu dinheiro!
          </p>
          <div className="flex justify-center gap-4 text-2xl font-bold">
            <div className="bg-red-500 p-4 rounded">{String(timeLeft.hours).padStart(2, "0")}h</div>
            <div className="bg-red-500 p-4 rounded">{String(timeLeft.minutes).padStart(2, "0")}m</div>
            <div className="bg-red-500 p-4 rounded">{String(timeLeft.seconds).padStart(2, "0")}s</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">AINDA TEM DÚVIDAS?</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, index) => (
              <div key={index} className="border border-zinc-800 rounded-lg overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-4 text-left hover:bg-zinc-900 transition-all duration-300"
                  onClick={() => setIsOpen(isOpen === index ? null : index)}
                >
                  <span className="font-bold">{item.question}</span>
                  {isOpen === index ? (
                    <ChevronUp className="h-5 w-5 text-red-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-red-500" />
                  )}
                </button>
                {isOpen === index && <div className="p-4 bg-zinc-900">{item.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">AGORA É SUA VEZ!</h2>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 text-lg"
          >
            GARANTA O SEU AGORA
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/YOUR_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
      >
        <WhatsappIcon className="h-6 w-6" />
      </a>

      {/* Urgency Popup */}
      {showPopup && (
        <div className="fixed bottom-4 left-4 bg-red-500 p-4 rounded-lg shadow-lg animate-slide-in z-50">
          <p className="font-bold">Somente 10 unidades restantes!</p>
          <button onClick={() => setShowPopup(false)} className="absolute top-1 right-1 text-white">
            ×
          </button>
        </div>
      )}
    </div>
  )
}

const benefits = [
  {
    title: "Planilha de Hábitos e Disciplina",
    description: "Desenvolva hábitos poderosos e mantenha sua disciplina diária.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
  },
  {
    title: "Planejamento Semanal e Mensal",
    description: "Organize suas metas e objetivos de forma estratégica.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
  },
  {
    title: "Checklist de Alta Performance",
    description: "Maximize sua produtividade com rotinas comprovadas.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093",
  },
  {
    title: "Planilha de Controle Financeiro",
    description: "Gerencie suas finanças e alcance independência financeira.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
]

const testimonials = [
  {
    text: "Depois que comecei a usar o Pack Mente de Aço, minha produtividade aumentou 300%!",
    author: "João Silva",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    text: "As planilhas são incríveis! Finalmente consegui organizar minha vida.",
    author: "Maria Santos",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    text: "Melhor investimento que já fiz em mim mesmo. Recomendo!",
    author: "Pedro Oliveira",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
]

const faq = [
  {
    question: "Como vou receber o material?",
    answer: "Você receberá acesso instantâneo por e-mail após a confirmação do pagamento.",
  },
  {
    question: "Posso usar em qualquer dispositivo?",
    answer: "Sim! As planilhas são compatíveis com celular, tablet e computador.",
  },
  {
    question: "Tem garantia?",
    answer: "Sim! Oferecemos 7 dias de garantia incondicional.",
  },
]

