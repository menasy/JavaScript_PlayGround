import '../App.css'
function User(props){
	return(
		<>
			<h1 style={{backgroundColor : "yellow", color: "blue"}}>FenerBahçe Captain And Their Teammate</h1>
		<div className='UserList'>
				<div className="left">
				<header>
					<h2> Captain Information </h2>
				</header>
				<ul>
					<li>Name: {props.name}</li>
					<li>Surname: {props.surname}</li>
					<li>Jersey Number: {props.number}</li>
				</ul>
			</div>
			<div className='right'>
				<h2>Teammate</h2>
				<ol>
					{props.teamPlayers.map((item, index) => <li key= {index}>{item}</li>)}
				</ol>
			</div>
		</div>
		</>
	)
}
export default User