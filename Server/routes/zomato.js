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
    'http://localhost:3001/Restaurants',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))


router.get('/location_details/:id/:city', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");

  const id = req.params.id;
  client.getLocationDetails({ entity_id: id, entity_type: 'city' })
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch(() => {
      return res.status(500).json({
        error: "Unable to obtain a restaurant in city",
      });
    })
})


module.exports = router;
