import React from 'react';
import style from './Footer.module.css';
import { NavLink } from 'react-router-dom';

const Footer = () =>
    (
        <section className={style.Footer}>
            <ul>
                <li><NavLink
                    to="/">About Us</NavLink></li>
                <li><NavLink
                    to="/contact-us">Contact Us</NavLink></li>
                <li ><NavLink
                    to="/">Privacy Policy</NavLink></li>
                <li ><NavLink
                    to="/">Terms of Use</NavLink></li>
            </ul>
        </section>
    );

export default Footer;

