let socket = io();

/*socket.on("connect", function () {});

socket.on("diconnect", function () {});*/

socket.on("newMessage", function (msg) {
  console.log(msg);
});

socket.emit("createMessage", { from: "John", text: "testing" });
