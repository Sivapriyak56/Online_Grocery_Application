import './App.css';
// import ChatBot from 'react-simple-chatbot';
import React, { Component } from 'react';
import './Style.css'
// import {Outlet } from 'react-router-dom';
// import './Style.css';
import {Link,Outlet} from 'react-router-dom';
import Doll from './Doll';
import Phone from './Phone';
import Snack from './Snack';
import Western from './Western';
import Bevarage from './Bevarage';
// import sh5 from './Images/sh5.jpg';
// import './index.css',
// import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
 
// const steps = [
//     {
//         id: '0',
//         message: 'Hey!',
//         trigger: '1',
//     }, {
//         id: '1',
//         message: 'Please write your username',
//         end:true,
//         trigger: '2',
     
//     }, {
//         id: '2',
//         user: true,
//         trigger: '3',
//     }, {
//         id: '3',
//         message: " hi {previousValue}, how can I help you?",

//         trigger: 4,
       
//     }, {
//         id: '4',
//         options: [

//             { value: 1, label: 'View vegitables' },
//             { value: 2, label: 'View Fruits' },
      
         
 
//         ],
//         end: true
//     }
// ];
 
// // Creating our own theme
// const theme = {
//     background: '#C9FF8F',
//     headerBgColor: '#197B22',
//     headerFontSize: '20px',
//     botBubbleColor: '#0F3789',
//     headerFontColor: 'white',
//     botFontColor: 'white',
//     userBubbleColor: '#FF5733',
//     userFontColor: 'white',
// };
 
// // Set some properties of the bot
// const config = {
//     botAvatar: "img.png",
//     floating: true,
// };

//jsx

class Home extends Component {
  setChatClick(){

    // <div className="chat"><ChatBot steps={steps}>Chat Here</ChatBot> </div>
  }
  render(){
   
    return(
      <><div className='hh'>
        
        {/* <div class="dropdown"> */}
        <div className='carousel'>
          {/* Hi {json.user.map((item)=>{
            return(
              item.id==
            )
          })} */}
        </div>
        <div className='banner'>
       
         {/* <div class="dropdown"> */}
        
         <button  onClick={()=>this.setChatClick()}  className='bt'>Shop By Category</button></div><br></br>
         
      
          </div>
      
       <div>
        {/* <div><Options/></div>
        <div>
          <Outlet/>
        </div> */}
        <nav className="navStyle1">
   
   <ul className='navLink'>

       <Link to="/doll"> <button>Fruits & Vegetables</button></Link>   
     <Link to="/phone"> <button>Foodgrains,oil & Masala</button></Link>
     <Link to="/tv"> <button>Bakery,cakes & Dairy</button></Link>
     <Link to="/beverage"> <button>Beverages</button></Link>
     <Link to="/snack"> <button>Snacks & Branded Foods</button></Link>
     <Link to="/tv"> <button>Egg,Meet & Fish</button></Link>

     {/* <button onClick={()=>this.setChatClick()}>Chat here</button> */}
   </ul>
   </nav>
   {/* <div className="chat"><ChatBot steps={steps}>Chat Here</ChatBot> </div> */}
 


        
        <Doll/>
       <Phone/>
      <Western/>
       <Bevarage/>
      <Snack/>
      <Bevarage/>

      </div></>
     
      
  );
      }
}

export default Home;