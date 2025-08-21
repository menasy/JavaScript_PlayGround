const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors());
const fenerbahce2025 = [
  "Livakovic",
  "İrfan Can",
  "Tarık",
  "Engin",
  "Škriniar",
  "Yusuf",
  "Diego Carlos",
  "Çağlar",
  "Djiku",
  "Becão",
  "Yiğit",
  "Omar",
  "Oosterwolde",
  "Archie",
  "Levent",
  "Semedo",
  "Mert Müldür",
  "Mimovic",
  "Amrabat",
  "İsmail",
  "Bartuğ",
  "Fred",
  "Aziz",
  "Szymański",
  "Talisca",
  "Mert Hakan",
  "Oğuz",
  "Cengiz",
  "İrfan Kahveci",
  "Emre",
  "En-Nesyri",
  "Duran",
  "Arda"
];
let playerIndex = 0;

const server = http.createServer(app);
const io = new Server(server,{
  	cors: {
    	origin: "http://localhost:3000", 
    	methods: ["GET", "POST"]
  }
})


const handleMessage = (socket, message) =>
{	 const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
	io.emit("receive", {
        socketId: socket.id,
		fullMessage: `[${time}]`.padEnd(15) + `${socket.playerName} => ${message}`
    });
}

io.on("connection",(socket) =>
	{
	const playerName = fenerbahce2025[playerIndex % fenerbahce2025.length];
  	playerIndex++;
	socket.playerName = playerName;
	console.log("Client connect: ", socket.playerName);
	socket.on("message",(message) =>{
		handleMessage(socket, message);
	});

	socket.on("disconnect", () => {
		console.log("Client disconencted!")
  });
  socket.on("error", (error) => {
    console.error(`Socket error for ${playerName}:`, error);
  });
})

server.listen(3001, () => console.log("Server is up 🚀 🚀"));

