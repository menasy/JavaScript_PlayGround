import { useState } from 'react'
import './contact.css';
import List from '../List/index';


function Contact() {
	const [name,setName] = useState('');
	const [number,setNumber] = useState('');
	const [contacts,setContacts] = useState([]);
	const [filter,setFilter] = useState('');
	const matches = contacts.filter(
		c =>
			c.name.includes(filter) || c.number.includes(filter)
	)
  return (
	<div>
		<input
			type='text'
			id='filter'
			placeholder='Filter'
			value={filter}
			onChange={(e) =>{
				setFilter(e.target.value);
				}
			}
			></input>
		<List contacts = {filter ? matches : contacts}></List>
		<input
			type='text' 
			id='name'
			placeholder='Name'
			value={name}
			onChange={(e) => setName(e.target.value)}
			></input>
		<br></br>
		<input 
			type='tel' 
			id='phone'
			placeholder='Phone'
			value={number}
			onChange={(e) => setNumber(e.target.value.trim())}
			></input>
		<br></br>
		<button onClick={() =>{
			if (isNaN(number))
				alert('Pelase enter a valid number')
			if (name && number) {
     	 	setContacts([...contacts, { name, number }]);
      		setName('');
      		setNumber('');
   		}
		else
			alert("Invalid value !")
	}}>Add</button>
	</div>
  );
}

export default Contact