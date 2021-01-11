import React from 'react'
import style from './Modal.module.css'
import { NavLink } from 'react-router-dom'

const Modal = (props) => {
    console.log(props);
    const eachNavLink = props.header.map(navlink => (
        <li key={navlink.id}>
            <NavLink to={navlink.to} onClick={()=>props.toggleMenu()}>{navlink.name}</NavLink>
        </li>
    ));
    return (
        <section className={style.Modal}>
            <ul>
                {eachNavLink}
            </ul>
        </section>
    )

};




export default Modal

