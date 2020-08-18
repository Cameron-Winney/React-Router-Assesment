import React from "react"
import { Link } from "react-router-dom"

function Navigation(props) {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/welcome/Cameron">Welcome!</Link>
            </li>
        </ul>
    )
}
export default Navigation