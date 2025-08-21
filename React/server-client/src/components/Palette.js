import React, { act, useState } from 'react'
import { sendColor } from '../client/client';

function Palette({activeColor}) {
	const [color, setColor] = useState(activeColor)
  return (
	<div 
	style={{textAlign:"center"}}>
		<h1>Palette</h1>
		<h3>{color}</h3>
		<div className='Palette'>
					<input 
					type='color' 
					value={activeColor}
					onChange={(e) =>  setColor(e.target.value)}
					/>
			<br></br> 
			<br></br> 
			<button
			onClick={()=>{
				sendColor(color);
			}}
			>Click</button>
			<br></br>
			<br></br> 
		</div>
	</div>
  )
}

export default Palette