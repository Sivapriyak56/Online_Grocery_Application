
import {React, Component} from 'react';
import './Style.css'
import { FaFacebookSquare } from 'react-icons/fa';
import {BsSnapchat} from 'react-icons/bs';
import {AiFillInstagram  } from "react-icons/ai";
class ContactUS extends Component{
   
        render(){
         return(
            <div className='bgc'>
            <div className='padding'>
            <div className='contt'>
           
            <nav ><label><h4>Contact US</h4></label><br></br>
            {/* <div className='padding'> */}
               {/* <div className='vertl'></div> */}
        <p> To reach our customer service team please email us at:<a href="#">customerservice@fresho.com</a><hr width="1300px" marginLeft="0px"></hr>
        </p>
        <br></br>
         <h3>Office Address:</h3>
         <div className='office'>Kochi</div><br></br>
         Fresho Supermarket Grocery Supplies Pvt. Ltd.<br></br>
         2nd Floor,<br></br>
         Carnival Infopark Park,<br></br>
         {/* Embassy Golf Link, Edachira,<br></br> */}
         Kochi, Kerala 568071<br></br>
         Tel: 1869-823-1600
         <br></br><br></br>
         <div className='office'>Bangalore</div><br></br>
         Fresho Supermarket Grocery Supplies Pvt. Ltd.<br></br>
         2nd Floor,<br></br>
         Carnival Infopark Park,<br></br>
         Embassy Golf Link,Bangalore ,<br></br>
         Kochi, Kerala 568071<br></br>
         Tel: 1869-823-1600
<hr></hr>

{/* </div> */}
         Email id:<a href="#">customerservice@bigbasket.com</a><br></br><br></br>
         <FaFacebookSquare height="50px"></FaFacebookSquare><BsSnapchat /><AiFillInstagram />
         </nav>
         </div>
         <hr></hr>
         </div></div>
         )         
      
   }
}
export default ContactUS;