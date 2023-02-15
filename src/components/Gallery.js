import React, { useState } from 'react'
import Menu from '../Menu'

const Gallery = () => {
  const [items, setItems] = useState(Menu)
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((currentElem) => {
      return currentElem.category === categoryItem
    })
    setItems(updatedItems)
  }

  // console.log("menu", Menu)
  return (
    <>
      <h1 className='heading'>Order your favourite dish</h1>
      <hr />
      <div className='menutab'>
        <button className='btn' onClick={() => setItems(Menu)}>Gallery</button>
        <button className='btn' onClick={() => filterItem("breakfast")}>Breakfast</button>
        <button className='btn' onClick={() => filterItem("lunch")}>Lunch</button>
        <button className='btn' onClick={() => filterItem("evening")}>Evening</button>
        <button className='btn' onClick={() => filterItem("dinner")}>Dinner</button>
      </div>
      <div className="main-container">
        {
          items.map((elem) => {
            const { id, name, image, price } = elem;
            // console.log("elem", elem)
            return (
              <div className='menu-container' key={id}>
                <div className='img'>
                  <img src={image} alt="menupic" className='foodImage' />
                </div>
                <div className='menu-item'>
                  <h3 className='name'>{name}</h3>
                  <p className='content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                  <div className='menu-price'>
                    <h3 className='rate'>  Price : {price}</h3>
                    <button className='order'>Order Now</button>
                  </div>
                  <p className='price'>*Prices may vary on selected date</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Gallery
