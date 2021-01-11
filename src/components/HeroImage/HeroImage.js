import React from 'react'
import Hero from '../../assets/hero/momo-hero.jpg'
import style from './HeroImage.module.css'

const HeroImage = () =>  (
        <section className={style.HeroImage}>
            <img src={Hero} alt="Hero" />
        </section>
    )

export default HeroImage;
