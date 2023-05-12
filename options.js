import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export class Options extends Component {
  render() {
    return (
      <div>
        <nav className="navStyle1">
   
   <ul className='navLink'>

       <Link to="doll"> <button>Fruits & Vegetables</button></Link>   
     <Link to="phone"> <button>Foodgrains,oil & Masala</button></Link>
     <Link to="tv"> <button>Bakery,cakes & Dairy</button></Link>
     <Link to="beverage"> <button>Beverages</button></Link>
     <Link to="snack"> <button>Snacks & Branded Foods</button></Link>
     <Link to="tv"> <button>Egg,Meet & Fish</button></Link>

   </ul>
   </nav>
      </div>
    )
  }
}

export default Options
