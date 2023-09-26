import React from 'react'
import Navbar from './Navbar'
import Bannerbackground from '../Assets/home-banner-background.png'
import Bannerimage from '../Assets/home-banner-image.png'
import {FiArrowRight} from 'react-icons/fi'

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
             <img src='Bannerbackground' alt=''/>
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading'>
              Your favorite food delivered hot & fresh
            </h1>
            <p className='primary-text'>
              Healty switcher Chefs do all the prep work like peeling, choppping and 
              marinating so you can cook a fresh food
            </p> 
            <button className='secondary-button'>
              Order Now <FiArrowRight/>
              </button> 
          </div>
          <div className='home-image-container'>
            <img src='Bannerimage' alt='' />
          </div>
        </div>
    </div>
  )
}

export default Home