import express from "express";
import { Server } from "socket.io";
import { createServer } from 'node:http';
import cors  from "cors";

const app = express();
const server = createServer(app); //creating http server
const PORT = process.env.PORT || 3000;

app.use(cors());

//creates a new Socket.IO server instance, which is bound to the http server created above.
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    }
});

app.get('/', (req, res) => {
    res.send("hello world");
});

let socketsConnected = new Set();

io.on("connection", (socket) => {
    console.log(`user connected: ${socket.id}`);
    socketsConnected.add(socket.id);
    io.emit('total-clients', socketsConnected.size);

    socket.on("disconnect", () => {
        console.log(`user ${socket.id} disconnected`);
        socketsConnected.delete(socket.id);
        io.emit('total-clients', socketsConnected.size);
    })
});

server.listen(PORT, () => console.log(`💬 server on port ${PORT}`));