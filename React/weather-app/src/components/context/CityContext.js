import { useContext, createContext, useState, useEffect } from 'react'
import axios from 'axios';

function getCityName() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
       
      axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=tr`)
        .then((res) => {
          const data = res.data;
          
          const city = data.address.state || 
                      data.address.province || 
                      data.address.city || 
                      data.address.region ||
                      "Şehir bulunamadı";
          
          resolve(city);
        })
        .catch((err) => {
          reject("Şehir bilgisi alınamadı: " + err);
        });
    }, (err) => {
      reject("Konum alınamadı: " + err.message);
    });
  });
}


const CityContext = createContext()

const CityContextProvider = ({children}) =>{

	const [city, setCity ] = useState("Yükleniyor...");
	
	useEffect(() => {
		getCityName()
  		.then(fetchCity => setCity(fetchCity))
		.catch(err => console.error(err));
	},[]);

	const values = {
		city,
		setCity,
	};
	return(<CityContext.Provider value = {values}>{children}</CityContext.Provider>)
}
const useCity = () => useContext(CityContext);
export {useCity, CityContextProvider};