import axios from 'axios'
import React, { useEffect, useState, useContext, createContext, Children } from 'react'

const BASE_URL = process.env.REACT_APP_BASE_URL
const API_KEY = process.env.REACT_APP_API_KEY

function useFetchData(cityName = "İstanbul")
{
	const {data, setData} = useState({});
	useEffect(()=>{
		const data = axios(`${BASE_URL}forecast.json?key=${API_KEY}&q=${cityName}&days=7&aqi=yes&alerts=yes&lang=tr`)
		.then(res => setData(res.data))
		.catch((e) => console.log("Axios Error:", e));
		console.log("Data çekildi: ", data);
	},[cityName]);
	return data;
}
const  DataContext = createContext();
const DataProvider = ({children}) =>{
	const {data,setData} = useState(useFetchData());
	const values = {
		data,
		setData,
	}
	return(<DataContext.Provider value = {values}> {children} </DataContext.Provider>)
}
const useData = () => useContext(DataContext);
export {useData, DataProvider}