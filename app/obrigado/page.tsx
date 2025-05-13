import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Obrigado() {
  return (
    <div className="min-h-screen bg-[#0a1a14] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gradient-to-br from-[#071510] to-[#0a1a14] p-8 rounded-xl border border-[#00e676]/30 shadow-[0_0_30px_rgba(0,230,118,0.2)] text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Obrigado pela sua participação!</h1>
        <p className="text-gray-300 mb-6">
          Agradecemos por responder ao nosso quiz. Infelizmente não temos uma oferta que se encaixe no seu orçamento no
          momento.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-[#00e676]/20 hover:bg-[#00e676]/30 text-[#00e676] font-medium rounded-lg transition-all"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}
