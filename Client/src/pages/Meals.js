import React, { useState, useEffect } from "react";
import {AgGridReact} from 'ag-grid-react';
import { useHistory } from 'react-router-dom';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


function Searchbar(props) {
    const [innerSearch, setInnerSearch] = useState("");
    const history = useHistory();
    return (
        <div className = "Search">
            <input
            aria-labelledby="search-button"
            type="text"
            name="search"
            id="search"
            value={innerSearch}
            onChange={(e) => {
                setInnerSearch(e.target.value);
            }}
            />
            <button onClick = {() => history.push("/Nutritions")}>Search</button>
            <button onClick = {(e) => {
                setInnerSearch("");
            }}>Clear</button>
        </div>
    )
}
export default function Meals() {
    const [meals, setMeals] = useState([]);
    const meal_body = [
        {
          headerName: "Dish ID",
          field: "name",
          sortable: true,
          flex: 1,
        },
    
        {
          headerName: "Name",
          field: "symbol",
          sortable: true,
          flex: 1,
        },
        {
          headerName: "Price",
          field: "industry",
          sortable: true,
          flex: 1,
        },
      ];
    return (
        <div className = "Meals">
            <h2>Search for meal to get the ingredients results</h2>
            <Searchbar />
            <h2>List of Meals in restaurant</h2>
            <div className="ag-theme-balham">
                <AgGridReact 
                    columnDefs={meal_body}
                    rowData={meals}
                    pagination={true}
                    paginationPageSize={50}
                />
            </div>
        </div>
    )
}