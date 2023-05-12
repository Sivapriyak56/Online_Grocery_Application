// // import React, { Component } from 'react'
// // import axios from 'axios';
// // import ph from './ph.json';
// //  class Phone extends Component {
// //     constructor(props) {
// //       super(props)
    
// //       this.state = {
// //         details:[]
// //       }
// //     }
// //     getAllProducts()
// //     {
// //         axios.get("http://localhost:3000/details").then((Response)=>{
// //             this.setState({
// //                 details:Response.data
// //             })
// //         }).catch((error)=>
// //         {
// //             console.log("Unable to retrieve data");
// //         })
// //     }
// //   render() {
// //     const pdetails = this.state.details.map((data)=>{
// //     return (
     
// //         <tr>
// //         <td><img src={data.path} width="150px"></img>  </td><br></br><br></br>
// //         {/* <td>{data.id}</td><br></br> */}
// //         <td>{data.name}</td><br></br>
// //         <td>{data.price}</td>
       

// //         </tr>
// //     )})
    
// //     return(
// //         <div>
// //        {/* <img src="phone4.png" width='100px' height="250px"/> */}
// //             {this.getAllProducts()}{pdetails}
       
       
// //         </div>
// //     )
    
// //   }
// // }

// // export default Phone;


// import React, { Component } from 'react'
// import './Style.css';
// import oil1 from './Images/oil1.jpg';
// import oil2 from './Images/oil2.jpg';
// import masala3 from './Images/masala3.jpg';
// import masala1 from './Images/masala1.jpg';
// // import {Link} from 'react-router-dom'
// export class Phone extends Component {
//     render(){
//         return(
//            <div >
//               <br/>
//               <h1>
//               <div class="header1">fRESHO!</div>
//               <center><div class="header2">Foodgrains,Oil&Masala</div></center></h1>
//               <div className='flex'>
//                   <div className='cont'>
//                <img className='abu' src={oil1} alt="doll1" title='Apple' width="auto" height="250px"/>
//       <p>Apple Red Delicious</p><p style={{marginLeft:"110px"}}>500g | 1 kg</p>
//         <div className="flex" style={{marginLeft:"35px"}}><div className="Mrp">MRP 200rs</div><div align="center"> <button className="btns" onclick="AddToCart(4681,1,0,0,0,4681,Apple Fuji - 500 g,this)">ADD</button></div> 	</div></div>


//         <div className='cont'>
//                <img className='abu' src={oil2} alt="doll1" title='Apple' width="auto" height="250px"/>
//       <p>Apple Red Delicious</p><p style={{marginLeft:"110px"}}>500g | 1 kg</p>
//         <div className="flex" style={{marginLeft:"35px"}}><div className="Mrp">MRP 200rs</div><div align="center"> <button className="btns" onclick="AddToCart(4681,1,0,0,0,4681,Apple Fuji - 500 g,this)">ADD</button></div> 	</div></div>

//                <div className='cont'>
//                <img className='abu' src={masala3} alt="doll1" title='Apple' width="auto" height="250px"/>
//       <p>Apple Red Delicious</p><p style={{marginLeft:"110px"}}>500g | 1 kg</p>
//         <div className="flex" style={{marginLeft:"35px"}}><div className="Mrp">MRP 200rs</div><div align="center"> <button className="btns" onclick="AddToCart(4681,1,0,0,0,4681,Apple Fuji - 500 g,this)">ADD</button></div> 	</div></div>
//         <div className='cont'>
//                <img className='abu' src={masala1} alt="doll1" title='Apple' width="auto" height="250px"/>
//       <p>Apple Red Delicious</p><p style={{marginLeft:"110px"}}>500g | 1 kg</p>
//         <div className="flex" style={{marginLeft:"35px"}}><div className="Mrp">MRP 200rs</div><div align="center"> <button className="btns" onclick="AddToCart(4681,1,0,0,0,4681,Apple Fuji - 500 g,this)">ADD</button></div> 	</div></div>


//             </div>
//             </div>
         
//            // <h1>I am the Doll , I am the Doll </h1>
//         )         
     
//   }
// }
// export default Phone;


import './Css.css';
import foodgrains from './Foodgrains';
import React,{useContext} from 'react';
import { Cartcontext } from './context/Context';
import './Style.css';
import {FaShoppingCart} from  'react-icons/fa'
function Phone(){
    const GlobalState = useContext(Cartcontext);
    console.log(GlobalState);
    const dispatch=GlobalState.dispatch;
    const ProductItems = foodgrains.map((item)=>
                   <div className='flex' key={item.id}>
                   <div className='cont'>
                      <img className='abu' src={item.thump} width="auto" height="250px"/>
                      <p>{item.product_name}</p><p style={{marginLeft:"110px"}}>{item.qnty}</p>
          <div className="flex" style={{margiLeft:"35px"}}><div className="Mrp">{item.currency}</div><div align="center"> <button className="btns" onClick={()=>dispatch({type:'ADD',payload:item})}  ><FaShoppingCart style={{width:"30px"}}/>ADD</button></div> 	</div></div>
                      </div>
       
                  
    )
    return(
       
      
       <div className='flex'>
             {ProductItems}
          </div>
    )
 }
 
 export default Phone;
