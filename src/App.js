import React, { useState, useEffect } from 'react';
import { Search, Moon, Sun, ChefHat, Star, Heart, ShoppingCart, IceCream, } from 'lucide-react';

const menuData = {
  Kuzu: [
    { id: 1, name: "Kuzu beyti", price: "140 TL", desc: "Izgara kuzu etinden hazırlanmış lezzetli beyti kebap.", img: "", rating: 4.8, popular: true },
    { id: 2, name: "Kuzu pirzola", price: "160 TL", desc: "Izgara kuzu pirzola, baharatlı ve yumuşak.", img: "", rating: 4.9, popular: true },
    { id: 3, name: "Kuzu kaburga", price: "170 TL", desc: "Fırında pişirilmiş kuzu kaburga, enfes soslarla.", img: "", rating: 4.7 },
    { id: 4, name: "Kuzu külbastı", price: "150 TL", desc: "Izgara kuzu külbastı, özel marinasyonlu.", img: "", rating: 4.6 },
    { id: 5, name: "Kuzu kavurma", price: "135 TL", desc: "Kuzu etinden kavurma, geleneksel lezzet.", img: "", rating: 4.5 },
    { id: 6, name: "Kuzu böbrek", price: "120 TL", desc: "Taze kuzu böbrek, baharatlı pişirilmiş.", img: "", rating: 4.3 },
    { id: 7, name: "Kuzu lokum", price: "155 TL", desc: "Özel kuzu lokumu, ağızda eriyen lezzet.", img: "", rating: 4.8 },
  ],
  Dana: [
    { id: 8, name: "Dana kavurma", price: "130 TL", desc: "Dana etinden kavurma, klasik tat.", img: "", rating: 4.4 },
    { id: 9, name: "Dana antrikot", price: "175 TL", desc: "Izgara dana antrikot, yumuşak ve sulu.", img: "", rating: 4.7, popular: true },
    { id: 10, name: "Dana biftek", price: "180 TL", desc: "Dana biftek, özel marine ile.", img: "", rating: 4.8 },
    { id: 11, name: "Dana pirzola", price: "160 TL", desc: "Izgara dana pirzola, baharatlarla tatlandırılmış.", img: "", rating: 4.6 },
    { id: 12, name: "Dana lokum", price: "155 TL", desc: "Dana lokum, özenle hazırlanmış.", img: "", rating: 4.5 },
    { id: 13, name: "Dana şiş soslu", price: "140 TL", desc: "Sosu ile servis edilen dana şiş.", img: "", rating: 4.6 },
    { id: 14, name: "Dana şiş sossuz", price: "130 TL", desc: "Sossuz klasik dana şiş.", img: "", rating: 4.4 },
    { id: 15, name: "Dana beyti", price: "145 TL", desc: "Dana etinden hazırlanmış beyti kebap.", img: "", rating: 4.7 },
    { id: 16, name: "Dana soslu antrikot", price: "185 TL", desc: "Soslu dana antrikot, özel sos ile.", img: "", rating: 4.8, popular: true },
    { id: 17, name: "Yaprak ciğer", price: "120 TL", desc: "Taze yaprak ciğer, baharatlı.", img: "", rating: 4.2 },
    { id: 18, name: "Ciğer şiş", price: "130 TL", desc: "Izgara ciğer şiş, lezzet garantili.", img: "", rating: 4.3 },
    { id: 19, name: "Dana böbrek", price: "125 TL", desc: "Dana böbrek, baharatlı pişmiş.", img: "", rating: 4.1 },
  ],
  Tavuk: [
    { id: 20, name: "Tavuk kanat", price: "90 TL", desc: "Izgara tavuk kanat, baharatlı.", img: "", rating: 4.5 },
    { id: 21, name: "Tavuk şiş", price: "95 TL", desc: "Izgara tavuk şiş, yumuşak ve lezzetli.", img: "", rating: 4.6, popular: true },
    { id: 22, name: "Tavuk ızgara karışık", price: "110 TL", desc: "Çeşitli tavuk ızgara parçaları.", img: "", rating: 4.4 },
    { id: 23, name: "Tavuk kelebek", price: "100 TL", desc: "Izgara tavuk kelebek, özel soslu.", img: "", rating: 4.5 },
  ],
  Adana: [
    { id: 24, name: "Adana porsiyon", price: "130 TL", desc: "Baharatlı Adana kebap porsiyon.", img: "", rating: 4.7, popular: true },
    { id: 25, name: "Adana dürüm", price: "120 TL", desc: "Lezzetli Adana kebap dürüm.", img: "", rating: 4.6 },
  ],
  Salata: [
    { id: 26, name: "Kaşık salata", price: "30 TL", desc: "Taze sebzelerle hazırlanmış kaşık salata.", img: "", rating: 4.3 },
    { id: 27, name: "Sezar salata", price: "40 TL", desc: "Klasik sezar salata, çıtır kruton ile.", img: "", rating: 4.5 },
    { id: 28, name: "Mevsim salata", price: "35 TL", desc: "Mevsim yeşillikleri ve sebzeleri.", img: "", rating: 4.4 },
    { id: 29, name: "Söğüş", price: "28 TL", desc: "Soğuk mevsim sebzeleri ile hazırlanmış.", img: "", rating: 4.2 },
  ],
  Tatlılar: [
    { id: 30, name: "Kabak tatlısı", price: "40 TL", desc: "Tatlı balkabağından hazırlanan geleneksel tatlı.", img: "", rating: 4.6 },
    { id: 31, name: "Kazan dibi", price: "35 TL", desc: "Kıvamlı ve hafif kazanda pişirilmiş tatlı.", img: "", rating: 4.5 },
    { id: 32, name: "Şambali", price: "30 TL", desc: "İrmik tatlısı, şerbetli ve lezzetli.", img: "", rating: 4.4 },
    { id: 33, name: "Kemalpaşa", price: "30 TL", desc: "Peynir tatlısı, şerbetli ve yumuşak.", img: "", rating: 4.3 },
    { id: 34, name: "Katmer", price: "50 TL", desc: "Fıstık ve kaymak ile yapılan çıtır tatlı.", img: "", rating: 4.8, popular: true },
    { id: 35, name: "Soğuk baklava", price: "55 TL", desc: "Buz gibi servis edilen baklava.", img: "", rating: 4.7 },
    { id: 36, name: "Fıstıklı baklava", price: "60 TL", desc: "Taze fıstıkla yapılmış baklava.", img: "", rating: 4.9, popular: true },
    { id: 37, name: "Cevizli baklava", price: "60 TL", desc: "Cevizli baklava, özel tarif.", img: "", rating: 4.8 },
  ],
  Mezeler: [
    { id: 38, name: "Haydari", price: "30 TL", desc: "Yoğurt ve sarımsakla hazırlanmış klasik meze.", img: "", rating: 4.5 },
    { id: 39, name: "Mantar turşusu", price: "32 TL", desc: "Baharatlı mantar turşusu, nefis bir başlangıç.", img: "", rating: 4.4 },
    { id: 40, name: "Acılı ezme", price: "28 TL", desc: "Domates, biber ve baharatlarla acılı ezme.", img: "", rating: 4.6, popular: true },
    { id: 41, name: "Rus salatası", price: "35 TL", desc: "Bezelye, havuç ve mayonezli karışım.", img: "", rating: 4.3 },
    { id: 42, name: "Havuç tarator", price: "30 TL", desc: "Yoğurtlu ve sarımsaklı rendelenmiş havuç mezesidir.", img: "", rating: 4.4 },
    { id: 43, name: "Acılı Atom", price: "33 TL", desc: "Biberli, sarımsaklı yoğurt ile servis edilen acı atom.", img: "", rating: 4.5 },
    { id: 44, name: "Peynir mezeleri", price: "40 TL", desc: "Karışık peynir tabağı meze.", img: "", rating: 4.4 },
  ],
    Dondurma: [
    { id: 45, name: "Sade Dondurma", price: "25 TL", desc: "Klasik sade dondurma.", img: "", rating: 4.5 },
    { id: 46, name: "Çikolatalı Dondurma", price: "30 TL", desc: "Bol çikolatalı enfes dondurma.", img: "", rating: 4.7 },
    { id: 47, name: "Limonlu Dondurma", price: "28 TL", desc: "Ferahlatıcı limon aromalı dondurma.", img: "", rating: 4.6 },
    { id: 48, name: "Böğürtlenli Dondurma", price: "30 TL", desc: "Taze böğürtlen aromalı dondurma.", img: "", rating: 4.8 },
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
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchTerm.toLowerCase())
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
<IceCream className="w-8 h-8 text-red-600" />
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
