import { useState } from 'react';


function App() {
const [counter, setCounter] = useState(0);
  return(
	<div style={{textAlign: "center", marginTop: "10%" }}>
		<h1 style={{fontSize:"7.5rem"}}> {<b>{counter}</b>}</h1>
			<button style={{fontSize: "2rem"}}
			onClick={()=>{
			counter ? setCounter(counter -1): setCounter(counter);
			}}>Decrease</button>
			<button style={{fontSize: "2rem", marginLeft : "2%"}}
			 onClick={()=>{
				setCounter(counter + 1);
			}}>Increase</button>
				</div>
  );
}

export default App;
