const io = require("socket.io-client");

let socket;	
export const init = () =>{
	if (socket)
		return;
	socket = io("http://localhost:3001");	
	socket.on("connect", () => {
  	console.log("Servere bağlanıldı:", socket.id);
});
}

export const sendColor = (color) =>{
	socket.emit("newColor", color);
}	

export const subScribe = (callBack) =>{
	socket.on("receive",(color) => callBack(color))
}