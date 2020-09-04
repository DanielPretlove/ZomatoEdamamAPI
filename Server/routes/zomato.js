require("dotenv").config();
const express = require("express");
const router = express.Router();
const zomato = require("zomato-api");
const cors = require('cors');

const Zomato_APIKEY = `272bae557b31afdb9c6309157bbe91d4`;

const client = zomato({
  userKey: Zomato_APIKEY,
});


router.use(cors({
      origin: [
        'http://localhost:3000',
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }))

router.get("/restaurant/:id", (req, res) => {
  
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  const res_id = req.params.id;
  client
    .getRestaurant({ res_id })
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch(() => {
      return res.status(500).json({
        error: "Unable to obtain a restaurant",
      });
    });
});

router.get("/dailymenu/:id", (req, res) => {
  const res_id = req.params.id;
  client
    .getDailyMenu({ res_id: res_id })
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch(() => {
      return res.status(500).json({
        error: "Unable to obtain a daily menu",
      });
    });
});

module.exports = router;
