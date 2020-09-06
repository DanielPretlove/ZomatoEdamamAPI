import React, { useState, useEffect } from "react";
import {AgGridReact} from 'ag-grid-react';
import { useHistory } from 'react-router-dom';

export default function Maps() {
    const [nutritions, setNutritions] = useState([]);
    const nutrition_body = [
        {
          headerName: "Total Fat",
          field: "name",
          sortable: true,
          flex: 1,
        },
    
        {
          headerName: "Cholesterol",
          field: "symbol",
          sortable: true,
          flex: 1,
        },
        {
          headerName: "Sodium",
          field: "industry",
          sortable: true,
          flex: 1,
        },
        {
            headerName: "Total Carboydrates",
            field: "industry",
            sortable: true,
            flex: 1,
          },
          {
            headerName: "Protein",
            field: "industry",
            sortable: true,
            flex: 1,
          },
      ];
    return (
        <div className = "GoogleMaps">
            <h2>Restaurant Location</h2>
            <div className="ag-theme-balham">
                
            </div>
        </div>
    )
}