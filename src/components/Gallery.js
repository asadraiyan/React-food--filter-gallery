import React from 'react'
import aloImage from "../assets/aaloo_pakode.jpg"
import Menu from '../Menu'

const Gallery = () => {

  console.log("menu", Menu)
  return (
    <>
      <h1 className='heading'>Order your favourite dish</h1>
      <hr />
      <div className='menutab'>
        <button className='btn'>Breakfast</button>
        <button className='btn'>Lunch</button>
        <button className='btn'>Evening</button>
        <button className='btn'>Dinner</button>
      </div>
      <div className='menu-container'>
        <div className='img'>
          <img src={aloImage} alt="menupic" className='foodImage' />
        </div>
        <div className='menu-item'>
          <h3>Noodles</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <div className='menu-price'>
            <h3>  price: 20₹</h3>
            <button className='order'>Order Now</button>
          </div>
          <p>*Prices may vary on selected date</p>
        </div>
      </div>
    </>
  )
}

export default Gallery
