import React, { useContext } from 'react';
import style from './nav.module.css';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.navLinks}>
                <Link className={style.navLinkStyle} to="/"><li>Home</li></Link>
                <Link className={style.navLinkStyle} to="/search"><li>Search</li></Link>
                <Link className={style.navLinkStyle} to="/contact"><li>Contact</li></Link>
                <Link className={style.navLinkStyle} to="/about"><li>About</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;