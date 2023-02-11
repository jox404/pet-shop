import http from "http";
import app from "./src/app.js";

const port = 9000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running in port${port}`);
});
