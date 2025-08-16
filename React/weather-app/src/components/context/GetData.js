import axios from 'axios'
import React, { useEffect, useState, useContext, createContext} from 'react'
import { useCity } from './CityContext'

const BASE_URL = process.env.REACT_APP_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY

function useFetchData()
{
	const {city} = useCity();
	const [data, setData] = useState({});
	useEffect(()=>{
		if (!city || city === "Yükleniyor...")
			return; 
		axios.get(`${BASE_URL}forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts=yes&lang=tr`)
		.then(res => setData(res.data))
		.catch((e) => console.error("Hava durumu verisi alınamadı:", e));
	},[city]);
	return data;
}
const  DataContext = createContext();
const DataProvider = ({children}) =>{
	const data  = useFetchData();

	return(<DataContext.Provider value = {data}> {children} </DataContext.Provider>)
}
const useData = () => useContext(DataContext);
export {useData, DataProvider}