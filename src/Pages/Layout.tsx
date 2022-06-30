import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <nav>
                <Link to={"/"}> Home</Link> |
                <Link to={"/todosredux"}> Todos Redux</Link> |
                <Link to={"/todoscontext"}> Todos Contex</Link>
            </nav>
            <br />
            <Outlet />
        </div>
    )
}

export default Layout
