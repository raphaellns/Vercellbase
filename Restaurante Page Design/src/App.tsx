import { useState } from 'react';
import { Menu, X, UtensilsCrossed, Wine, Grid3x3, Users, UserCircle } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { icon: UtensilsCrossed, label: 'Pratos', color: 'bg-orange-500' },
    { icon: Wine, label: 'Bebidas', color: 'bg-purple-500' },
    { icon: Grid3x3, label: 'Categorias', color: 'bg-pink-500' },
    { icon: Users, label: 'Garçons', color: 'bg-teal-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      
      {/* Header with hamburger menu */}
      <header className="relative z-50 p-6 flex justify-between items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-orange-600" />
          ) : (
            <Menu className="w-6 h-6 text-orange-600 group-hover:text-orange-700" />
          )}
        </button>

        {/* User login button */}
        <button className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
          <UserCircle className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
          <span className="text-purple-600 group-hover:text-purple-700">Entrar</span>
        </button>
      </header>

      {/* Sliding menu with cards */}
      <div
        className={`fixed left-0 top-24 z-40 transition-all duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col gap-3 p-6 w-72">
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              className={`${item.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 transform hover:-translate-y-1 flex items-center justify-start gap-5 text-white group`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: menuOpen ? 'slideIn 0.3s ease-out forwards' : 'none',
              }}
            >
              <item.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span className="text-xl">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-6 pt-12 pb-20">
        {/* Restaurant name and logo */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            {/* Decorative elements around the title */}
            <div className="absolute -top-8 -left-8 text-6xl animate-bounce">🍰</div>
            <div className="absolute -top-8 -right-8 text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🧁</div>
            <div className="absolute -bottom-4 -left-12 text-5xl animate-bounce" style={{ animationDelay: '0.4s' }}>🍪</div>
            <div className="absolute -bottom-4 -right-12 text-5xl animate-bounce" style={{ animationDelay: '0.6s' }}>🍩</div>
            
            <h1 className="text-7xl mb-4 px-12 py-8 bg-white rounded-3xl shadow-2xl relative">
              <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Gostosuras
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                do Tralalero
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-gray-700 mt-8 max-w-2xl mx-auto">
            Onde cada mordida é uma festa de sabores! 🎉
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="text-5xl mb-4 text-center">🎨</div>
            <h3 className="text-2xl mb-3 text-center text-orange-600">Criatividade</h3>
            <p className="text-gray-600 text-center">
              Pratos únicos criados com amor e ingredientes selecionados
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="text-5xl mb-4 text-center">❤️</div>
            <h3 className="text-2xl mb-3 text-center text-pink-600">Paixão</h3>
            <p className="text-gray-600 text-center">
              Feito com dedicação e carinho em cada detalhe
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="text-5xl mb-4 text-center">���</div>
            <h3 className="text-2xl mb-3 text-center text-purple-600">Qualidade</h3>
            <p className="text-gray-600 text-center">
              Experiência gastronômica incomparável
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl p-12 max-w-3xl mx-auto shadow-2xl">
            <h2 className="text-4xl text-white mb-6">
              Pronto para uma experiência deliciosa? 🌟
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Explore nosso menu e descubra sabores que vão fazer você dançar de alegria!
            </p>
            <button className="bg-white text-pink-600 px-10 py-4 rounded-full hover:bg-pink-50 transition-all hover:scale-105 shadow-lg">
              Ver Cardápio Completo
            </button>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}