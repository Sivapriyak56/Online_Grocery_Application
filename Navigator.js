import React, { Component } from 'react'
import {Link} from 'react-route-dom'

 class Navigator extends Component {
  render() {
    return (
      <div>
        <nav>
            <Link to="Home"> <li>Home</li></Link>
           <Link to ="Contact"><li>Contact</li></Link>
           <Link to ="About"><li>About</li></Link>
          
        </nav>
      </div>
    )
  }
}

export default Navigator;
