const { Router } = require("express");
const { Op } = require("sequelize");
const City = require("../models").city;
const auth = require("../auth/middleware");
const router = new Router();

router.get("/", async (req, res) => {
  try {
    const allCities = await City.findAll();
    res.status(200).json(allCities);
  }
  catch (e) {
    console.log('error: ', e);
  }
});

router.get("/:country/:continent/:population/:price", async (req, res) => {
  try {
    const { country, continent, population, price } = req.params;
    
    let filteredCities;
    if(country !== "all" && continent === "all") {
        filteredCities = await City.findAll({
          where: { 
            country: country, 
            population: { [Op.gte]: population },
            price: { [Op.lte]: price }
          }
        });
    } else if(country === "all" && continent !== "all") {
        filteredCities = await City.findAll({
          where: { 
            continent: continent,
            population: { [Op.gte]: population },
            price: { [Op.lte]: price }
          }
        });
    } else if(country === "all" && continent === "all") {
        filteredCities = await City.findAll({
          where: {
            population: { [Op.gte]: population },
            price: { [Op.lte]: price }
          }
        })
    } else {
        filteredCities = await City.findAll({
          where: { 
            continent: continent,
            country: country,
            population: { [Op.gte]: population },
            price: { [Op.lte]: price }
          }
        });
    } 
    return res.status(200).json(filteredCities);
  }
  catch (e) {
    console.log('error: ', e);
  }
})


router.get("/:id", async (req, res) => {
  try {
    const city = await City.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(city);
  }
  catch (e) {
    console.log('error: ', e)
  }
});

//Post add a City


router.post("/", auth, async (req, res) => {
  try {
    const newCity = await City.create(req.body);
    console.log(newCity.dataValues);
    res.status(201).send({ message: "Add a City", city: newCity });
  }
  catch (error) {
    console.log('error: ', error);
  }
});

module.exports = router;
