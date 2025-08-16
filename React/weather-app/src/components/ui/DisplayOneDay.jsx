import React from 'react';

function DisplayOneDay({ oneDayData, isToday = false }) {
  const { date, day, hour } = oneDayData;
  // Tarihi gün ismine çevir
  const dayName = new Date(date).toLocaleDateString('tr-TR', { weekday: 'long' });
  const formattedDate = new Date(date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' });

  // Bugünkü kart için özel stil
  const cardClasses = isToday 
    ? "bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-2xl shadow-xl border-2 border-blue-300 p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
    : "bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300";

  const innerBgClasses = isToday
    ? "bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4"
    : "bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 mb-4";

  const textColorClasses = isToday ? "text-white" : "text-gray-800";
  const lightTextClasses = isToday ? "text-blue-100" : "text-gray-500";
  const infoTextClasses = isToday ? "text-blue-100" : "text-gray-600";

  return (
    <div className={cardClasses}>
      {isToday && (
        <div className="flex items-center justify-center mb-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-400 text-yellow-900 text-sm font-bold">
            ⭐ BUGÜN
          </div>
        </div>
      )}
      
      {/* Günlük Özet */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className={`text-xl font-bold ${textColorClasses} capitalize`}>{dayName}</h2>
            <p className={`text-sm ${lightTextClasses}`}>{formattedDate}</p>
          </div>
          <div className="flex items-center">
            <img
              src={day.condition.icon}
              alt={day.condition.text}
              className="w-16 h-16"
            />
          </div>
        </div>
        
        <div className={innerBgClasses}>
          <div className="text-center mb-3">
            <p className={`text-lg font-semibold ${textColorClasses}`}>{day.condition.text}</p>
            <div className="flex items-center justify-center space-x-4 mt-2">
              <span className={`text-2xl font-bold ${isToday ? 'text-yellow-300' : 'text-red-500'}`}>{day.maxtemp_c}°</span>
              <span className={`${isToday ? 'text-blue-200' : 'text-gray-400'}`}>/</span>
              <span className={`text-xl font-semibold ${isToday ? 'text-blue-200' : 'text-blue-500'}`}>{day.mintemp_c}°</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center">
              <span className="mr-2">💧</span>
              <span className={infoTextClasses}>Nem: %{day.avghumidity}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">💨</span>
              <span className={infoTextClasses}>Rüzgar: {day.maxwind_kph} km/h</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🌧️</span>
              <span className={infoTextClasses}>Yağış: %{day.daily_chance_of_rain}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">☀️</span>
              <span className={infoTextClasses}>UV: {day.uv}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Saatlik Detaylar */}
      <div>
        <h3 className={`text-lg font-semibold mb-4 flex items-center ${textColorClasses}`}>
          <span className="mr-2">⏰</span>
          Saatlik Tahmin
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-64 overflow-y-auto custom-scrollbar">
          {hour.map((hourData, index) => {
            const time = hourData.time.split(' ')[1];
            const isNight = parseInt(time.split(':')[0]) >= 18 || parseInt(time.split(':')[0]) <= 6;
            
            return (
              <div
                key={index}
                className={`flex flex-col items-center p-3 rounded-lg border transition-all duration-200 hover:scale-105 ${
                  isToday 
                    ? 'bg-white/10 backdrop-blur-sm border-white/20 text-white' 
                    : isNight 
                      ? 'bg-gradient-to-br from-indigo-900/10 to-purple-900/10 border-indigo-200' 
                      : 'bg-gradient-to-br from-yellow-50 to-orange-50 border-orange-200'
                }`}
              >
                <p className={`text-sm font-medium mb-1 ${isToday ? 'text-white' : 'text-gray-800'}`}>{time}</p>
                <img
                  src={hourData.condition.icon}
                  alt={hourData.condition.text}
                  className="w-8 h-8 mb-1"
                />
                <p className={`text-lg font-bold mb-1 ${isToday ? 'text-white' : 'text-gray-800'}`}>{hourData.temp_c}°</p>
                <p className={`text-xs text-center leading-tight ${isToday ? 'text-blue-100' : 'text-gray-500'}`}>{hourData.condition.text}</p>
                <div className={`flex items-center mt-1 text-xs ${isToday ? 'text-blue-100' : 'text-gray-500'}`}>
                  <span className="mr-1">💧</span>
                  <span>{hourData.humidity}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}

export default DisplayOneDay;