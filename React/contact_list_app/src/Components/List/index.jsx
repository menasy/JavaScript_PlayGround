import React from 'react'
import './index.css'

function List({contacts}) 
{
	console.log("contacts:",contacts);
	console.log("contacts_length 	:",contacts.length);
	const safeContacts = Array.isArray(contacts) ? contacts : [];
  return (
	<div>
		<ul>
		{safeContacts.length > 0 ? safeContacts.map((item,i) => (
			<li key= {i}>{item.name} - {item.number}</li>
		)): <li>No such name or number </li>}
	</ul>
	</div>

  );
}

export default List