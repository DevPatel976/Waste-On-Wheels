const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

app.use(cors());
app.use(express.json());

// 🛠️ Adjust the Serial Port Name (Check in Arduino IDE > Tools > Port)
const serialPort = new SerialPort("/dev/ttyUSB0", { baudRate: 9600 }); 
const parser = serialPort.pipe(new Readline({ delimiter: "\n" }));

// Read Data from Arduino USB and Emit via WebSockets
parser.on("data", (data) => {
  const binLevel = parseInt(data.trim(), 10);
  console.log("Received bin level:", binLevel);
  
  io.emit("binData", { level: binLevel }); // Send to frontend
});

io.on("connection", (socket) => {
  console.log("Frontend connected");
  socket.on("disconnect", () => {
    console.log("Frontend disconnected");
  });
});

server.listen(4000, () => {
  console.log("Server running on port 4000");
});
