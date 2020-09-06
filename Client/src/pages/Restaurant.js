import React, { useState } from "react";
import {AgGridReact} from 'ag-grid-react';
import { useHistory } from 'react-router-dom';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import axios from 'axios';
import { data } from "react-dom-factories";

async function getRestaurantsFromAPI(id) {
    
    const url = `http://localhost:3000/location_details/${id}/city`;  

    let restaurant = await axios.get(url, {
        method: 'GET',
        headers: {
            Accept: "application/json",
        },
    })
    .then((res) => res.data)
    .then((Restaurant_data) => {
        return Restaurant_data;
    });
    return restaurant;
}


function Searchbar(props) {
    const [innerSearch, setInnerSearch] = useState("");
    const history = useHistory();
    return (
        <div className = "Search">
            <input
            aria-labelledby="search-button"
            type="text"
            placeholder = "search for city id....."
            name="search"
            id="search"
            value={innerSearch}
            onChange={(e) => {
                setInnerSearch(e.target.value);
            }}
            />
            <button onClick = {async (e) => {
               if(innerSearch !== "") {
                await props.onSearch(innerSearch);
               }
            }}>Search</button>
            <button onClick = {(e) => {
                setInnerSearch("");
            }}>Clear</button>
        </div>
        
    )
}

export default function Restaurant() {
    const [restaurant, setRestaruant] = useState("");
    const [error , setError] = useState("");

    const restaurants_body = [
        {
            headerName: "Name",
            field: data.best_rated_restaurant.name,
            sortable: true,
            flex: 1,
        },
        {
            headerName: "Latitude",
            field: "latitude",
            flex: 1,
        },

        {
            headerName: "Longitude",
            field: "longitude",
            flex: 1,
        },

        {
            headerName: "Address",
            field: "address",
            flex: 1,
        },

        {
            headerName: "City",
            field: "city",
            flex: 1,
        },
      ];



      if(error) {
          return (
              <div className = "Error">
                  <h2>{error.message}</h2>
              </div>
          )
      }

    return (
        <div className = "Restaurants">
            <h2>Search for restaurants by location id</h2>
            <Searchbar
        /* returns a promise of id, from the API being fetched*/
        onSearch={async (id) => {
          /* awaits for the id data to be called */
          let restaurants_data = await getRestaurantsFromAPI(id).catch((e) =>
             setError(e)
          );
          /* error handling conditions */
          if (id === "") {
            setError(
              "The ID is empty"
            );
          } else if (restaurant) {
            setError(
              "The id entry does not exists"
            );
          } else {
            setRestaruant(restaurants_data)
            console.log(restaurants_data);
          }
        }}
      />
            <h2>{JSON.stringify(restaurant)}</h2>
            <h2>List of Restaurants</h2>
            <div className="ag-theme-balham">
                <AgGridReact 
                    suppressLoadingOverlay={true}
                    columnDefs={restaurants_body}
                    rowData={[restaurant]}
                    pagination={true}
                    paginationPageSize={50}
                />
            </div>
        </div>
    )
}