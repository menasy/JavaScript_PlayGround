import "./App.css";
import Palette from "./components/Palette";
import {init, subScribe} from "./client/client";
import { useEffect, useState } from "react";

function App() {
	useEffect(() =>{
		init();
		subScribe((color) => setActiveColor(color));
	},[])
	const [activeColor, setActiveColor] = useState("#c7cdd9ff");
  return (
    <div style={{backgroundColor:`${activeColor}`}}>
     	<Palette activeColor={activeColor} />
    </div>
  );
}	

export default App;
