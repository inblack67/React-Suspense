import React from 'react'
import { Link } from '@reach/router'

const Nav = () => {
    return (
        <nav className="red">
            <div className="nav-wrapper">
                <div className="container">
                    <a href="#!" className="brand-logo">
                        React Suspense
                    </a>
                    <ul className="right">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                        <Link to='/calculations'>Calculations</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
