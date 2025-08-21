const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // React app’in URL’si
    methods: ["GET", "POST"]
  }
});

app.get("/", (req, res) => {
  res.send("hello");
});

let lastColor = "#c7cdd9ff";

io.on("connection", (socket) => {
  console.log("bir kullanıcı bağlandı!", socket.id);


  socket.on("newColor", (color) => {
    console.log(color);

    lastColor = color;
    io.emit("receive", color);
  });

  socket.on("disconnect", () => {
    console.log("Bir kullanıcı ayrıldı.");
  });
});

server.listen(3001, () => console.log("Server is up 🚀 🚀"));
