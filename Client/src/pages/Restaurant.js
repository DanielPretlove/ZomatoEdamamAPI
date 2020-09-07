import React, { useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import { useHistory } from 'react-router-dom';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import axios from 'axios';

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
            })
          .catch((err) => {
            if(err.response) {
                console.log(err.response.data);
            }
        })
        return restaurant;
}


function Searchbar(props) {
    const [innerSearch, setInnerSearch] = useState("");
    return (
        <div>
            <div className="Search">
                <input
                    aria-labelledby="search-button"
                    type="text"
                    placeholder="search for city id....."
                    name="search"
                    id="search"
                    value={innerSearch}
                    onChange={(e) => {
                        setInnerSearch(e.target.value);
                    }}
                />
                <button onClick={async () => {
                    if (innerSearch !== "") {
                        await props.onSearch(innerSearch);
                    }
                }}>Search</button>
                <button onClick={() => {
                    if (innerSearch !== "") {
                        setInnerSearch("");
                    }
                }}>Clear</button>
            </div>
        </div>

    )
}

export default function Restaurant() {
    const [restaurant, setRestaruant] = useState({});
    const [error, setError] = useState("");
    const history = useHistory();


    const restaurants_list = restaurant?.best_rated_restaurant?.map((rest) => {
        return rest.restaurant;
    });
    const restaurants_body = [
        {
            headerName: "Restaurant ID",
            field: "id",
            flex: 1,
            sortable: true,
        },

        {
            headerName: "Name",
            field: "name",
            flex: 1,
            sortable: true,
        },
        {
            headerName: "Latitude",
            field: "location.latitude",
            flex: 1,
            sortable: true,
        },

        {
            headerName: "Longitude",
            field: "location.longitude",
            flex: 1,
        },

        {
            headerName: "Address",
            field: "location.address",
            flex: 1,
        },

        {
            headerName: "City",
            field: "location.city",
            flex: 1,
        },
    ];


    if (error) {
        return (
            <div className="Error">
                <h2>{history.push("/Error")}</h2>
            </div>
        )
    }

    return (
        <div className="Restaurants">
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
                        setError("The ID is empty");
                    }

                    else {
                        setRestaruant(restaurants_data)
                    }
                }}
            />
            <h2>List of Restaurants</h2>
            <div className="ag-theme-balham">
                <AgGridReact
                    suppressLoadingOverlay={true}
                    columnDefs={restaurants_body}
                    rowData={restaurants_list}
                    pagination={true}
                    paginationPageSize={50}
                />
            </div>
        </div>
    )
}