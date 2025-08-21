import { useEffect, useState } from "react";
import "./App.css";
import Message from "./components/Message";
import MessageBox from "./components/MessageBox";
import { init, takeMessages } from "./backend/client"

function App() {
	const [activeMessages, setActiveMessages] = useState([]);
	useEffect(() => {

		init();
		takeMessages((newMessage) => {
			setActiveMessages(prev => [...prev, newMessage]);
		});
	}, []);
	return (
		<div className="App">
			<h1 className="app-title">Chat App</h1> 
			<MessageBox activeMessages={activeMessages} />
			<Message />
		</div>
	);
}

export default App;
