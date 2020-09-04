import React from "react";

import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <div className = "Links">
            <nav>
                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>

                    <li>
                        <Link to = "/Restaurants">Restaurants</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}