import React, { useEffect, useState } from 'react';
import { Shield, Zap, Users, Star, ChevronRight, Download, Sword, Target, Crosshair } from 'lucide-react';
import { loadConfig } from './utils/config';

function App() {
  const [config, setConfig] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const configData = await loadConfig();
        setConfig(configData);
      } catch (error) {
        console.error("Error loading config:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-white text-xl">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute top-0 left-0 right-0">
          <nav className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sword className="w-8 h-8 text-custom-500" />
                <span className="text-xl font-bold">{config.SITE_NAME || 'WowClient'}</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <button onClick={() => scrollToSection('features')} className="hover:text-custom-500 transition">
                  {config.NAV_RESOURCES || 'Recursos'}
                </button>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-custom-500 transition">
                  {config.NAV_PRICING || 'Planos'}
                </button>
                <a href={config.DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="hover:text-custom-500 transition">
                  {config.NAV_DOWNLOAD || 'Download'}
                </a>
              </div>
              <button className="bg-custom-500 hover:bg-custom-600 px-6 py-2 rounded-lg transition">
                {config.NAV_START || 'Começar'}
              </button>
            </div>
          </nav>
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              {config.HERO_TITLE || 'Domine o Minecraft'}<br/>
              <span className="text-custom-500">{config.HERO_SUBTITLE || 'Como Nunca Antes'}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {config.HERO_DESCRIPTION || 'Eleve sua experiência com o melhor client hack do Brasil.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={config.DOWNLOAD_URL}
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center bg-custom-500 hover:bg-custom-600 px-8 py-4 rounded-lg text-lg font-semibold transition"
              >
                {config.HERO_BUTTON || 'Baixar Agora'}
                <Download className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">{config.FEATURES_TITLE || 'Recursos Premium'}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-gray-700 p-8 rounded-xl">
              <Crosshair className="w-12 h-12 text-custom-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{config.FEATURE_1_TITLE || 'Combat Hacks'}</h3>
              <p className="text-gray-300">{config.FEATURE_1_DESC || 'KillAura, AutoClicker e Reach para dominar em PvP.'}</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl">
              <Target className="w-12 h-12 text-custom-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{config.FEATURE_2_TITLE || 'Movimentação'}</h3>
              <p className="text-gray-300">{config.FEATURE_2_DESC || 'Speed, Fly, NoFall para mobilidade superior.'}</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl">
              <Star className="w-12 h-12 text-custom-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{config.FEATURE_3_TITLE || 'Módulos Utilitários'}</h3>
              <p className="text-gray-300">{config.FEATURE_3_DESC || 'ESP, Nametags, E Arrows para vantagem estratégica.'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">{config.PRICING_TITLE || 'Escolha Seu Plano'}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">{config.PLAN_BASIC_TITLE || 'Básico'}</h3>
              <div className="text-4xl font-bold mb-6">{config.PLAN_BASIC_PRICE || 'R$49,90'}</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-custom-500 mr-2" />
                  {config.PLAN_BASIC_FEATURE_1 || 'KillAura e AutoClicker'}
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-custom-500 mr-2" />
                  {config.PLAN_BASIC_FEATURE_2 || 'Speed e Fly básicos'}
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-custom-500 mr-2" />
                  {config.PLAN_BASIC_FEATURE_3 || 'Suporte via Discord'}
                </li>
              </ul>
              <button className="w-full bg-custom-500 hover:bg-custom-600 py-3 rounded-lg transition">
                {config.BUTTON_BUY || 'Comprar Agora'}
              </button>
            </div>
            <div className="bg-custom-500 p-8 rounded-xl transform scale-105">
              <h3 className="text-xl font-semibold mb-4">{config.PLAN_PRO_TITLE || 'Pro'}</h3>
              <div className="text-4xl font-bold mb-6">{config.PLAN_PRO_PRICE || 'R$99,90'}</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  {config.PLAN_PRO_FEATURE_1 || 'Todos os hacks de combate'}
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  {config.PLAN_PRO_FEATURE_2 || 'XRay e ChestESP'}
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  {config.PLAN_PRO_FEATURE_3 || 'Suporte prioritário'}
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  {config.PLAN_PRO_FEATURE_4 || 'Configs exclusivas'}
                </li>
              </ul>
              <button className="w-full bg-white text-custom-500 hover:bg-gray-100 py-3 rounded-lg transition">
                {config.BUTTON_BUY || 'Comprar Agora'}
              </button>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">{config.PLAN_ULTIMATE_TITLE || 'Ultimate'}</h3>
              <div className="text-4xl font-bold mb-6">{config.PLAN_ULTIMATE_PRICE || 'R$149,90'}</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-custom-500 mr-2" />
                  {config.PLAN_ULTIMATE_FEATURE_1 || 'Todos os recursos Pro'}
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-custom-500 mr-2" />
                  {config.PLAN_ULTIMATE_FEATURE_2 || 'Bypass em todos servidores'}
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-custom-500 mr-2" />
                  {config.PLAN_ULTIMATE_FEATURE_3 || 'Suporte 24/7 VIP'}
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-custom-500 mr-2" />
                  {config.PLAN_ULTIMATE_FEATURE_4 || 'Acesso antecipado'}
                </li>
              </ul>
              <button className="w-full bg-custom-500 hover:bg-custom-600 py-3 rounded-lg transition">
                {config.BUTTON_BUY || 'Comprar Agora'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sword className="w-8 h-8 text-custom-500" />
              <span className="text-xl font-bold">{config.SITE_NAME || 'WowClient'}</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-custom-500 transition">{config.FOOTER_TERMS || 'Termos'}</a>
              <a href="#" className="hover:text-custom-500 transition">{config.FOOTER_PRIVACY || 'Privacidade'}</a>
              <a href="#" className="hover:text-custom-500 transition">{config.FOOTER_CONTACT || 'Contato'}</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © {config.COPYRIGHT_YEAR || '2025'} {config.SITE_NAME || 'WowClient'}. {config.FOOTER_COPYRIGHT || 'Todos os direitos reservados.'}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;