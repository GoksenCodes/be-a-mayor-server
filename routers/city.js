const { Router } = require("express");
const City = require('../models').city;

const router = new Router();

router.get('/', async (req, res) => {
  const allCities = await City.findAll();
  res.status(200).json(allCities);
})

router.get('/:id', async (req, res) => {
  const city = await City.findOne({
    where: { id: req.params.id},
  });
  res.status(200).json(city);
});

module.exports = router;