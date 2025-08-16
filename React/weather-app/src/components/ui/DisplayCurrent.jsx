import React from 'react';

function DisplayCurrent({ currentData }) {
  const condition = currentData.condition || {};

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
          <span className="text-2xl">🌤️</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Güncel Durum</h2>
      </div>
      
      {/* Ana hava durumu */}
      <div className="flex items-center justify-center mb-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
        <div className="text-center">
          {condition.icon && (
            <img
              src={`https:${condition.icon}`}
              alt={condition.text}
              className="w-20 h-20 mx-auto mb-2"
            />
          )}
          <p className="text-xl font-bold text-gray-800 mb-1">{condition.text || 'Bilinmiyor'}</p>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-3xl font-bold text-blue-600">{currentData.temp_c}°C</span>
            <span className="text-lg text-gray-500">({currentData.temp_f}°F)</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Hissedilen: {currentData.feelslike_c}°C
          </p>
        </div>
      </div>
      
      {/* Detaylı bilgiler */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center p-3 bg-gray-50/50 rounded-lg">
          <span className="text-lg mr-2">💨</span>
          <div className="text-sm">
            <div className="text-gray-500">Rüzgar</div>
            <div className="font-semibold">{currentData.wind_kph} km/h {currentData.wind_dir}</div>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-gray-50/50 rounded-lg">
          <span className="text-lg mr-2">🌡️</span>
          <div className="text-sm">
            <div className="text-gray-500">Basınç</div>
            <div className="font-semibold">{currentData.pressure_mb} mb</div>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-gray-50/50 rounded-lg">
          <span className="text-lg mr-2">💧</span>
          <div className="text-sm">
            <div className="text-gray-500">Nem</div>
            <div className="font-semibold">{currentData.humidity}%</div>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-gray-50/50 rounded-lg">
          <span className="text-lg mr-2">☁️</span>
          <div className="text-sm">
            <div className="text-gray-500">Bulutluluk</div>
            <div className="font-semibold">{currentData.cloud}%</div>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-gray-50/50 rounded-lg">
          <span className="text-lg mr-2">☀️</span>
          <div className="text-sm">
            <div className="text-gray-500">UV İndeksi</div>
            <div className="font-semibold">{currentData.uv}</div>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-gray-50/50 rounded-lg">
          <span className="text-lg mr-2">👁️</span>
          <div className="text-sm">
            <div className="text-gray-500">Görüş</div>
            <div className="font-semibold">{currentData.vis_km} km</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayCurrent;