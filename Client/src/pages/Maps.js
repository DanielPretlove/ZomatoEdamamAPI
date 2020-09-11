import React, { useState } from "react";
import {GoogleMap, LoadScript} from "@react-google-maps/api";
import { useParams, useHistory } from "react-router-dom";

//MOBX
import {toJS} from 'mobx';
import { observer } from "mobx-react";

async function getRestaruantMapFromAPI(name, city) {
  
  const url = `http://localhost:3000/place/${name} in ${city}`;

  let restaurant = await fetch(url, {
      method: 'GET',
      headers: {
          'Accept': 'application/json'
      }
  })
      .then(res => res.json())
      .then(response => {
          return response
      })

  console.log(restaurant);

  return restaurant;
}
const Maps = observer((props) => {
  const { location } = useParams();
  const history = useHistory();

    const map_body = [
        {
          headerName: "Name",
          field: "name",
          sortable: true,
          flex: 1,
        },

        {
          headerName: "Latitude",
          field: "latitude",
          sortable: true,
          flex: 1,
        },

        {
          headerName: "Longitude",
          field: "longitude",
          sortable: true,
          flex: 1,
        },
    
        {
          headerName: "Address",
          field: "address",
          sortable: true,
          flex: 1,
        },
        {
          headerName: "City",
          field: "city",
          sortable: true,
          flex: 1,
        },
      ];
      const selectedRestaurants = toJS(props.store.restaurants.best_rated_restaurant)?.filter(r => r.restaurant.id === history.location.state.resId);
      const selectedRestaurant = Array.isArray(selectedRestaurants) ? selectedRestaurants[0].restaurant : undefined;
    
    return (
        <div className = "GoogleMaps">

            <h2>{selectedRestaurant ? selectedRestaurant.name + " Coordinates": "No Data"}</h2>
        </div>
    )
});

export default Maps;