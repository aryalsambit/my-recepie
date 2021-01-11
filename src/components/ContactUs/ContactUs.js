import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './ContactUs.module.css'

const ContactUs = () => {
    return (
        <section className={style.ContactUs}>
            <h3>Aryal Kitchen</h3>
            <span>Visit this <NavLink to="/">link</NavLink> for more information about us.</span>
            <p>You can also email us at sambit@gmail.com</p>
        </section>
    )

}
export default ContactUs
