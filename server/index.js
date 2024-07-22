const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 4000 });

wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    console.log(`Message received: ${msg}`);
    ws.send(String(msg));
  });
});
