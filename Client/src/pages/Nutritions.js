import React, { useState, useEffect } from "react";
import {AgGridReact} from 'ag-grid-react';
import { useHistory } from 'react-router-dom';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


export default function Nutritions() {
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
        <div className = "Nutritions">
            <h2>Meal Nutritions</h2>
            <div className="ag-theme-balham">
                <AgGridReact 
                    columnDefs={nutrition_body}
                    rowData={nutritions}
                    pagination={true}
                    paginationPageSize={50}
                />
            </div>
        </div>
    )
}