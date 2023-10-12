import express from "express";

import Exchange from "../../models/Exchange.js";

const router = express.Router();

router.post("/add", (req, res) => {
  const { exchanger, accountBalance, status } = req.body;
  const newExchange = new Exchange({
    exchanger,
    closeDate: new Date(),
    lastModifiedDate: new Date(),
    accountBalance,
    status,
  });
  newExchange
    .save()
    .then((exchange) => res.json(exchange))
    .catch((err) => console.error(err));
});

router.get("/get", (req, res) => {
  Exchange.find({}).then((exhange) => {
    res.status(200).json(exhange);
  });
});

router.delete("/delete", (req, res) => {
  const id = req.query.id;
  Exchange.deleteOne({ _id: id }).then((exhange) => {
    res.status(201).json({ message: "successfully deleted" });
  });
});

router.put("/update", (req, res) => {
  const id = req.query.id;
  const payload = req.body;
  console.log({ payload, id });
  Exchange.findOneAndUpdate({ _id: id }, payload, { new: true }).then(
    (exchange) =>
      exchange
        .save()
        .then((exchange) => res.json(exchange))
        .catch((err) => console.error(err))
  );
});

export default router;
