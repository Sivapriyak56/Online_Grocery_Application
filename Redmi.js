import React, { Component } from 'react'
import './Style.css';
import redmi from './Images/redmi.png';
import phone1 from './Images/phone1.png';
// import doll2 from './Images/doll2.jpg';
// import doll3 from './Images/doll3.png';
export class Redmi extends Component {
    render(){
        return(
           <div className="doll">
              <img src={redmi} alt="redmi"  height="250px"/>
              <img src={phone1} alt="phone1"  height="250px"/>
              {/* <img src={doll2} alt="Doll2"  height="250px"/>
              <img src={doll3} alt="Doll3"  height="250px"/> */}
           </div>
           // <h1>I am the Doll , I am the Doll </h1>
        )         
     
  }
}
  
       
            
export default Redmi;
