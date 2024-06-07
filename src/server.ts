// Import the 'express' module
import express from "express";
import pool from "./config/db";
import * as bodyParser from "body-parser";
import routes from "./routes/routes";
import * as consumer from "./queue/receiver/manage/consumer";
// Create an Express application
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

// Set the port number for the server
const port = 3000;

// Define a route for the root path ('/')
app.get("/", (req, res) => {
  // Send a response to the client
  res.send("Hello, TypeScript + Node.js + Express!");
});
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }

  console.log("Connected to MySQL!");
  connection.release();
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});
//queue
consumer.receiveTestMessage();
consumer.receiveTestMessage2();
