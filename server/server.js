const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const generateMessage = require("./utils/message");

const publicPath = path.join(__dirname, "/../public");

const app = express();
app.use(express.static(publicPath));

let server = http.createServer(app);
let io = socketIO(server);

io.on("connection", (socket) => {
  //private session
  socket.emit("newMessage", generateMessage("Admin", "Welcome to the chat!"));

  //everybody except new sessions
  socket.broadcast.emit(
    "newMessage",
    generateMessage("Admin", "A new use has joined us!")
  );

  socket.on("createMessage", (message) => {
    //everybody
    io.emit("newMessage", generateMessage(message.from, message.text));
  });

  //socket.on("disconnect", () => console.log("User disconnected"));
});

app.set("port", process.env.port || 8080);
server.listen(app.get("port"), () => {
  console.log(`Listening on port: ${app.get("port")}`);
});
