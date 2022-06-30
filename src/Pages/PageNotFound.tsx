import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div style={{ display: 'flex', flexDirection: "column" }}>
            Page not Found !

            <NavLink to="/"> Go to Home</NavLink>
        </div>
    )
}

export default PageNotFound
