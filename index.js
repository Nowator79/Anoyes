import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import cors from "cors";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: '*',
	}
});

app.get('/', (req, res) => {
	res.sendFile(__dirname+"/html/index.html");
});
io.on("connection", (socket) => {

});

httpServer.listen(4000);