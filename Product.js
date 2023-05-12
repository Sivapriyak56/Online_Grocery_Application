
import {React, Component} from 'react';
import {Outlet } from 'react-router-dom';
//import './App.css';
import './Style.css';

import Western from './Western';
import Snack from './Snack';
import Doll from './Doll';
import Phone from './Phone';
import Bevarage from './Bevarage';
// import veg4 from './public/pics/veg4.jpg';
// import veg7 from './pics/veg7.jpg';
// import veg2 from './pics/veg2.jpg';
// import snk1 from './pics/snk1.jpg';
// import snk2 from './pics/snk2.jpg';
// import snk3 from './pics/snk3.jpg';
// import sn1 from './pics/sn1.png';
// import sn2 from './pics/sn2.png';
// import sn3 from './pics/sn3.png';
// class Product extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             items:['doll','Phone','TV']
//         }
//     }
   
//         render(){

//             const displayItem = this.state.items.map((data)=>{
//             return(
//               <div style={{margin:'0',padding:'0',border:'none'}}>
//                     <Link to={data}><li  className="sidebar">{data}</li></Link></div>
                    
                
               
//             ) 
//         });
        
//             return (

//                 // <><img src={sh3} alt="Photo" />
//                 <div style={{display:'inline-block',width:'100%'}}>
//                     <div className='random'>{displayItem}</div>
//                     <div className='flex'><Outlet/></div>
//                 </div>
//             )
//             }     
// }

class Product extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Products</h1>
//                 {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
//             </div>
//         )
//     }
// }

render(){
    return(
      //  <div className='doll'>
           <div>
            <h1>
                <div class="header1">FRESHO!</div>
                <center><div class="header2">PRODUCTS</div></center></h1>
                <br></br><br></br>
                <Doll/>
       <Phone/>
      <Western/>
       <Bevarage/>
      <Snack/>
      <Bevarage/>
                {/* <img className='abu' src={veg4} alt="doll1"  height="250px"/>
               <img className='abu' src={veg7} alt="Doll2"  height="250px" />
               <img className='abu' src={veg2} alt="Doll3"  height="250px" />
                <img className='abu' src={snk1} alt="doll1"  height="250px"/>
              <img className='abu' src={snk2} alt="Doll2"  height="250px" />
              <img className='abu' src={snk3} alt="Doll3"  height="250px" />
              <img className='abu' src={sn1} alt="doll1"  height="250px"/>
               <img className='abu' src={sn2} alt="Doll2"  height="250px" />
               <img className='abu' src={sn3} alt="Doll3"  height="250px" />
         <div className='flex'><Outlet/></div></div></> */}
         {/* <div className='carousel'></div> */}
         </div>
 
    )         
 
}
}


export default Product;