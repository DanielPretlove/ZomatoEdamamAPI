import React, { useState } from "react";
import {getRestaurantsFromAPI} from "./Restaurant";
import {GoogleMap, LoadScript} from "@react-google-maps/api";


export function Map_Data(props) {
  const [mapData, SetMapData] = useState("");

  return(
    <div className = "MapData">
      <h2>{props.getRestaurantsFromAPI} Location</h2>
    </div>
  )
}

export default function Maps() {
  const [id, setID] = useState("");
  const {maps} = getRestaurantsFromAPI(id);

    const map_body = [
        {
          headerName: "Name",
          field: "name",
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
    return (
        <div className = "GoogleMaps">
            <Map_Data />
            
        </div>
    )
}