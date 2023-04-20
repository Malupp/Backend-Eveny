import { Router } from 'express';
import cors from 'cors';
import { corsOptions } from './corsOption.js';
import { addEventToCollection, getEvents, getEventById } from '../../mongo.mjs';

const router = Router()

router.get('/', async (req, res) => {
    const events = await getEvents(process.env.MONGO_URI);
    res.send(JSON.stringify(events))
});

router.get('/:id', async (req, res) => {
    const eventId = req.params.id;
    const event = await getEventById(eventId, process.env.MONGO_URI);
    res.send(JSON.stringify(event));
});

router.post('/api/v1/events', cors(corsOptions), async (req, res) => {
    console.log('request send');
    try {
        const body = req.body;
        console.log(body);
        const result = await addEventToCollection(process.env.MONGO_URI, body);
        res.send(JSON.stringify(result));
    } catch (ex) {
        console.log(ex);
        res.status(500);
    }
});

export { router as eventsRouter };