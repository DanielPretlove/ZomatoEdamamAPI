const express = require('express');
const router = express.Router();
const axios = require('axios');
const cors = require('cors');

const GoogleMapsAPI = `AIzaSyDb1D4RL292JnliF9H5BfR7TxTtN1XZIxo`;




router.get('/place/:query', async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  const query = req.params.query;

  const url = `https://maps.googleapis.com/maps/api/js?query=${query}&key={GoogleMapsAPI}`

  const getPlaceData = async () => {
    try {
      return await axios.get(url);
    }
    catch (error) {
      console.error(error);
    }
  };

  await getPlaceData()
    .then((response) => {
      return res.status(200).json(response.data);
    })
    .catch((err) => {
      return res.status(500).json({
        error: 'The specified URL was not found or couldn’t be retrieved'
      });
    })
})

module.exports = router;