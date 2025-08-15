import React from 'react'
import { useData } from "./context/GetData";

function DisplayWeather() {
	const {data} = useData();

  return (
	<div> Data: {data}</div>
  )
}	

export default DisplayWeather
