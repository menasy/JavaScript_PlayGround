const io = require("socket.io-client");

let socket;
const init = () =>{
	if (!socket)
	{
		socket = io("http://localhost:3001");
		socket.on("connect",()=> {
    });
	}
}

const sendMessage = (msg) =>{
	if (!socket || !socket.connected)
		init();
	socket.emit("message",msg)
};

const takeMessages = (cb) => {
	socket.off("receive");
	socket.on("receive",(message) =>{
	cb(message)
	});
}
const takeId = ()=>{
	return (socket.id);
}

export {init, sendMessage, takeMessages, takeId};