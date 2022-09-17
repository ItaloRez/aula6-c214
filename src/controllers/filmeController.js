const express = require('express');
const Filme = require('../models/filme');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const filme = await Filme.create(req.body);

    return res.send({ filme });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

router.get('/', async (req, res) => {
  try {
    const filmes = await Filme.find();
    return res.send({ filmes });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

router.get('/:filmeId', async (req, res) => {
  try {
    const filme = await Filme.findById(req.params.filmeId);
    return res.send({ filme });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

router.put('/:filmeId', async (req, res) => {
  try {
    const filme = await Filme.findByIdAndUpdate(req.params.filmeId, req.body, {
      new: true,
    });
    return res.send({ filme });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

router.delete('/:filmeId', async (req, res) => {
  try {
    await Filme.findByIdAndRemove(req.params.filmeId);
    return res.send();
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

module.exports = (app) => app.use('/filmes', router);
