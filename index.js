// Importing the necessary packages
import express from "express";
import path from "path";
import { fileURLToPath } from "url"; 

// Path in ESM since we do not have __dirname or __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const app = express();

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Get the request and send the html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Receive the submitted name 
app.post("/submit", (req, res) => {
  const name = req.body.name;
  console.log(`Received submission: ${name}`);
  // Display the personalized greeting
  res.send(
    `<h1>Hello ${name}, Your form has ben successfully submitted </h1>`
  );
});

app.listen(PORT, () => {
  console.log(`Server working at PORT ${PORT}`);
});