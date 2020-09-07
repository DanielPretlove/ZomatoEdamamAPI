import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div className="Error">
            <nav>
                <ul>
                    <li>
                        <Link to="/Restaurants">An error has occured click here to return to restaurant</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}