"use client"

import { useState } from "react"
import { CheckCircle, X, Loader2, Zap, Star, Gift } from "lucide-react"

export default function Quiz() {
  const [step, setStep] = useState(1)
  const [analyzing, setAnalyzing] = useState(false)
  const [currentPrice, setCurrentPrice] = useState(97.9)
  const [showPrice, setShowPrice] = useState(false)

  const originalPrice = 97.9

  const handleAnswer = (step: number, answer: boolean) => {
    setAnalyzing(true)

    setTimeout(() => {
      setAnalyzing(false)
      setShowPrice(true) // Mostra o desconto após cada resposta

      let newPrice = currentPrice

      // Aplica desconto independente da resposta até chegar em R$29,90
      switch (step) {
        case 1:
          newPrice = 79.9 // ~18% OFF
          break
        case 2:
          newPrice = 59.9 // ~39% OFF
          break
        case 3:
          newPrice = 39.9 // ~59% OFF
          break
        case 4:
          newPrice = 29.9 // ~70% OFF
          break
      }

      setCurrentPrice(newPrice)

      if (step === 4) {
        // Redireciona para o link externo
        window.location.href = "https://paymetodo21.vercel.app"
      } else {
        setStep(step + 1)
      }
    }, 1500)
  }

  const questions = [
    "Você sente que a procrastinação está limitando seu potencial?",
    "Está disposto(a) a dedicar 21 dias para mudar sua produtividade?",
    "Acredita que investir em si mesmo pode transformar sua vida?",
    "Quer garantir o melhor preço para o Método 21?",
  ]

  const questionIcons = [
    <Zap key="1" className="w-8 h-8 text-[#00e676] mb-4" />,
    <Star key="2" className="w-8 h-8 text-[#00e676] mb-4" />,
    <Gift key="3" className="w-8 h-8 text-[#00e676] mb-4" />,
    <CheckCircle key="4" className="w-8 h-8 text-[#00e676] mb-4" />,
  ]

  const currentDiscount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100)

  return (
    <div className="min-h-screen bg-[#0a1a14] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gradient-to-br from-[#071510] to-[#0a1a14] p-8 rounded-xl border border-[#00e676]/30 shadow-[0_0_30px_rgba(0,230,118,0.2)]">
        {/* Preço Atual - Mostra apenas desconto após cada resposta */}
        {showPrice && (
          <div className="text-center mb-8 p-4 bg-[#00e676]/10 rounded-lg border border-[#00e676]/30">
            <div className="flex items-center justify-center">
              <span className="bg-[#00e676] text-black px-4 py-2 rounded-full text-lg font-bold">
                {currentDiscount}% OFF aplicado!
              </span>
            </div>
          </div>
        )}

        {/* Progress */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`w-3 h-3 rounded-full ${
                  step >= num ? "bg-[#00e676]" : "bg-gray-600"
                } transition-all duration-300`}
              />
            ))}
          </div>
        </div>

        {analyzing ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="w-12 h-12 text-[#00e676] animate-spin mb-4" />
            <p className="text-white text-center">Aplicando desconto...</p>
          </div>
        ) : (
          <>
            {/* Question */}
            <div className="text-center mb-6">
              {questionIcons[step - 1]}
              <h2 className="text-xl font-bold text-white mb-2">{questions[step - 1]}</h2>
              <p className="text-gray-400 text-sm">Pergunta {step} de 4</p>
            </div>

            {/* Indicação de Desconto */}
            <div className="text-center mb-6 p-3 bg-[#071510]/50 rounded-lg border border-[#00e676]/20">
              <p className="text-[#00e676] text-sm font-medium">✨ Responda e ganhe desconto no preço!</p>
            </div>

            {/* Answer Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer(step, true)}
                className="flex flex-col items-center p-6 bg-gradient-to-br from-[#00e676]/20 to-[#00e676]/10 rounded-lg border border-[#00e676]/30 hover:border-[#00e676]/60 hover:shadow-[0_0_20px_rgba(0,230,118,0.3)] transition-all transform hover:scale-105"
              >
                <CheckCircle className="w-8 h-8 text-[#00e676] mb-2" />
                <span className="text-white font-bold">SIM</span>
                <span className="text-[#00e676] text-xs mt-1">Aplicar desconto</span>
              </button>

              <button
                onClick={() => handleAnswer(step, false)}
                className="flex flex-col items-center p-6 bg-[#071510] rounded-lg border border-gray-600/20 hover:border-gray-500/50 transition-all"
              >
                <X className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-white font-bold">NÃO</span>
                <span className="text-gray-400 text-xs mt-1">Aplicar desconto</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
