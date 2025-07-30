import { useState } from "react"


function InputExample() {
  const [form, setInputValue] = useState({nameInput: "", surName: ""});
const handleInput = (e)=>{
	setInputValue({...form,[e.target.name]: [e.target.value]})
}
  return(
	<div style={{textAlign: "center"}}>
		<p>Name</p>
		<br></br>
		<input name = "nameInput" value={form.nameInput} onChange={handleInput}></input>
		<p>Surname</p>
		<br></br>
		<input  name = "surName" value={form.surName} onChange={handleInput}></input>
		<br></br>
		{form.nameInput} {form.surName}
	</div>
  );
}
export default InputExample