
// import {React, Component} from 'react';
// import './Style.css';
// import milk1 from './Images/milk1.jpg';
// import dairy from './Images/dairy.jpg';
// import cake1 from './Images/cake1.jpg';
// import cake2 from './Images/cake2.jpg';
// class Western extends Component{
   
//         render(){
//          return(
//             <div>
//                <br/>
//                <h1>
//                <div class="header1">FRESHO!</div>
//                <center><div class="header2">Bakery,cakes&Dairy</div></center></h1>
//                <div className='flex'>
//                   <div className='cont'>
//                <img className='abu' src={milk1} alt="doll1" title='Apple' width="auto" height="250px"/>
//       <p>Apple Red Delicious</p><p style={{marginLeft:"110px"}}>500g | 1 kg</p>
//         <div className="flex" style={{marginLeft:"35px"}}><div className="Mrp">MRP 200rs</div><div align="center"> <button className="btns" onclick="AddToCart(4681,1,0,0,0,4681,Apple Fuji - 500 g,this)">ADD</button></div> 	</div></div>


//         <div className='cont'>
//                <img className='abu' src={dairy} alt="doll1" title='Apple' width="auto" height="250px"/>
//       <p>Apple Red Delicious</p><p style={{marginLeft:"110px"}}>500g | 1 kg</p>
//         <div className="flex" style={{marginLeft:"35px"}}><div className="Mrp">MRP 200rs</div><div align="center"> <button className="btns" onclick="AddToCart(4681,1,0,0,0,4681,Apple Fuji - 500 g,this)">ADD</button></div> 	</div></div>

//                <div className='cont'>
//                <img className='abu' src={cake1} alt="doll1" title='Apple' width="auto" height="250px"/>
//       <p>Apple Red Delicious</p><p style={{marginLeft:"110px"}}>500g | 1 kg</p>
//         <div className="flex" style={{marginLeft:"35px"}}><div className="Mrp">MRP 200rs</div><div align="center"> <button className="btns" onclick="AddToCart(4681,1,0,0,0,4681,Apple Fuji - 500 g,this)">ADD</button></div> 	</div></div>
//         <div className='cont'>
//                <img className='abu' src={cake2} alt="doll1" title='Apple' width="auto" height="250px"/>
//       <p>Apple Red Delicious</p><p style={{marginLeft:"110px"}}>500g | 1 kg</p>
//         <div className="flex" style={{marginLeft:"35px"}}><div className="Mrp">MRP 200rs</div><div align="center"> <button className="btns" onclick="AddToCart(4681,1,0,0,0,4681,Apple Fuji - 500 g,this)">ADD</button></div> 	</div></div>


//             </div>
//             </div>
         
//             // <h1>I am the Doll , I am the Doll </h1>
//          )         
      
//    }
// }
// export default Western;

import './Css.css';
import cake from './Cake';
import React,{useContext} from 'react';
import { Cartcontext } from './context/Context';
import './Style.css';

import *  as Icons from  'react-icons/fa'
function Western(){
   const GlobalState = useContext(Cartcontext);
   console.log(GlobalState);
   const dispatch=GlobalState.dispatch;
   const ProductItems = cake.map((item)=>
                  <div className='flex' key={item.id}>
                  <div className='cont'>
                     <img className='abu' src={item.thump} width="auto" height="250px"/>
                     <p>{item.product_name}</p><p style={{marginLeft:"110px"}}>{item.qnty}</p>
         <div className="flex" style={{margiLeft:"35px"}}><div className="Mrp">{item.currency}</div><div align="center"> <button className="btns" onClick={()=>dispatch({type:'ADD',payload:item})}><Icons.FaShoppingCart/>ADD</button></div> 	</div></div>
                     </div>
      
                 
   )
   return(
      
     
      <div className='flex'>
            {ProductItems}
         </div>
   )
}

export default Western;