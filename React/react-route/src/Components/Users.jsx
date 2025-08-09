import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Routes, Route, useMatch, useLocation} from 'react-router';
import User from './User';
function Users() {
	const [users, setUsers] = useState([]);
	useEffect(() =>{
		axios("https://jsonplaceholder.typicode.com/users")
		.then((res)=> setUsers(res.data))
		.catch((e) => console.log(e));
	},[])
const match = useLocation();
  return (
	<div>
	<h2>USERS</h2>

		{
			users.map((user) => (
			<div key={user.id}>
				<ul>
					<li>
						<Link to= {`/users/${user.id}`}> {user.name}</Link>
					</li> 

				</ul>
			</div>))
		}
	<Routes>
		<Route path=":id" element={<User></User>}></Route>
	</Routes>
	</div>
  );
}
export default Users;