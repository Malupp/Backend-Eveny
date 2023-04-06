import express from 'express';
import * as fs from 'fs'
import path from 'path';

const router = express.Router();

const createUploadRoute = (upload) => {
  router.post('/', upload.single('file'), (req, res) => {
    res.json({ filename: req.file.filename });
  });

  router.get('/:fileName', (req, res) => {
    const file = fs.readFileSync(`${path.join(path.dirname(import.meta.url), '..', 'uploads', req.params.fileName).replace('file:\\', '')}`)
    res.send(file)
  });

  return router;
}

export default createUploadRoute;
