import React, { useState } from "react";

export default function Maps() {
    const [maps, setMaps] = useState([]);
    const map_body = [
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