const express = require("express");
const app = express();
const server = require("http").Server(app);
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
require("dotenv").config({ path: "./config.env" });
const connectDb = require("./utilsServer/connectDB");
connectDb();

app.use(express.json()); // this is the body parser
const PORT = process.env.PORT || 3000;

nextApp.prepare().then(() => {
  app.use("/api/signup", require("./api/signup"))
  app.use("/api/auth", require("./api/auth"))
  app.all("*", (req, res) => handle(req, res));
  server.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Server is running on PORT no:- ${PORT}`);
  });
});
