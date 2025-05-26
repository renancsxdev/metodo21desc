"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  CheckCircle,
  Clock,
  Target,
  Brain,
  Zap,
  BarChart3,
  ListChecks,
  Award,
  ArrowRight,
  ChevronDown,
  Percent,
  Star,
} from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"

function OfertaEspecialContent() {
  const searchParams = useSearchParams()
  const discount = Number.parseInt(searchParams.get("discount") || "72")
  const completed = searchParams.get("completed") === "true"
  const maxDiscount = searchParams.get("maxDiscount") === "true"

  const originalPrice = 49.9
  const finalPrice = 13.99 // SEMPRE este preço
  const actualDiscount = 72 // SEMPRE 72% OFF para chegar em R$13,99

  return (
    <div className="min-h-screen bg-[#0a1a14] text-white">
      {/* Banner de Oferta Especial */}
      <div className="bg-gradient-to-r from-[#00e676] to-[#00c853] text-black py-4 px-4 text-center font-bold">
        <div className="container mx-auto flex items-center justify-center gap-2 flex-wrap">
          <Percent className="w-5 h-5" />
          <span>
            {completed && maxDiscount
              ? "PARABÉNS! Você desbloqueou o DESCONTO MÁXIMO de 72%!"
              : completed
                ? "OFERTA ESPECIAL: 72% OFF garantido para você!"
                : "OFERTA ESPECIAL: 72% OFF por tempo limitado!"}
          </span>
          <Star className="w-5 h-5" />
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071510] via-[#0a1a14] to-[#0a1a14] z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 z-0"></div>

        {/* Diagonal Accent */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00e676]/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#00e676]/5 rounded-full blur-3xl z-0"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Logo with glow effect */}
            <div className="flex justify-center mb-8 relative">
              <div className="relative">
                <Image src="/images/logo.png" alt="Método 21" width={180} height={180} className="relative z-10" />
                <div className="absolute inset-0 blur-xl bg-[#00e676]/20 z-0 scale-110" aria-hidden="true"></div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Domine sua</span>
                <span className="block text-[#00e676]">Produtividade</span>
                <span className="block">
                  em <span className="text-[#00e676]">21 Dias</span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-6 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Um plano prático para eliminar a procrastinação, manter o foco e atingir suas metas com clareza e
                consistência.
              </p>

              {/* Destaque da Oferta */}
              <div className="bg-[#071510]/80 p-6 rounded-xl border border-[#00e676]/30 inline-block mb-8">
                <p className="text-[#00e676] font-medium mb-2">
                  {completed && maxDiscount
                    ? "VOCÊ CONQUISTOU O DESCONTO MÁXIMO!"
                    : completed
                      ? "SUA OFERTA ESPECIAL GARANTIDA"
                      : "OFERTA POR TEMPO LIMITADO"}
                </p>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-gray-400 text-xl line-through">
                    R${originalPrice.toFixed(2).replace(".", ",")}
                  </span>
                  <span className="text-4xl font-bold text-white">R$13,99</span>
                  <span className="bg-[#00e676] text-black px-3 py-1 rounded-full text-sm font-bold">72% OFF</span>
                </div>
                <p className="text-[#00e676] text-sm mb-2">
                  {maxDiscount ? "Você economizou o MÁXIMO possível: R$35,91" : "Economia garantida de R$35,91"}
                </p>
                <div className="mt-3">
                  <CountdownTimer minutes={15} />
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link
                href="https://go.tribopay.com.br/qryyf"
                className="px-8 py-5 bg-gradient-to-r from-[#00e676] to-[#00c853] hover:from-[#00c853] hover:to-[#00e676] text-black font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,230,118,0.5)] md:hover:shadow-[0_0_30px_rgba(0,230,118,0.7)]"
              >
                {completed && maxDiscount ? "Garantir Desconto MÁXIMO por R$13,99" : "Comece Agora por Apenas R$13,99"}
              </Link>
              <Link
                href="#conteudo"
                className="px-8 py-5 bg-transparent border-2 border-[#00e676] hover:bg-[#00e676]/10 text-white font-bold rounded-lg text-lg transition-all md:hover:scale-105"
              >
                Ver Conteúdo
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
              <a
                href="#conteudo"
                className="flex flex-col items-center text-gray-400 hover:text-[#00e676] transition-colors"
              >
                <span className="text-sm mb-2">Descubra mais</span>
                <ChevronDown className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Benefícios Rápidos */}
      <section className="py-16 bg-[#071510]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-[#0a1a14] rounded-xl border border-[#00e676]/20 hover:border-[#00e676]/50 transition-all md:hover:transform md:hover:scale-105 md:hover:shadow-[0_5px_20px_rgba(0,230,118,0.2)]">
              <Clock className="w-12 h-12 text-[#00e676] mb-4" />
              <h3 className="text-xl font-bold mb-2">Fim da Procrastinação</h3>
              <p className="text-gray-400">
                Técnicas práticas para vencer a procrastinação e aumentar sua produtividade diária.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#0a1a14] rounded-xl border border-[#00e676]/20 hover:border-[#00e676]/50 transition-all md:hover:transform md:hover:scale-105 md:hover:shadow-[0_5px_20px_rgba(0,230,118,0.2)]">
              <Target className="w-12 h-12 text-[#00e676] mb-4" />
              <h3 className="text-xl font-bold mb-2">Foco Absoluto</h3>
              <p className="text-gray-400">Aprenda a manter o foco nas tarefas importantes e eliminar distrações.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#0a1a14] rounded-xl border border-[#00e676]/20 hover:border-[#00e676]/50 transition-all md:hover:transform md:hover:scale-105 md:hover:shadow-[0_5px_20px_rgba(0,230,118,0.2)]">
              <BarChart3 className="w-12 h-12 text-[#00e676] mb-4" />
              <h3 className="text-xl font-bold mb-2">Resultados Reais</h3>
              <p className="text-gray-400">Transforme sua rotina e alcance resultados concretos em apenas 21 dias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Programático */}
      <section id="conteudo" className="py-20 bg-[#0a1a14]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Conteúdo Programático</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Um programa estruturado em 3 semanas para transformar sua produtividade e eliminar a procrastinação de
              vez.
            </p>
          </div>

          {/* Semana 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-[#071510] p-8 rounded-xl border border-[#00e676]/20 md:hover:border-[#00e676]/50 md:hover:shadow-[0_5px_30px_rgba(0,230,118,0.15)] transition-all">
                <h3 className="text-2xl font-bold mb-6 text-[#00e676]">Semana 1 – Reprogramação Mental</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <Brain className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Quebre o Ciclo da Procrastinação</h4>
                      <p className="text-gray-400">
                        Entenda os gatilhos que te levam a procrastinar e aprenda técnicas para quebrar esse ciclo.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Target className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Como Criar Metas Claras e Realistas</h4>
                      <p className="text-gray-400">
                        Defina objetivos alcançáveis e crie um plano de ação eficiente para realizá-los.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <ListChecks className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Planejamento Diário – Estruturando Seu Dia</h4>
                      <p className="text-gray-400">
                        Aprenda a organizar seu dia para maximizar a produtividade e reduzir o estresse.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative w-64 h-64 md:hover:transform md:hover:scale-110 transition-transform duration-500">
                <Image src="/images/semana1.png" alt="Semana 1" width={300} height={300} className="object-contain" />
              </div>
            </div>
          </div>

          {/* Semana 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:hover:transform md:hover:scale-110 transition-transform duration-500">
                <Image src="/images/semana2.png" alt="Semana 2" width={300} height={300} className="object-contain" />
              </div>
            </div>
            <div>
              <div className="bg-[#071510] p-8 rounded-xl border border-[#00e676]/20 md:hover:border-[#00e676]/50 md:hover:shadow-[0_5px_30px_rgba(0,230,118,0.15)] transition-all">
                <h3 className="text-2xl font-bold mb-6 text-[#00e676]">Semana 2 – Ação Diária</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <Zap className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Técnicas de Produtividade Essenciais</h4>
                      <p className="text-gray-400">
                        Domine métodos comprovados como Pomodoro, GTD e outros para aumentar sua eficiência.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Target className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Mantendo o Foco em Tarefas Importantes</h4>
                      <p className="text-gray-400">
                        Estratégias para identificar prioridades e manter o foco no que realmente importa.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Award className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Poder das Pequenas Vitórias</h4>
                      <p className="text-gray-400">
                        Como celebrar conquistas diárias para manter a motivação e o progresso constante.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Semana 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-[#071510] p-8 rounded-xl border border-[#00e676]/20 md:hover:border-[#00e676]/50 md:hover:shadow-[0_5px_30px_rgba(0,230,118,0.15)] transition-all">
                <h3 className="text-2xl font-bold mb-6 text-[#00e676]">Semana 3 – Manutenção e Consolidação</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Revisão das Técnicas Aprendidas</h4>
                      <p className="text-gray-400">
                        Consolidação de todo o conhecimento adquirido nas semanas anteriores.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Brain className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Como Evitar a Recaída na Procrastinação</h4>
                      <p className="text-gray-400">
                        Estratégias para manter os novos hábitos e evitar voltar aos padrões antigos.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <BarChart3 className="w-6 h-6 text-[#00e676] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Plano de Ação para os Próximos 21 Dias</h4>
                      <p className="text-gray-400">
                        Criação de um plano personalizado para continuar evoluindo após o programa.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative w-64 h-64 md:hover:transform md:hover:scale-110 transition-transform duration-500">
                <Image src="/images/semana3.png" alt="Semana 3" width={300} height={300} className="object-contain" />
              </div>
            </div>
          </div>

          {/* CTA Meio */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-[#071510] p-4 rounded-xl border border-[#00e676]/30 mb-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-gray-400 text-lg line-through">R$49,90</span>
                <span className="text-3xl font-bold text-white">R$13,99</span>
                <span className="bg-[#00e676] text-black px-2 py-1 rounded-full text-xs font-bold">72% OFF</span>
              </div>
            </div>

            <Link
              href="https://go.tribopay.com.br/qryyf"
              className="inline-flex items-center px-8 py-4 bg-[#00e676] hover:bg-[#00c853] text-black font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,230,118,0.5)] md:hover:shadow-[0_0_25px_rgba(0,230,118,0.7)]"
            >
              Quero Começar Agora por R$13,99 <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-[#0a1a14]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">O Que Você Vai Receber</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tudo o que você precisa para transformar sua produtividade em apenas 21 dias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0a1a14] p-6 rounded-xl border border-[#00e676]/20 hover:border-[#00e676]/50 transition-all md:hover:transform md:hover:scale-105 md:hover:shadow-[0_5px_20px_rgba(0,230,118,0.2)]">
              <div className="w-12 h-12 bg-[#00e676]/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#00e676]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Acesso Instantâneo</h3>
              <p className="text-gray-400">Comece imediatamente após a compra, sem esperas.</p>
            </div>
            <div className="bg-[#0a1a14] p-6 rounded-xl border border-[#00e676]/20 hover:border-[#00e676]/50 transition-all md:hover:transform md:hover:scale-105 md:hover:shadow-[0_5px_20px_rgba(0,230,118,0.2)]">
              <div className="w-12 h-12 bg-[#00e676]/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-[#00e676]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Metodologia Prática</h3>
              <p className="text-gray-400">Conteúdo direto ao ponto, sem enrolação.</p>
            </div>
            <div className="bg-[#0a1a14] p-6 rounded-xl border border-[#00e676]/20 hover:border-[#00e676]/50 transition-all md:hover:transform md:hover:scale-105 md:hover:shadow-[0_5px_20px_rgba(0,230,118,0.2)]">
              <div className="w-12 h-12 bg-[#00e676]/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#00e676]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Acompanhamento Diário</h3>
              <p className="text-gray-400">Plano estruturado para cada um dos 21 dias.</p>
            </div>
            <div className="bg-[#0a1a14] p-6 rounded-xl border border-[#00e676]/20 hover:border-[#00e676]/50 transition-all md:hover:transform md:hover:scale-105 md:hover:shadow-[0_5px_20px_rgba(0,230,118,0.2)]">
              <div className="w-12 h-12 bg-[#00e676]/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#00e676]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Acesso Vitalício</h3>
              <p className="text-gray-400">Pague uma vez e tenha acesso para sempre.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preço e CTA Final */}
      <section id="comprar" className="py-20 bg-[#0a1a14]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#071510] to-[#0a1a14] p-8 md:p-12 rounded-2xl border border-[#00e676]/30 shadow-[0_0_30px_rgba(0,230,118,0.1)] md:hover:shadow-[0_0_40px_rgba(0,230,118,0.2)] transition-all">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {completed && maxDiscount
                  ? "Você Conquistou o Desconto Máximo!"
                  : completed
                    ? "Sua Oferta Especial Garantida"
                    : "Transforme Sua Produtividade"}
              </h2>
              <p className="text-xl text-gray-300">
                {completed && maxDiscount
                  ? "Parabéns! Você desbloqueou 72% OFF - a maior economia possível!"
                  : "Método 21 com 72% de desconto - De R$49,90 por apenas R$13,99"}
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
              <div className="text-center md:text-left">
                <div className="mb-2">
                  <span className="text-gray-400 text-lg line-through">De R$49,90</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-4xl md:text-6xl font-bold text-white">R$13,99</span>
                  <span className="bg-[#00e676] text-black px-3 py-1 rounded-full text-sm font-bold">72% OFF</span>
                </div>
                <p className="text-gray-400 mt-2">Acesso vitalício a todo o conteúdo</p>
              </div>

              <div className="w-full md:w-auto">
                <Link
                  href="https://go.tribopay.com.br/qryyf"
                  className="w-full md:w-auto px-10 py-5 bg-gradient-to-r from-[#00e676] to-[#00c853] hover:from-[#00c853] hover:to-[#00e676] text-black font-bold rounded-lg text-xl transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,230,118,0.5)] md:hover:shadow-[0_0_25px_rgba(0,230,118,0.7)] flex items-center justify-center"
                >
                  {completed && maxDiscount ? `Garantir Tudo por R$13,99` : "Acesso Imediato por R$13,99"}
                </Link>
                <p className="text-center text-gray-400 text-sm mt-3">Pagamento seguro via PIX ou cartão</p>
              </div>
            </div>

            {/* Lista de benefícios incluindo bônus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00e676] flex-shrink-0 mt-1" />
                <p className="text-gray-300">Acesso instantâneo a todo o conteúdo</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00e676] flex-shrink-0 mt-1" />
                <p className="text-gray-300">Metodologia prática e direta ao ponto</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00e676] flex-shrink-0 mt-1" />
                <p className="text-gray-300">Plano de 21 dias estruturado</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00e676] flex-shrink-0 mt-1" />
                <p className="text-gray-300">Garantia de 7 dias ou seu dinheiro de volta</p>
              </div>
            </div>

            {/* Destaque Final */}
            <div className="bg-[#00e676]/10 p-4 rounded-lg border border-[#00e676]/30 text-center">
              <p className="text-white font-medium">
                {completed && maxDiscount
                  ? "🏆 DESCONTO MÁXIMO CONQUISTADO: 72% OFF - Método 21 por apenas R$13,99!"
                  : "🔥 Oferta especial: De R$49,90 por apenas R$13,99 - Economia de R$35,91!"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#0a1a14] border-t border-[#00e676]/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image src="/images/logo.png" alt="Método 21" width={120} height={120} />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Método 21. Todos os direitos reservados.
              </p>
              <div className="flex gap-4 mt-2 justify-center md:justify-end">
                <Link href="#" className="text-gray-400 hover:text-[#00e676] text-sm">
                  Termos de Uso
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#00e676] text-sm">
                  Política de Privacidade
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function OfertaEspecial() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0a1a14] flex items-center justify-center">
          <div className="text-white">Carregando sua oferta personalizada...</div>
        </div>
      }
    >
      <OfertaEspecialContent />
    </Suspense>
  )
}
