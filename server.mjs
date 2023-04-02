import express from 'express';
import { config } from 'dotenv';
import { addUserToCollection, addInterestsToCollection, deleteInterestsToCollection, getUsers, getInterests } from './mongo.mjs';
import cors from "cors"

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

// get driver connection
app.get('/test', async (req, res) => {
  const users = await getUsers(process.env.MONGO_URI);
  res.send(JSON.stringify(users));
})

app.get('/interests', async (req, res) => {
  const interest = await getInterests(process.env.MONGO_URI);
  res.send(JSON.stringify(interest))
})

app.post('/api/v1/user', cors(corsOptions), async (req, res) => {
  console.log('request send');
  try {
    const body = req.body;
    console.log(body);
    const result = await addUserToCollection(process.env.MONGO_URI, body);
    res.send(JSON.stringify(result));
  } catch (ex) {
    console.log(ex);
    res.status(500);
  }
});

app.post('/api/v1/interests', cors(corsOptions), async(req, res) => {
  console.log('request send');
  try {
    const body = req.body;
    console.log(body);
    const interests = await addInterestsToCollection(process.env.MONGO_URI, body);
    res.send(interests);
  } catch (ex) {
    console.log(ex);
    res.status(500);
  }
});

app.delete('/api/v1/interests', cors(corsOptions), async(req, res) => {
  console.log('request send');
  try {
    const body = req.body;
    console.log(body);
    const interests = await deleteInterestsToCollection(process.env.MONGO_URI, body);
    res.send(interests);
  } catch (ex) {
    console.log(ex);
    res.status(500);
  }
});

app.listen(port, () => {
  // perform a database connection when server starts
  // connectToServer(process.env.MONGO_URI);
  console.log(`Server is running on port: ${port}`);
});
