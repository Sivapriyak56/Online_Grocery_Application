
import {React, Component} from 'react';
import './Style.css';
import {Link, NavLink} from 'react-router-dom';
import icon from './icon.png';
import {FaShoppingCart} from  'react-icons/fa'
import {IoLogInOutline} from 'react-icons/io5'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import {VscAccount} from 'react-icons/vsc'
import Phone from './Phone'
import ContactUS from './ContactUS';


class Nav extends Component{
  
  constructor(props) {
    super(props)
  
    this.state = {
      searchinput:"",
       loginid:localStorage.getItem("loginid"),
       status:localStorage.getItem("status"),
       username:localStorage.getItem("username"),
       count:localStorage.getItem("count"),
    }
  }
  
setSearch(event){
  this.setState({
    searchinput:event.target.value
   
  })
  console.log(this.state.searchinput);
}

setCart(){
  window.location.href("Cart")
 
}
setReload(){
  // window.location.replace("Cart")
  // <p badgeContent={this.state.count}></p>
}

  setLogout(){
    localStorage.setItem("status",0);
    localStorage.clear();
    window.location.reload()
  }
 
        render(){
          if (this.state.searchinput === "ss") {
            < Phone />
          }
         
            
         if(this.state.status == 1)
         return(
          
          
     <nav className="navStyle">


               <div className="logo1"><img src={icon} alt="Logo" height="100px" width="100px" /></div>
               {/* <div className="logo2"> */}
               <h2 className='tag'>Fresho!</h2>

               <div>
                 <div style={{ padding: "1px" }}></div>
                 {/* <input  type="text" placeholder="Search.." onChange={(event)=>this.setSearch(event) }  value={this.state.searchinput}  className='search' /></div> */}
                  <input type="text"  placeholder='Search..'  value={this.state.searchinput} onChange={(event)=>this.setSearch(event) } className='search' required/></div>
               <ul className='navLink'>
                 <Link to="Home">
                   <li>HOME</li>
                 </Link>
                 <div className="dropdown">
                   <Link to="Product">
                     <li>PRODUCTS</li>
                   </Link>
                   <div className="dropdown-content">
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
                 </div>

                 <Link to="AboutUs"> <li>CHAT</li></Link>
                 <Link to="ContactUS"> <li>CONTACT</li></Link>
<div className='loggreen'>
                <p> <div className="dropdowns" style={{ float: "right" }}><VscAccount />Hi,{this.state.username}
                <div className="dropdown-contents">

              <div className='cont'>
                <center><VscAccount /></center>
                <li><center>{this.state.username}</center></li>
                <hr></hr>
                <br></br>

                <center><button onClick={() => this. setLogout()} className="logoutlabel">logout</button></center>
                
                <li>Privacy Policy • Terms of Service</li>
              </div>
            </div>
          </div></p> </div>
                 {/* <Link to ="login"><li  style={{color:"black"}}>Sign in</li> </Link> */}
                 {/* <div className='loggreen'> */}

      {/* {json.user.map((item) => {
      
        return (

          item.id == this.state.loginid ? <p> <div className="dropdowns" style={{ float: "right" }}><VscAccount /> {item.email}
            <div className="dropdown-contents">

              <div className='cont'>
                <center><VscAccount /></center>
                <li><center>{item.email}</center></li>
                <hr></hr>
                <br></br>

                <center><button onClick={() => this. setLogout()} className="logoutlabel">logout</button></center>
                
                <li>Privacy Policy • Terms of Service</li>
              </div>
            </div>
          </div></p> : ''
        );

      })} */}
    {/* </div> */}



                 <div className="bsbtn"> <Link to="cart">
                
                  <Badge color="secondary" badgeContent={this.state.count}>
                          
                     <ShoppingCartIcon /> 
                      
                   {/* {" "} */}
                   </Badge>
                   
                  
                   {/* <FaShoppingCart style={{width:"50px"}}></FaShoppingCart> */}
                 </Link></div>
                
               </ul>

             </nav>
         
         

      
       ) 
       else
       return(
          
          
        <nav className="navStyle">
          <div className="logo1"><img src={icon} alt="Logo" height="100px" width="100px"/></div>
          {/* <div className="logo2"> */}
            <h2 className='tag'>Fresho!</h2>
     
          <div>
            <div style={{padding:"1px"}}></div>
          <input className='search'  type="text" placeholder="Search.."/></div>

            <ul className='navLink'> 
              <Link to="Home"> 
                <li>HOME</li>
              </Link>
              <div className="dropdown">
                <Link to ="Product"> 
                  <li>PRODUCTS</li>
                </Link>
                <div className="dropdown-content">
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
                </div>
            
              <Link to ="AboutUs"> <li>ABOUT</li></Link>
              <Link to="ContactUS"> <li>CONTACT</li></Link>
            
           
             <Link to ="login"><li  style={{color:"black"}}>Sign in</li> </Link>
             {/* {this.setNum()} */}
             {/* <div className='loggreen'>
    {json.user.map((item)=>{
        return(
          item.id==this.state.loginid ? <h4>{item.email}</h4>:''
        )
      })}
    </div> */}
           
      
           <div  className="bsbtn"> <Link to="login"> 
           <Badge color="secondary" badgeContent={this.state.count} >
      <ShoppingCartIcon />{" "}
    </Badge>
    
            {/* <FaShoppingCart style={{width:"50px"}}></FaShoppingCart> */}
          </Link></div>
             </ul>
             
        </nav>
       
       

    
     ) 

      
   }
}
export default Nav;

