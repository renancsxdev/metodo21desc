"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle, X, Loader2 } from "lucide-react"

export default function Quiz() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<Record<number, boolean>>({})
  const [analyzing, setAnalyzing] = useState(false)
  const [analysisText, setAnalysisText] = useState("")

  const handleAnswer = (step: number, answer: boolean) => {
    setAnswers({ ...answers, [step]: answer })
    setAnalyzing(true)

    // Textos de análise para cada pergunta
    const analysisTexts = [
      "Analisando sua relação com produtividade...",
      "Processando suas experiências anteriores...",
      "Avaliando sua capacidade de investimento...",
      "Verificando opções de valor acessível...",
    ]

    setAnalysisText(analysisTexts[step - 1])

    // Simula um tempo de análise
    setTimeout(() => {
      setAnalyzing(false)

      if (step === 3 && answer) {
        // Se respondeu que R$19,90 cabe no orçamento, vai para o site original
        router.push("https://paymetodo21.vercel.app")
      } else if (step === 3 && !answer) {
        // Se respondeu que R$19,90 é caro, vai para a próxima pergunta
        setStep(step + 1)
      } else if (step === 4) {
        // Na quarta pergunta, se respondeu que R$13,99 cabe no orçamento, vai para a oferta especial
        if (answer) {
          router.push("/oferta-especial")
        } else {
          // Se respondeu que R$13,99 também é caro, vai para uma página de agradecimento
          router.push("/obrigado")
        }
      } else {
        // Avança para a próxima pergunta
        setStep(step + 1)
      }
    }, 1500)
  }

  const questions = [
    "Você sente que a falta de produtividade está prejudicando sua rotina?",
    "Você já tentou outras técnicas para melhorar sua produtividade?",
    "Um investimento de R$19,90 para transformar sua produtividade cabe no seu orçamento?",
    "E um investimento de apenas R$13,99 seria mais adequado para você?",
  ]

  return (
    <div className="min-h-screen bg-[#0a1a14] flex items-center justify-center p-4">
      {/* Quiz Container Flutuante */}
      <div className="w-full max-w-md bg-gradient-to-br from-[#071510] to-[#0a1a14] p-6 rounded-xl border border-[#00e676]/30 shadow-[0_0_30px_rgba(0,230,118,0.2)]">
        {/* Progress Indicator */}
        <div className="flex justify-between mb-6 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#071510] -translate-y-1/2 z-0"></div>
          <div className="flex justify-between w-full relative z-10">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                step >= 1 ? "bg-[#00e676] text-black" : "bg-[#071510] text-gray-400"
              } text-xs font-bold`}
            >
              1
            </div>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                step >= 2 ? "bg-[#00e676] text-black" : "bg-[#071510] text-gray-400"
              } text-xs font-bold`}
            >
              2
            </div>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                step >= 3 ? "bg-[#00e676] text-black" : "bg-[#071510] text-gray-400"
              } text-xs font-bold`}
            >
              3
            </div>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                step >= 4 ? "bg-[#00e676] text-black" : "bg-[#071510] text-gray-400"
              } text-xs font-bold`}
            >
              4
            </div>
          </div>
        </div>

        {analyzing ? (
          // Estado de análise
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="w-10 h-10 text-[#00e676] animate-spin mb-4" />
            <p className="text-white text-center font-medium">{analysisText}</p>
          </div>
        ) : (
          // Estado de pergunta
          <>
            {/* Question */}
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white mb-0">{questions[step - 1]}</h2>
            </div>

            {/* Answer Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-0">
              <button
                onClick={() => handleAnswer(step, true)}
                className="flex flex-col items-center p-4 bg-[#071510] rounded-lg border border-[#00e676]/20 hover:border-[#00e676]/50 hover:shadow-[0_0_20px_rgba(0,230,118,0.2)] transition-all"
              >
                <CheckCircle className="w-8 h-8 text-[#00e676] mb-2" />
                <span className="text-white font-medium">Sim</span>
              </button>

              <button
                onClick={() => handleAnswer(step, false)}
                className="flex flex-col items-center p-4 bg-[#071510] rounded-lg border border-[#00e676]/20 hover:border-[#00e676]/50 hover:shadow-[0_0_20px_rgba(0,230,118,0.2)] transition-all"
              >
                <X className="w-8 h-8 text-white mb-2" />
                <span className="text-white font-medium">Não</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
