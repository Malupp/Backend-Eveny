import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { usersRouter } from './lib/routes/Users.js';
import { interestsRouter } from './lib/routes/Interests.js';

// Loads .env file contents into process.env.
config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

// routes
app.use("/users", usersRouter);
app.use("/interests", interestsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

