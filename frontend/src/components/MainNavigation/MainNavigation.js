import React from 'react'

import { Link } from 'react-router-dom'
import style from  './MainNavigation.module.css'
const MainNavigation = () => {

 
    return <nav className={style.nav}>
            <h2>Blogger</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/new">Add Blog</Link> </li>
                <li><Link to="#">Login</Link></li>
               
            </ul>
        </nav>
    
}
export default MainNavigation
