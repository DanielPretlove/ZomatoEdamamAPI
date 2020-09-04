const express = require('express');
const router = express.Router();

const axios = require('axios');

const Edamam_app_id = `5a10599f`;
const Edaman_app_key = `535fbaebfe18e756667f1fdf54bd291b`;


router.get('/nutrition-data/:ingr', async (req, res) => {
  const ingrident = req.params.ingr;
  const url = `https://api.edamam.com/api/nutrition-data?app_id=${Edamam_app_id}&app_key=${Edaman_app_key}&ingr=${ingrident}`;

  const getNutritionData = async () => {
    try {
      return await axios.get(url);
    } catch (error) {
      console.error(error);
    }
  };

 await getNutritionData()
  .then((response) => {
      if (response.data.calories > 0) {
          return res.status(200).json(response.data);
      }
      else {
        return res.status(500).json({
          error: "unable to obtain an ingredient"
        })
      }
  })
  .catch(() => {
      return res.status(404).json({
          error: 'The specified URL was not found or couldn’t be retrieved'
      });
  })
});

module.exports = router;