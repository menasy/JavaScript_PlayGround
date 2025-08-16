import React from 'react';

function DisplayLocation({ locData }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
          <span className="text-2xl">📍</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Lokasyon</h2>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center p-3 bg-gray-50/50 rounded-lg">
          <span className="text-lg mr-3">🏙️</span>
          <div>
            <span className="text-sm text-gray-500 block">Şehir</span>
            <span className="font-semibold text-gray-800">{locData.name || 'Bilinmiyor'}</span>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-gray-50/50 rounded-lg">
          <span className="text-lg mr-3">🗺️</span>
          <div>
            <span className="text-sm text-gray-500 block">Bölge</span>
            <span className="font-semibold text-gray-800">{locData.region || 'Bilinmiyor'}</span>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-gray-50/50 rounded-lg">
          <span className="text-lg mr-3">🌍</span>
          <div>
            <span className="text-sm text-gray-500 block">Ülke</span>
            <span className="font-semibold text-gray-800">{locData.country || 'Bilinmiyor'}</span>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-gray-50/50 rounded-lg">
          <span className="text-lg mr-3">🧭</span>
          <div>
            <span className="text-sm text-gray-500 block">Koordinatlar</span>
            <span className="font-semibold text-gray-800">{locData.lat}, {locData.lon}</span>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-gray-50/50 rounded-lg">
          <span className="text-lg mr-3">⏰</span>
          <div>
            <span className="text-sm text-gray-500 block">Yerel Zaman</span>
            <span className="font-semibold text-gray-800">{locData.localtime || 'Bilinmiyor'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayLocation;