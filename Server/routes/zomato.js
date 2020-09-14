require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const zomato = require("zomato-api");
const Zomato_APIKEY = `272bae557b31afdb9c6309157bbe91d4`;


/* extracts the location_details endpoint from the zomato api and hosts it 
 * in your localhost or in your window.location.hostname as a service
 * for you to use it in your client side application
*/

router.get('/location_details/:id/city', async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const id = req.params.id;
  const url = `https://developers.zomato.com/api/v2.1/location_details?entity_id=${id}&entity_type=city`;
  const getData = async () => {
      return await axios.get(url, {
        headers: {
          'user-key': Zomato_APIKEY
        }
      });
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
    return data;
})



module.exports = router;
