import { Router } from 'express';
import cors from "cors"
import { corsOptions } from '../../server.cjs';
import { addInterestsToCollection, deleteInterestsToCollection, getInterests } from '../../mongo.mjs';

const router = Router()

router.get('/', async (req, res) => {
    const interest = await getInterests(process.env.MONGO_URI);
    res.send(JSON.stringify(interest))
})

router.post('/api/v1/interests', cors(corsOptions), async (req, res) => {
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

router.delete('/api/v1/interests', cors(corsOptions), async (req, res) => {
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

module.exports = router;
