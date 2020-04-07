const { Router } = require("express");
const City = require("../models").city;

const router = new Router();

router.get("/", async (req, res) => {
  const allCities = await City.findAll();
  res.status(200).json(allCities);
});

router.get("/:id", async (req, res) => {
  const city = await City.findOne({
    where: { id: req.params.id },
  });
  res.status(200).json(city);
});

//Post add a City

router.post("/addacity", auth, async (req, res) => {
  console.log("what is req.body", req.body);
  const newCity = await City.create(req.body);
  console.log(newCity.dataValues);
  res.status(201).send({ message: "Add a City", city: newCity });
});

module.exports = router;
