// import React, { Component } from 'react'
// import './Style.css';
// import drink2 from './Images/drink2.jpg';
// import drink3 from './Images/drink3.jpg';
// import drink4 from './Images/drink4.jpg';
// import drink5 from './Images/drink5.jpg';
// export class Bevarage extends Component {
//     render(){
//         return(
//            <div >
//               <br/>
//               <h1>
//               <div class="header1">FRESHO!</div>
//               <center><div class="header2">Foodgrains,Oil&Masala</div></center></h1>
//               <div className='flex'>
//                   <div className='cont'>
//                <img className='abu' src={drink2} alt="doll1" title='Apple' width="auto" height="250px"/>
//       <p>Apple Red Delicious</p><p style={{marginLeft:"110px"}}>500g | 1 kg</p>
//         <div className="flex" style={{marginLeft:"35px"}}><div className="Mrp">MRP 200rs</div><div align="center"> <button className="btns" onclick="AddToCart(4681,1,0,0,0,4681,Apple Fuji - 500 g,this)">ADD</button></div> 	</div></div>


//         <div className='cont'>
//                <img className='abu' src={drink3} alt="doll1" title='Apple' width="auto" height="250px"/>
//       <p>Apple Red Delicious</p><p style={{marginLeft:"110px"}}>500g | 1 kg</p>
//         <div className="flex" style={{marginLeft:"35px"}}><div className="Mrp">MRP 200rs</div><div align="center"> <button className="btns" onclick="AddToCart(4681,1,0,0,0,4681,Apple Fuji - 500 g,this)">ADD</button></div> 	</div></div>

//                <div className='cont'>
//                <img className='abu' src={drink4} alt="doll1" title='Apple' width="auto" height="250px"/>
//       <p>Apple Red Delicious</p><p style={{marginLeft:"110px"}}>500g | 1 kg</p>
//         <div className="flex" style={{marginLeft:"35px"}}><div className="Mrp">MRP 200rs</div><div align="center"> <button className="btns" onclick="AddToCart(4681,1,0,0,0,4681,Apple Fuji - 500 g,this)">ADD</button></div> 	</div></div>
//         <div className='cont'>
//                <img className='abu' src={drink5} alt="doll1" title='Apple' width="auto" height="250px"/>
//       <p>Apple Red Delicious</p><p style={{marginLeft:"110px"}}>500g | 1 kg</p>
//         <div className="flex" style={{marginLeft:"35px"}}><div className="Mrp">MRP 200rs</div><div align="center"> <button className="btns" onclick="AddToCart(4681,1,0,0,0,4681,Apple Fuji - 500 g,this)">ADD</button></div> 	</div></div>


//             </div>
//             </div>
         
//            // <h1>I am the Doll , I am the Doll </h1>
//         )         
     
//   }
// }

// export default Bevarage



import './Css.css';
import drinks from './Drinks';
import React,{useContext} from 'react';
import { Cartcontext } from './context/Context';
import './Style.css';
import {FaShoppingCart} from  'react-icons/fa'


function Beverage(){
   const GlobalState = useContext(Cartcontext);
   console.log(GlobalState);
   const dispatch=GlobalState.dispatch;
   const ProductItems = drinks.map((item)=>
                  <div className='flex' key={item.id}>
                  <div className='cont'>
                     <img className='abu' src={item.thump} width="auto" height="250px"/>
                     <p>{item.product_name}</p><p style={{marginLeft:"110px"}}>{item.qnty}</p>
         <div className="flex" style={{margiLeft:"35px"}}><div className="Mrp">{item.currency}</div><div align="center"> <button className="btns" onClick={()=>dispatch({type:'ADD',payload:item})}><FaShoppingCart style={{width:"30px"}}/>ADD</button></div> 	</div></div>
                     </div>
      
                 
   )
   return(
      
     
      <div className='flex'>
            {ProductItems}
         </div>
   )
}

export default Beverage;