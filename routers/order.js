const { Router } = require("express");
const Order = require("../models").order;
const Orderitem = require("../models").orderitem;
const auth = require("../auth/middleware");
const router = new Router();

router.get("/:userId", auth, async (req, res) => {
  const userId = req.params.id;
  try {
    const allOrders = await Order.findAll({
      where: (userId = userId),
      include: [Orderitem]
    });
    res.status(200).json(allOrders);
  } catch (e) {
    console.log("error: ", e);
  }
});

router.post("/", auth, async (req, res, next) => {
  try {
    const cityId = req.body;
    const newOrder = await Order.create(cityId);
    res.json(newOrder);
  } catch (e) {
    next(e);
  }
});
