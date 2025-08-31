import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Play,
  Globe,
  Lock,
  BarChart3,
  Calculator,
  MessageCircle,
  Award,
  Clock,
  Target,
  Lightbulb,
  FileText,
  Download,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

export default function BlockchainConsultingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                </div>
                <h1 className="text-xl font-bold text-foreground">BlockchainPro</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#servicios"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Servicios
                </a>
                <a
                  href="#casos"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Casos de Éxito
                </a>
                <a
                  href="#proceso"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Proceso
                </a>
                <a
                  href="#recursos"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Recursos
                </a>
                <Button variant="default" size="sm">
                  Contactar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-secondary/20 rounded-lg rotate-12"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-secondary/20 rounded-lg -rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-secondary/20 rounded-lg rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4">
                Líderes en Implementación Blockchain
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Transformamos tu empresa con <span className="text-secondary">tecnología blockchain</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl text-pretty">
                Ayudamos a empresas a implementar soluciones blockchain seguras, escalables y eficientes. Desde
                contratos inteligentes hasta tokenización de activos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8">
                  Consulta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Demo
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl overflow-hidden">
                <img
                  src="/modern-blockchain-network-visualization-with-conne.png"
                  alt="Blockchain Network Visualization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>

                {/* Floating stats cards */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-semibold">+300% ROI</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-semibold">100% Seguro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-muted-foreground">Empresas que confían en nosotros</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center group">
              <div className="h-16 bg-gradient-to-r from-muted to-muted/50 rounded-lg flex items-center justify-center group-hover:from-secondary/10 group-hover:to-secondary/5 transition-all">
                <span className="font-bold text-lg text-muted-foreground group-hover:text-secondary transition-colors">
                  TechCorp
                </span>
              </div>
            </div>
            <div className="text-center group">
              <div className="h-16 bg-gradient-to-r from-muted to-muted/50 rounded-lg flex items-center justify-center group-hover:from-secondary/10 group-hover:to-secondary/5 transition-all">
                <span className="font-bold text-lg text-muted-foreground group-hover:text-secondary transition-colors">
                  FinanceX
                </span>
              </div>
            </div>
            <div className="text-center group">
              <div className="h-16 bg-gradient-to-r from-muted to-muted/50 rounded-lg flex items-center justify-center group-hover:from-secondary/10 group-hover:to-secondary/5 transition-all">
                <span className="font-bold text-lg text-muted-foreground group-hover:text-secondary transition-colors">
                  LogiChain
                </span>
              </div>
            </div>
            <div className="text-center group">
              <div className="h-16 bg-gradient-to-r from-muted to-muted/50 rounded-lg flex items-center justify-center group-hover:from-secondary/10 group-hover:to-secondary/5 transition-all">
                <span className="font-bold text-lg text-muted-foreground group-hover:text-secondary transition-colors">
                  DataFlow
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Servicios Blockchain</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones completas para integrar blockchain en tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 group border-0 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="relative">
                <div className="w-full h-32 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/smart-contract-code-interface-with-security-shield.png"
                    alt="Smart Contracts"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Shield className="h-12 w-12 text-secondary mb-4" />
                <CardTitle className="group-hover:text-secondary transition-colors">Contratos Inteligentes</CardTitle>
                <CardDescription>
                  Automatización de procesos empresariales con contratos seguros y transparentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Desarrollo personalizado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Auditorías de seguridad
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Implementación completa
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full bg-transparent group-hover:bg-secondary group-hover:text-secondary-foreground transition-all"
                >
                  Más información
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-0 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="relative">
                <div className="w-full h-32 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/digital-asset-tokenization-with-golden-coins-and-b.png"
                    alt="Asset Tokenization"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Zap className="h-12 w-12 text-secondary mb-4" />
                <CardTitle className="group-hover:text-secondary transition-colors">Tokenización de Activos</CardTitle>
                <CardDescription>Convierte activos físicos y digitales en tokens blockchain</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Bienes raíces
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Arte y coleccionables
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Activos empresariales
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full bg-transparent group-hover:bg-secondary group-hover:text-secondary-foreground transition-all"
                >
                  Más información
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-0 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="relative">
                <div className="w-full h-32 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/defi-decentralized-finance-dashboard-with-charts-a.png"
                    alt="DeFi Solutions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Users className="h-12 w-12 text-secondary mb-4" />
                <CardTitle className="group-hover:text-secondary transition-colors">DeFi y Finanzas</CardTitle>
                <CardDescription>Soluciones financieras descentralizadas para tu empresa</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Protocolos de préstamos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Exchanges descentralizados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Yield farming
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full bg-transparent group-hover:bg-secondary group-hover:text-secondary-foreground transition-all"
                >
                  Más información
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ve Blockchain en Acción</h2>
            <p className="text-xl text-muted-foreground">
              Descubre cómo transformamos empresas con tecnología blockchain
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="/professional-blockchain-technology-presentation-wi.png"
                alt="Blockchain Demo Video"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl font-semibold mb-2">Implementación Blockchain en 90 días</h3>
                <p className="text-white/80 text-sm">
                  Mira cómo ayudamos a TechCorp a revolucionar su cadena de suministro
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="casos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Casos de Éxito</h2>
            <p className="text-xl text-muted-foreground">Resultados reales de nuestras implementaciones blockchain</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-secondary/10 to-secondary/5 overflow-hidden">
                <img
                  src="/global-supply-chain-logistics-with-blockchain-trac.png"
                  alt="Supply Chain Case Study"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Cadena de Suministro Global</CardTitle>
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <CardDescription>Implementación de trazabilidad blockchain para empresa logística</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Reducción de fraudes</span>
                    <span className="font-bold text-2xl text-secondary">95%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Tiempo de verificación</span>
                    <span className="font-bold text-2xl text-secondary">-80%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Satisfacción del cliente</span>
                    <span className="font-bold text-2xl text-secondary">98%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-secondary/10 to-secondary/5 overflow-hidden">
                <img
                  src="/defi-platform-dashboard-with-financial-charts-and-.png"
                  alt="DeFi Platform Case Study"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Plataforma DeFi Empresarial</CardTitle>
                  <Star className="h-6 w-6 text-secondary" />
                </div>
                <CardDescription>Sistema de préstamos descentralizado para PYME</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Volumen procesado</span>
                    <span className="font-bold text-2xl text-secondary">$50M+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Usuarios activos</span>
                    <span className="font-bold text-2xl text-secondary">10,000+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Tiempo de aprobación</span>
                    <span className="font-bold text-2xl text-secondary">2 min</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Impacto en Números</h2>
            <p className="text-xl opacity-90">Resultados que hablan por sí solos</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 mr-2" />
                <span className="text-4xl font-bold">150+</span>
              </div>
              <p className="text-lg opacity-90">Proyectos Completados</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 mr-2" />
                <span className="text-4xl font-bold">50+</span>
              </div>
              <p className="text-lg opacity-90">Empresas Transformadas</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 mr-2" />
                <span className="text-4xl font-bold">$500M+</span>
              </div>
              <p className="text-lg opacity-90">Valor Procesado</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 mr-2" />
                <span className="text-4xl font-bold">99.9%</span>
              </div>
              <p className="text-lg opacity-90">Uptime Garantizado</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">¿Listo para transformar tu empresa?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Agenda una consulta gratuita y descubre cómo blockchain puede revolucionar tu negocio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Consulta Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Descargar Whitepaper
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Calculadora de ROI Blockchain</h2>
            <p className="text-xl text-muted-foreground">
              Descubre el potencial de retorno de inversión de implementar blockchain en tu empresa
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-gradient-to-br from-card to-card/50 shadow-xl">
              <CardHeader className="text-center">
                <Calculator className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-2xl">Calcula tu ROI Potencial</CardTitle>
                <CardDescription>
                  Ingresa los datos de tu empresa para obtener una estimación personalizada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Ingresos anuales (€)</label>
                      <Input placeholder="ej: 5000000" className="text-lg" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Empleados</label>
                      <Input placeholder="ej: 100" className="text-lg" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Sector</label>
                      <select className="w-full p-3 border border-border rounded-md bg-background text-foreground">
                        <option>Finanzas</option>
                        <option>Logística</option>
                        <option>Salud</option>
                        <option>Retail</option>
                        <option>Manufactura</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <Button className="w-full text-lg py-6">
                      <Calculator className="mr-2 h-5 w-5" />
                      Calcular ROI
                    </Button>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Estimación de Beneficios</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Reducción de costos</span>
                        <span className="font-bold text-secondary">€450,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Aumento de eficiencia</span>
                        <span className="font-bold text-secondary">€320,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Nuevos ingresos</span>
                        <span className="font-bold text-secondary">€280,000</span>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center text-lg">
                          <span className="font-semibold">ROI Estimado (3 años)</span>
                          <span className="font-bold text-2xl text-secondary">340%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="proceso" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestro Proceso de Implementación</h2>
            <p className="text-xl text-muted-foreground">
              Metodología probada para garantizar el éxito de tu proyecto blockchain
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-secondary/20"></div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <Card className="border-0 bg-gradient-to-l from-card to-card/50">
                    <CardHeader>
                      <div className="flex items-center justify-end gap-2">
                        <CardTitle>Análisis y Consultoría</CardTitle>
                        <Target className="h-6 w-6 text-secondary" />
                      </div>
                      <CardDescription className="text-right">
                        Evaluamos tu negocio y identificamos oportunidades blockchain
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-right space-y-2 text-sm text-muted-foreground">
                        <p>• Auditoría de procesos actuales</p>
                        <p>• Identificación de casos de uso</p>
                        <p>• Análisis de viabilidad técnica</p>
                      </div>
                      <div className="mt-4 text-right">
                        <Badge variant="secondary">2-4 semanas</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-secondary rounded-full border-4 border-background">
                  <span className="text-white font-bold">1</span>
                </div>

                <div className="flex-1 pl-8"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>

                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-secondary rounded-full border-4 border-background">
                  <span className="text-white font-bold">2</span>
                </div>

                <div className="flex-1 pl-8">
                  <Card className="border-0 bg-gradient-to-r from-card to-card/50">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Lightbulb className="h-6 w-6 text-secondary" />
                        <CardTitle>Diseño de Solución</CardTitle>
                      </div>
                      <CardDescription>Creamos la arquitectura técnica personalizada para tu proyecto</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• Arquitectura blockchain</p>
                        <p>• Diseño de contratos inteligentes</p>
                        <p>• Especificaciones técnicas</p>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">3-6 semanas</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <Card className="border-0 bg-gradient-to-l from-card to-card/50">
                    <CardHeader>
                      <div className="flex items-center justify-end gap-2">
                        <CardTitle>Desarrollo e Implementación</CardTitle>
                        <Zap className="h-6 w-6 text-secondary" />
                      </div>
                      <CardDescription className="text-right">
                        Construimos y desplegamos tu solución blockchain
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-right space-y-2 text-sm text-muted-foreground">
                        <p>• Desarrollo de contratos inteligentes</p>
                        <p>• Integración con sistemas existentes</p>
                        <p>• Pruebas exhaustivas de seguridad</p>
                      </div>
                      <div className="mt-4 text-right">
                        <Badge variant="secondary">8-16 semanas</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-secondary rounded-full border-4 border-background">
                  <span className="text-white font-bold">3</span>
                </div>

                <div className="flex-1 pl-8"></div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>

                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-secondary rounded-full border-4 border-background">
                  <span className="text-white font-bold">4</span>
                </div>

                <div className="flex-1 pl-8">
                  <Card className="border-0 bg-gradient-to-r from-card to-card/50">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Award className="h-6 w-6 text-secondary" />
                        <CardTitle>Lanzamiento y Soporte</CardTitle>
                      </div>
                      <CardDescription>Ponemos en marcha tu solución con soporte continuo</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• Despliegue en producción</p>
                        <p>• Capacitación del equipo</p>
                        <p>• Monitoreo y mantenimiento</p>
                      </div>
                      <div className="mt-4">
                        <Badge variant="secondary">Continuo</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recursos" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Recursos y Conocimiento</h2>
            <p className="text-xl text-muted-foreground">
              Mantente actualizado con las últimas tendencias en blockchain
            </p>
          </div>

          <Tabs defaultValue="blog" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="blog">Blog</TabsTrigger>
              <TabsTrigger value="whitepapers">Whitepapers</TabsTrigger>
              <TabsTrigger value="webinars">Webinars</TabsTrigger>
            </TabsList>

            <TabsContent value="blog">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader>
                    <div className="w-full h-32 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg mb-4"></div>
                    <CardTitle className="text-lg">El Futuro de DeFi en 2024</CardTitle>
                    <CardDescription>
                      Análisis de las tendencias emergentes en finanzas descentralizadas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>15 min de lectura</span>
                      <span>Hace 2 días</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader>
                    <div className="w-full h-32 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg mb-4"></div>
                    <CardTitle className="text-lg">Contratos Inteligentes: Guía Completa</CardTitle>
                    <CardDescription>Todo lo que necesitas saber sobre smart contracts para empresas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>20 min de lectura</span>
                      <span>Hace 1 semana</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader>
                    <div className="w-full h-32 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg mb-4"></div>
                    <CardTitle className="text-lg">Tokenización de Activos Reales</CardTitle>
                    <CardDescription>Cómo convertir activos físicos en tokens digitales</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>12 min de lectura</span>
                      <span>Hace 2 semanas</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="whitepapers">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <FileText className="h-8 w-8 text-secondary" />
                      <div>
                        <CardTitle>Blockchain para Empresas: Guía 2024</CardTitle>
                        <CardDescription>Estrategias de implementación y casos de uso</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Un análisis completo de cómo las empresas pueden aprovechar blockchain para mejorar sus
                      operaciones.
                    </p>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Download className="mr-2 h-4 w-4" />
                      Descargar PDF
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <FileText className="h-8 w-8 text-secondary" />
                      <div>
                        <CardTitle>Seguridad en Smart Contracts</CardTitle>
                        <CardDescription>Mejores prácticas y auditorías</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Guía técnica sobre cómo desarrollar y auditar contratos inteligentes seguros.
                    </p>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Download className="mr-2 h-4 w-4" />
                      Descargar PDF
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="webinars">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader>
                    <div className="w-full h-32 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg mb-4 flex items-center justify-center">
                      <Play className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle>Introducción a Blockchain para CEOs</CardTitle>
                    <CardDescription>Webinar en vivo - Próximo jueves 14:00</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Clock className="h-4 w-4" />
                      <span>60 minutos</span>
                    </div>
                    <Button className="w-full">Registrarse Gratis</Button>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader>
                    <div className="w-full h-32 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg mb-4 flex items-center justify-center">
                      <Play className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle>DeFi para Empresas Tradicionales</CardTitle>
                    <CardDescription>Grabación disponible</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Clock className="h-4 w-4" />
                      <span>45 minutos</span>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      Ver Grabación
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">¿Tienes Preguntas?</h2>
            <p className="text-xl text-muted-foreground">Nuestro equipo de expertos está aquí para ayudarte</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 bg-gradient-to-br from-card to-card/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
                <CardDescription>Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Nombre</label>
                    <Input placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input placeholder="tu@email.com" type="email" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Empresa</label>
                  <Input placeholder="Nombre de tu empresa" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Mensaje</label>
                  <Textarea placeholder="Cuéntanos sobre tu proyecto blockchain..." className="min-h-[120px]" />
                </div>
                <Button className="w-full text-lg py-6">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border-0 bg-gradient-to-br from-secondary/10 to-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Chat en Vivo</h3>
                      <p className="text-sm text-muted-foreground">Habla con un experto ahora mismo</p>
                    </div>
                    <Button className="ml-auto">Iniciar Chat</Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">info@blockchainpro.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Teléfono</h3>
                    <p className="text-muted-foreground">+34 900 123 456</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Oficina</h3>
                    <p className="text-muted-foreground">Madrid, España</p>
                  </div>
                </div>
              </div>

              <Card className="border-0 bg-gradient-to-br from-accent/10 to-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Consulta Gratuita</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Agenda una llamada de 30 minutos para discutir tu proyecto
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Agendar Llamada
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                </div>
                <h3 className="font-bold text-foreground">BlockchainPro</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Líderes en consultoría e implementación de soluciones blockchain para empresas.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Contratos Inteligentes</li>
                <li>Tokenización</li>
                <li>DeFi</li>
                <li>NFTs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Nosotros</li>
                <li>Casos de Éxito</li>
                <li>Blog</li>
                <li>Contacto</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@blockchainpro.com</li>
                <li>+34 900 123 456</li>
                <li>Madrid, España</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2024 BlockchainPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
