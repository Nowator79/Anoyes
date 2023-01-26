import cors from "cors";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

class CoreServer{
	constructor(){

	}
	start(){
		const app = express();
		app.use(cors());

		const httpServer = createServer(app);
		const io = new Server(httpServer, {
			cors: {
			}
		});
		app.get('/', (req, res) => {
			res.sendFile(__dirname+"/html/index.html");
		});
		io.on("connection", (socket) => {
			console.log("connection");
			socket.on("pong", (namespace) => {
				io.emit(
					'pong', 
					{
						"date": new Date().toISOString(),
					}
				);
			});
		});

		httpServer.listen(4001);
	}
}
export default CoreServer;