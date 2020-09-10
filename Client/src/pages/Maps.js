import React, { useState } from "react";
import {getRestaurantsFromAPI} from "./Restaurant";
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
      console.log(toJS(props.store.restraunts).best_rated_restaurant);
    return (
        <div className = "GoogleMaps">

            <h2>{toJS(props.store.restraunts).popularity}Location</h2>
        </div>
    )
});

export default Maps;