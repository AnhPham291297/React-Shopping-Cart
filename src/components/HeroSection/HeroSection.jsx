import React from 'react'
import { Link } from 'react-router-dom'
import './hero.css'
import HeroImg from '../../assets/hero-section.jpg'
import { Button } from '@mui/material'


const HeroSection = () => {
  return (
    <>
      <div className="product-center">
        <img src={HeroImg} alt="" />
        <section className="content-prod">
          <h1>Design by AnhPham Zone.</h1>

          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            quaerat, modi doloremque necessitatibus eum dolor nesciunt delectus,
            voluptate blanditiis, obcaecati beatae ab aut ipsa consequuntur
            tempora cumque. Ut quo enim vero odio minus nostrum eveniet,
          </p>

          <Link to="/products">
            <button className="hero-btn">Order Now</button>
          </Link>
        </section>
      </div>
    </>
  )
}

export default HeroSection