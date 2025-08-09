import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from 'axios'
function User()
{
	const {id} = useParams();
	const [user,setUser] = useState({});
	useEffect(() =>{
		axios(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then((res) => setUser(res.data))
		.catch((e) => console.log("Axios user error: ", e));
	},[id])
	return(
		<div>
			<h2>User Detail</h2>
			<h3>Name: {user.name}</h3>
			<p>Id: {user.id} </p>
			<Link to= {`/user/${(parseInt(id) + 1)}`}>
				Next User {parseInt(id) + 1}
			</Link>
		</div>
	);
}
export default User;