require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

const Zomato_APIKEY = `272bae557b31afdb9c6309157bbe91d4`;

router.get('/location_details/:id/city', async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");

  const id = req.params.id;
  const url = `https://developers.zomato.com/api/v2.1/location_details?entity_id=${id}&entity_type=city`;
  const getData = async () => {
    try {
      return await axios.get(url, {
        headers: {
          'user-key': Zomato_APIKEY
        }
      });
    } catch(error) {
      console.error(error);
    }
  };

  const data = await getData()
    .then(response => {
      if(response.data) {
        return res.status(200).json(response.data);
      }
    })
    .catch(() => {
      return res.status(403).json({
        error: true,
        message: "Unable to obtain a restaurant in city",
      })
    })
})



module.exports = router;
