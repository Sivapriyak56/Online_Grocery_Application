import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Category extends Component {
  render() {
    return (
      <div className='container'>
        <Link to="doll">
                        <li>Fruits&Vegetables</li>
                      </Link>
                      <Link to="phone">
                        <li>Foodgrins,oil&Masala</li>
                      </Link>
                      <Link to="tv">
                            <li>Bakery,cakes&Dairy</li></Link>
                          <Link to="beverage"><li>Beverages</li></Link>
                          <Link to="snack"><li>Snacks&Branded Foods</li> </Link>
                          <Link to="tv"><li>Egg,Meet&Fish</li></Link>
        
      </div>
    )
  }
}

export default Category
