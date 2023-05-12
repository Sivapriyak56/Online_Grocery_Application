import './Style.css';
import React, { useState,useEffect } from "react";
import {  useNavigate,Link } from "react-router-dom";
import Home from "./Home";
import axios from "axios"
import Nav from './Nav';

//import ReactDOM from "react-dom";

// import "./style.css";




function Login() {

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const[user,setuser]=useState([]);
  total:localStorage.getItem("total")

  const Navigate=useNavigate();
  

  const errors = {
    email: "invalid email",
    password: "invalid password",
  };


    useEffect(()=>{
    
            axios.get('http://localhost:3000/user').then(response => response.data).then(
                (result) => {
                    setuser(result)
                },
                (error) => {
                    setuser(null);
                }
              )
    
              
              
              })
  const handleSubmit = (event) => {
  
    event.preventDefault();

   
    var { email, password } = document.forms[0];

    const userData = user.find((user) => user.email === email.value);


    if (userData) {
      if (userData.password !== password.value) {
  
        setErrorMessages({ name: "password", message: errors.password });
        
      } else {
        setIsSubmitted(true);
        alert("User is successfully logged in");
        Navigate("/Home");
      
        localStorage.setItem("status",1)
        localStorage.setItem("loginid",userData.id)
        localStorage.setItem("username",userData.email)
        window.location.reload()
       
        // <home />
      }
    } else {
   
      setErrorMessages({ name: "email", message: errors.email })
     
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  const renderForm = (
    
  <div className='form'>
      <form onSubmit={handleSubmit}>  
       <div className='container'>
     {/* <div className='row'> */}
        {/* <div> */}
        Name <input  style={{width:'200px'}} type="text" name="email" required /> <br></br>
          {renderErrorMessage("email")}
     
         Phone Number <input style={{width:'200px'}} type="text" name="password" required />
          {renderErrorMessage("password")}
          {/* </div> */}
        <label >Don't have an account?<Link to="registration" style={{color:"darkblue"}}>Register Here</Link> </label>
     <br></br>
          <button className='btn' type="submit" value="Submit">Submit</button>
        </div>
        
        {/* </div> */}
      </form>
    </div>  
  );
  return (
    <div >
      <div >
        <div className='cov' >
       {isSubmitted ? '': renderForm }
        </div>
      </div>
  
     </div>
  );
}




export default Login;
