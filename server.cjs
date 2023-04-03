const express = require('express');
const { config } = require('dotenv');
const cors = require('cors');

const users = require('./lib/routes/Users.js')
const interest = require('./lib/routes/Interests.js')
// Loads .env file contents into process.env.
config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors())
app.use(express.json());

// routes
app.use("/users", users);
app.use("/interests", interest)

app.listen(port, () => {
  // perform a database connection when server starts
  // connectToServer(process.env.MONGO_URI);
  console.log(`Server is running on port: ${port}`);
});

module.export = corsOptions;
