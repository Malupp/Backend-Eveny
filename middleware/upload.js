import express from 'express';

const router = express.Router();

const createUploadRoute = (upload) => {
  router.post('/', upload.single('file'), (req, res) => {
    res.json({ filename: req.file.filename });
  });

  return router;
}

export default createUploadRoute;
