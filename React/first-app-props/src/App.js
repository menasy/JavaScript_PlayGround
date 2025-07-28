import './App.css';
import User from './Components/User';
import Login from './Components/Login';
import { useState } from 'react';

const startingBenfica =[
	"Dominik Livakovic",
	"Mert Müldür Çağlar",
	"Söyüncü, Jayden",
	"Oosterwolde", "Archie Brown",
	"Sofyan Amrabat",
	"Fred Santos", 
	"İrfan Can Kahveci", 
	"Sebastian Szymanski", 
	"Oğuz Aydın", 
	"Youssef En-Nesyri"];

function App() {
	const [isTrue, setIsTrue] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
		{isTrue? (
			<User 
			name= "İrfan Can" surname = "Kahveci"
			number = {17} isaPlay = {true} teamPlayers = {startingBenfica}
		/>
		):  <Login loginCheck={setIsTrue} ></Login>}
		
      </header>
    </div>
  );
}

export default App;
