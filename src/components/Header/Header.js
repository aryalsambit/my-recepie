import React from 'react'
import style from './Header.module.css';
import logo from '../../assets/logo/logo.jpeg';
import {NavLink} from 'react-router-dom';


function Header(props) {
    const eachNavLink = props.header.map(eachNavItem => (
        <li key={eachNavItem.id}>
            <NavLink to={eachNavItem.to} activeClassName="Decoration">{eachNavItem.name}</NavLink>
        </li>
    ));
    return (
        <section className={style.Header}>
            <img className={style.Logo} src={logo} alt="logo" />
            <nav>
                <ul>
                    {eachNavLink}
                </ul>
            </nav>
        </section>
    )
}


export default Header

