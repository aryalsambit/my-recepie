import React from 'react'
import Modal from '../UI/Modal/Modal'
import style from './Hamburger.module.css';
import logo from '../../assets/logo/logo.jpeg';


function Hamburger(props) {
    const showHamburgerMenu = props.showMenu ? <Modal header={props.header} toggleMenu={props.toggleMenu}/> : null;

    return (
        <section className={style.Hamburger}>
            <img className={style.Logo} src={logo} alt="logo" />
            <nav className={style.Icon} onClick={()=>props.toggleMenu()}>
                <div>___</div>
                <div>___</div>
                <div>___</div>
            </nav>
            {showHamburgerMenu}
        </section>
    )
}


export default Hamburger

