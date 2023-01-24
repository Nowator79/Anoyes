console.clear();
console.log("start");
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import { dirname } from 'path';
const __dirname = dirname(__filename);
const port = 5004;

import express from "express";
const app = express();
import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";

const io = new Server(server);

app.get('/', (req, res) => {
	res.sendFile(__dirname +"/html/index.html");
});

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
	socket.on('chat message', (msg) => {
		io.emit('chat message', msg);
		console.log('message: ' + msg);
	});
});

server.listen(port, () => {
  console.log('listening on *:'+port);
});