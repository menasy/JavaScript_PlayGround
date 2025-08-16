import React from 'react'
import { useCity } from './context/CityContext'

function Header() {
  const values = useCity()
  
  return (
    <div className='text-center mb-8'>
      <div className="relative">
        <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2'>
          Hava Durumu
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-10">☀️</div>
        </div>
      </div>
      
      <p className='text-lg text-gray-600 mb-4'>
        Güncel hava koşulları ve tahminler
      </p>
      
      {values.city && (
        <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg border border-white/20">
          <span className="text-2xl mr-2">📍</span>
          <span className='text-xl font-semibold text-gray-800'>
            {values.city} Hava Durumu
          </span>
        </div>
      )}
    </div>
  )
}

export default Header