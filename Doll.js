// import {React, Component} from 'react';
import './Css.css';
import product from './Products';
import React,{useContext} from 'react';
import { Cartcontext } from './context/Context';
import './Style.css';
// import veg4 from './Images/veg4.jpg';
// import veg7 from './Images/veg7.jpg';
// import veg2 from './Images/veg2.jpg';
// import veg5 from './Images/veg5.jpg';
// class Doll extends Component{
//    constructor(props) {
//      super(props)
   
//      this.state = {
//         images:[]
//      }
//    }
   
//         render(){
//          const Products_items = this.state.product((item)=>{
//             return(
//             <div className='flex' key={item.id}>
//             <div className='cont'>
//                <img className='abu' src={item.thump} width="auto" height="250px"/>
//                <h2>{item.product_name}</h2>
//                </div>

//                </div>
//             )
//          })
//          return(
//             <div >
//                <br/>
//                <h1>
//                <div className="header1">FRESHO!</div>
//                <center><div className="header2">Fruits&Vegetables</div></center></h1>
//                {Products_items}
//                {/* <div className='flex'>
//                   <div className='cont'>
//                <img className='abu' src={veg4} alt="doll1" title='Apple' width="auto" height="250px"/>
//       <p>Apple Red Delicious</p><p style={{marginLeft:"110px"}}>500g | 1 kg</p>
//         <div className="flex" style={{marginLeft:"35px"}}><div className="Mrp">MRP 200rs</div><div align="center"> <button className="btns" >ADD</button></div> 	</div></div>


//         <div className='cont'>
//                <img className='abu' src={veg7} alt="doll1" title='Apple' width="auto" height="250px"/>
//       <p>Apple Red Delicious</p><p style={{marginLeft:"110px"}}>500g | 1 kg</p>
//         <div className="flex" style={{margiLeft:"35px"}}><div className="Mrp">MRP 200rs</div><div align="center"> <button className="btns" onclick="AddToCart(4681,1,0,0,0,4681,Apple Fuji - 500 g,this)">ADD</button></div> 	</div></div>

//                <div className='cont'>
//                <img className='abu' src={veg2} alt="doll1" title='Apple' width="auto" height="250px"/>
//       <p>Apple Red Delicious</p><p style={{marginLeft:"110px"}}>500g | 1 kg</p>
//         <div className="flex" style={{marginLeft:"35px"}}><div className="Mrp">MRP 200rs</div><div align="center"> <button className="btns" onclick="AddToCart(4681,1,0,0,0,4681,Apple Fuji - 500 g,this)">ADD</button></div> 	</div></div>
//         <div className='cont'>
//                <img className='abu' src={veg5} alt="doll1" title='Apple' width="auto" height="250px"/>
//       <p>Apple Red Delicious</p><p style={{marginLeft:"110px"}}>500g | 1 kg</p>
//         <div className="flex" style={{marginLeft:"35px"}}><div className="Mrp">MRP 200rs</div><div align="center"> <button className="btns" onclick="AddToCart(4681,1,0,0,0,4681,Apple Fuji - 500 g,this)">ADD</button></div> 	</div></div>


//             </div> */}
//             </div>
         
           
//          )         
      
//    }
// }
// export default Doll;
import {FaShoppingCart} from  'react-icons/fa'
function Doll(){
   const GlobalState = useContext(Cartcontext);
   console.log(GlobalState);
   const dispatch=GlobalState.dispatch;
   const ProductItems = product.map((item)=>
                  <div className='flex' key={item.id}>
                  <div className='cont'>
                     <img className='abu' src={item.thump} width="auto" height="250px"/>
                     <p>{item.product_name}</p><p style={{marginLeft:"110px"}}>{item.qnty}</p>
         <div className="flex" style={{margiLeft:"35px"}}><div className="Mrp">{item.currency}</div>
         <div align="center"> <button className="btns" onClick={()=>dispatch({type:'ADD',payload:item})} ><FaShoppingCart style={{width:"30px"}}></FaShoppingCart>ADD</button></div> 	</div></div>
                     </div>
      
                 
   )
   return(
      
     
      <div className='flex'>
            {ProductItems}
         </div>
   )
}

export default Doll;