// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);



import UserHandlers from "./handlers/userHandlers.js";
import Database from "./db/dataBase.js";
import CoreServer from "./server/core.js";

var server = new CoreServer();
server.start();