import React, { useState } from 'react';
import { Search, Moon, Sun, ChefHat } from 'lucide-react';

// ... menuData ve categories aynı şekilde kalıyor ...

export default function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // ... filteredProducts aynı şekilde kalıyor ...

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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ChefHat className="w-8 h-8 text-red-600" />  {/* Kırmızı ikon */}
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
                    <div className="relative overflow-hidden">
                      <img
                        src={item.img || `https://via.placeholder.com/300x160/FF6B6B/FFFFFF?text=${encodeURIComponent(item.name)}`}  // Kırmızı placeholder
                        alt={item.name}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-2">
                        <h3 className="text-xl font-bold text-red-600">  {/* Kırmızı başlık */}
                          {item.name}
                        </h3>
                      </div>
                      
                      <p className={`mb-4 text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.desc}
                      </p>
                      
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