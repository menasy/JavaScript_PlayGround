import React, { useEffect, useState, memo} from 'react'
import Select from 'react-select'
import { useCity } from './context/CityContext'
import axios from 'axios';
import customStyles from './CityInputStyles';

function CityInput() {
    const { city, setCity } = useCity();
    const [cities, setCities] = useState([]);
    
    useEffect(() =>{
        axios.get("https://turkiyeapi.dev/api/v1/provinces")
        .then((res) => {
            const formatRes = res.data.data.map((city =>({
                id: city.id,
                value: city.name,
                label: city.name
            })));
            setCities(formatRes);
        })
        .catch(e => console.error("Şehir listesi yüklenemedi:", e));
    },[])
    
    const handleChange = (selectedOption) => {
        setCity(selectedOption.value); 
    };

    return (
        <div className="mb-8">
            <div className="max-w-md mx-auto">
                {city && (
                    <div className="mb-4 text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            🌍 Seçili Şehir: {city}
                        </span>
                    </div>
                )}
                
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                        📍 Şehir Seçin
                    </label>
                    <Select 
                        options={cities} 
                        value={cities.find(option => option.value === city)} 
                        onChange={handleChange} 
                        placeholder="Şehir seçin veya arayın..."
                        isSearchable
                        styles={customStyles}
                        noOptionsMessage={() => "Sonuç bulunamadı"}
                        loadingMessage={() => "Yükleniyor..."}
                    />
                </div>
            </div>
        </div>
    )
}

export default memo(CityInput);