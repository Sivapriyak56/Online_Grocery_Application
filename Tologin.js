// import React, { Component } from 'react'

import './Style.css';

// import axios from 'axios';

// import {Link} from 'react-router-dom';

import Home from './Home';

// export class Login extends Component {

//     constructor(props){

//         super(props)

//         this.state={

//             // products:[],

//             uname:0,

//             num:0

//              }

//         }

//         getAllProducts()

//         {

//             axios.get("http://localhost:3000/details").then((Response)=>{

//                 this.setState({

//                     details:Response.data

//                 })

//             }).catch((error)=>

//             {

//                 console.log("Unable to retrieve data");

//             })

//         }   
//         setName(event){

//             this.setState({

//                 uname:event.target.value

//             })

//         }
//         clicked(){
//             if(this.state.uname === 2)
//             this.setState({
//                 num:1

//             })
//         }

//   render() {

   

//     // const product  = this.state.details.map((data)=>{

       

//     //     if(this.state.uname === data.pname && this.state.upass === data.ppass)

//     //     return(

//     //         < Home />



//     // )});

//         if(this.state.num === 0)

//     return (
// <center><div className='cov'>
//         <div className="container">
//             <div className="row1">
//                 <h1>LogIn</h1>
//                 <div className="row">
//                     <i className="fas fa-envelope-square"></i>
//                     <input  type="text"  placeholder='Name'  value={this.state.uname} onChange={(event)=>this.setName(event) } required/>
//                 </div>
//                 <button onClick={()=>this.clicked()} className="btn">Submit</button>
//                 <br/><br/>
//                 <Link to="registration"> <p>Register</p></Link>
//             </div>
//         </div></div></center>

//   );

//   else

//   return(

//       < Home />

//   )



// }

// }



// export default Login

import React, { useState } from "react";
import {  useNavigate,Link } from "react-router-dom";

//import Homes from "./homes";


//import ReactDOM from "react-dom";

// import "./style.css";

function Tologin() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const Navigate=useNavigate();
  // User Login info
  const database = [
    {
      username: "user1",
      password: "8943640326",
    },
    {
      username: "user2",
      password: "96450326",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid Number",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
        alert("Login failed!!!");
      } else {
        setIsSubmitted(true);
        alert("User is successfully logged in");
        Navigate("/Home");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label class="labelname">User Name</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label class="labelname">phone Number </label>
          <input type="text" name="pass" required />
          {renderErrorMessage("pass")} 
         </div>
        {/* <label class="labelname">Don't have an account?<Link to="registration" style={{color:"darkblue"}}>Register Here</Link> </label> */}
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
   
  );

  return (
    
    <div className="app">
      <div className="login-form">
        <div className="title"><center>Sign In</center></div>
        {isSubmitted ? '': renderForm}
       
      </div>
      
    </div>
  );
}

export default Tologin;
