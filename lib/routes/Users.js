import { Router } from 'express';
import cors from 'cors';
import { corsOptions } from './corsOption.js';
import { addUserToCollection, getUsers } from '../../mongo.mjs';

const router = Router()

router.get('/', async (req, res) => {
    const users = await getUsers(process.env.MONGO_URI);
    res.send(JSON.stringify(users));
})

router.post('/api/v1/user', cors(corsOptions), async (req, res) => {
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

export { router as usersRouter };
