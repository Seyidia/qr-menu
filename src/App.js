import React, { useState } from 'react';
import { Search, Moon, Sun, ChefHat } from 'lucide-react';

const menuData = {
  Kuzu: [
    { id: 1, name: "Kuzu beyti", price: "750 TL", popular: true },
    { id: 2, name: "Kuzu pirzola", price: "750 TL", popular: true },
    { id: 3, name: "Kuzu kaburga", price: "600 TL" },
    { id: 4, name: "Kuzu külbastı", price: "700 TL" },
    { id: 5, name: "Kuzu kavurma", price: "700 TL" },
    { id: 6, name: "Kuzu böbrek", price: "500 TL" },
  ],
  Dana: [
    { id: 7, name: "Dana kavurma", price: "500 TL" },
    { id: 8, name: "Dana antrikot", price: "700 TL", popular: true },
    { id: 9, name: "Dana biftek", price: "500 TL" },
    { id: 10, name: "Dana lokum", price: "800 TL" },
    { id: 11, name: "Dana şiş", price: "650 TL" },
    { id: 12, name: "Ciğer şiş", price: "450 TL" },
    { id: 13, name: "Dana böbrek", price: "350 TL" },
  ],
  Tavuk: [
    { id: 14, name: "Tavuk kanat", price: "90 TL" },
    { id: 15, name: "Tavuk şiş", price: "95 TL", popular: true },
    { id: 16, name: "Tavuk ızgara karışık", price: "110 TL" },
  ],
  Adana: [
    { id: 17, name: "Adana porsiyon", price: "550 TL", popular: true },
    { id: 18, name: "Adana dürüm", price: "250 TL" },
  ],
  Salata: [
    { id: 19, name: "Karışık salata", price: "30 TL" },
    { id: 20, name: "Sezar salata", price: "40 TL" },
  ],
  Tatlılar: [
    { id: 21, name: "Kabak tatlısı", price: "40 TL" },
    { id: 22, name: "Şambali", price: "30 TL" },
  ],
  Mezeler: [
    { id: 23, name: "Haydari", price: "100 TL" },
    { id: 24, name: "Acılı ezme", price: "100 TL", popular: true },
    { id: 25, name: "Havuç tarator", price: "100 TL" },
  ],
  İçecekler: [
    { id: 26, name: "Elmalı Maden Suyu", price: "60 TL" },
    { id: 27, name: "Limonlu Maden Suyu", price: "60 TL" },
    { id: 28, name: "Sade Maden Suyu", price: "50 TL" },
<<<<<<< HEAD
    { id: 29, name: "Karpuz & Çilek Maden Suyu", price: "60 TL" },
    { id: 31, name: "Niğde Gazozu", price: "60 TL" },
    { id: 32, name: "Coca Cola", price: "70 TL" },
    { id: 33, name: "Ayran", price: "50 TL" },
    { id: 34, name: "Limonata", price: "50 TL" },
    { id: 35, name: "Acılı Şalgam", price: "50 TL" },
    { id: 36, name: "Mango Ice Tea", price: "70 TL" },
    { id: 37, name: "Ananas Ice Tea", price: "70 TL" },
    { id: 38, name: "Şeftalili Ice Tea", price: "70 TL" },
    { id: 39, name: "Fanta", price: "70 TL" },
=======
    { id: 29, name: "Karpuz % Çilek Maden Suyu", price: "60 TL" },
    { id: 30, name: "Niğde Gazozu", price: "60 TL" },
    { id: 31, name: "Coca Cola", price: "70 TL" },
    { id: 32, name: "Ayran", price: "50 TL" },
    { id: 33, name: "Limonata", price: "50 TL" },
    { id: 34, name: "Acılı Şalgam", price: "50 TL" },
    { id: 35, name: "Mango Ice Tea", price: "70 TL" },
    { id: 36, name: "Ananas Ice Tea", price: "70 TL" },
    { id: 37, name: "Şeftalili Ice Tea", price: "70 TL" },
    { id: 38, name: "Fanta", price: "70 TL" },
>>>>>>> 1ff15baf7adf859b7929bb3a9386566768201042
  ],
};

const categories = Object.keys(menuData).filter(category => menuData[category].length > 0);

export default function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const filteredProducts = menuData[activeCategory]?.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-[#f8f5f2] text-gray-800'  // Kirli beyaz arkaplan
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-800/90 border-gray-700' 
          : 'bg-white/90 border-[#e8e2d9]'  // Kirli beyaz border
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <ChefHat className="w-6 h-6 text-red-600" />
                <h1 className="text-lg font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Gönül Dağı Et Restaurant
                </h1>
              </div>
              
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
            
            {/* Search - Full width on mobile */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Menüde ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-full border transition-all duration-200 focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ChefHat className="w-8 h-8 text-red-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Gönül Dağı Et Restaurant
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Menüde ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`pl-10 pr-4 py-2 rounded-full border transition-all duration-200 focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>
              
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Categories */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className={`sticky top-24 p-6 rounded-2xl border transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-[#e8e2d9] shadow-lg'  // Kirli beyaz border
            }`}>
              <h2 className="text-xl font-bold mb-4 text-red-600">Kategoriler</h2>  {/* Kırmızı başlık */}
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'  // Kırmızı gradient
                        : darkMode
                          ? 'hover:bg-gray-700 text-gray-300'
                          : 'hover:bg-[#f5f0e8] text-gray-700'  // Açık kirli beyaz hover
                    }`}
                  >
                    {category}
                    <span className={`ml-2 text-xs ${
                      activeCategory === category ? 'text-red-200' : 'text-gray-500'
                    }`}>
                      ({menuData[category].length})
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                {activeCategory}
              </h2>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {filteredProducts.length} ürün bulundu
              </p>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((item) => (
                  <div
                    key={item.id}
                    className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700' 
                        : 'bg-white border-[#e8e2d9]'  // Kirli beyaz border
                    }`}
                  >
                    <div className="p-6">
                      <div className="mb-2">
                        <h3 className="text-xl font-bold text-red-600">  {/* Kırmızı başlık */}
                          {item.name}
                        </h3>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-red-600">  {/* Kırmızı fiyat */}
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={`text-center py-12 rounded-2xl border-2 border-dashed ${
                darkMode ? 'border-gray-700 text-gray-400' : 'border-[#e8e2d9] text-gray-500'  // Kirli beyaz border
              }`}>
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">
                  "{searchTerm}" araması için sonuç bulunamadı.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className={`mt-16 border-t transition-all duration-300 ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-[#e8e2d9]'  // Kirli beyaz border
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat className="w-6 h-6 text-red-600" />  {/* Kırmızı ikon */}
            <span className="font-bold text-lg">Gönül Dağı Et Restaurant</span>
          </div>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Lezzet dolu anlar için bize bekleriz. © 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
