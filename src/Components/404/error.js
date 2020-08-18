import React from "react"
import { useLocation } from 'react-router-dom'

function Error() {
    let location = useLocation();

    return (
        <div>
            <h1>Error 404</h1>
            <h3>No route found for <code>{location.pathname}</code></h3>
        </div>
    )
}
export default Error