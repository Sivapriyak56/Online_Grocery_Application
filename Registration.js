// import React, { Component } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import './Style.css'
// export class Registration extends Component {
   
//         constructor(props) {
//           super(props)
        
//           this.state = {
//             details:[],
//             udate:"",
//              uname:" "
            
//           }
        
//         }
    
//         setPassword(event){
//             this.setState({
//                 udate:event.target.value
//             })
//         }
//         setName(event){
//             this.setState({
//                 uname:event.target.value
//             })
//         }
//         postregCourses(){
      
//             axios({
//                 method:'post',
//                 url:'http://localhost:3000/user',
//                 data:
//                 {
//                     id:this.state.id,
//                     email:this.state.uname, 
//                     password:this.state.udate,
                   
//                 }
//             })
//             alert("Successfully Inserted!").catch((error)=>
            
//             {
//                 console.log("Unable to insert data");
//             })
//         }
            
//   render() {
//     return (
//         <div className='cov'>
//             {/* <center> */}
//                 <div className='container'><br></br>
//         Enter Name : <input style={{height:"50px"}}  type="text"  placeholder='Name'  value={this.state.uname} onChange={(event)=>this.setName(event) } required/><br></br>
//         Enter Phone Number : <input type="text" style={{height:'200px'}} name='password' value={this.state.udate} onChange={(event)=>this.setPassword(event) } required /><br></br>
//         By continuing, you agree to our Refund, Terms and Policies<br></br>
//         <button  onClick={()=>this.postregCourses()} type='submit' className="btn" >Register</button><br></br><br></br>
//         <Link to="login"> <p>Login</p></Link>
//         </div>
//         {/* </center> */}
//         </div>
//     )
//   }
// }

// export default Registration


import axios from 'axios'
import { Link } from 'react-router-dom'
import './Style.css'

import React,{useState,useEffect} from 'react' //Hook function -  useEffect - to fetch date from database,usestate - setState in class

 function Registration() {
const [user,setuser] = useState([]) // initial state
const [register, setRegister] = useState({username: " ",phone:" "}) // for register set name and number null

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

    const  handleChange=(event)=>{
    const name=event.target.name;
    const value = event.target.value;
    setRegister({...register,[name]:value}) // 
    }
   const setSubmit=(event)=>{
    event.preventDefault(); //to prevent reload data after submissiomn

    var {email, password}=document.forms[0]; //
    const userData = user.find((user)=>(user.email === email.value || user.password === password.value));
    if(userData){
        alert("User Exist!!")

    }
    else
    axios({
                        method:'post',
                        url:'http://localhost:3000/user',
                        data:register
                      
                    })
                    alert("Successfully Inserted!").catch((error)=>
                    
                    {
                        console.log("Unable to insert data");
                    })
                

    }
  return (
    <div>

      <form method='post' onSubmit={setSubmit}>
        <div className='cov'>
       <center><div><h2>Registration</h2></div></center> 
                 <div className='container'>
                  
                 Enter Name <input  type="text" name="email" value={register.email} onChange={handleChange} />
         {/* Enter Name : <input style={{height:"50px"}}  type="text" name="email"  placeholder='Name'  value={register.email} onChange={handleChange}/><br></br> */}
         Enter Phone Number : <input type="text"   name="password" value={register.password} onChange={handleChange} required /><br></br>
         By continuing, you agree to our Refund, Terms and Policies<br></br>
         <button   className="btn" type='submit' >Register</button><br></br><br></br>
         <Link to="login"> <p>Login</p></Link>
         </div>
        
        </div>
        </form>  
    </div>
  )
}
export default Registration;





// import React, { Component } from "react";
// import axios from "axios";


// class Registration extends Component {


//   constructor(props){
//     super(props);

//     this.state={
//       name: null,
//       email: null,
//       phone: null,
//       pass: null
//     }
//   }

//   handlename(e){
//     e.preventDefault()
//     this.setState({
//       name: e.target.value
//     })

//   }
//   handleemail(e){
//     e.preventDefault()
//     this.setState({
//       email: e.target.value
//     })

//   }
//   handlephone(e){
//     e.preventDefault()
//     this.setState({
//       phone: e.target.value
//     })

//   }
//   handlepass(e){
//     e.preventDefault()
//     this.setState({
//       pass: e.target.value
//     })

//   }
//      storeUserData (){
//       const name = this.state.name;
//     const email = this.state.email;
//     const phone = this.state.phone;
//     const pass = this.state.pass;
//       const regexname =/^[A-Za-z]{4,20}$/
//       const regexemail=/^(.+)@(.+)$/
//       const regexphone=/[0-9]{10}$/
//       const regexpass=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
//       if(name != null && email != null && phone != null && pass != null){
//         if (regexname.test(name)) {
//           if (regexemail.test(email)) {
//             if(regexphone.test(phone)){
//             if (regexpass.test(pass)) {
//               axios({
//                 method: "post",
//                 url: "http://localhost:3000/user",
//                 data: {
//                   name: name,
//                   email: email,
//                   phone: phone,
//                   password: pass,
//                   // id: parseInt++,
//                 },
//               }).catch((error) => {
//                 alert("Something went Wrong Loging in you as guest");
//               });
//               alert("Registered Successfully")
//               window.location.href="/Login";
  
              
//             } else {
//               alert("Invalid Password");
//             }
//           }else {
//             alert("Invalid phone number");
//           }
//           } else {
//             alert("Invalid email");
//           }
//         } else {
//           alert("Invalid name");
//         }
//       } else {
//         alert("Please Enter data")
//       }
//     }
  


//   render() {
//     return (
//       <div>
//         <div className="cov">
//         <center>
//         <div className="Regcontainer"> 
          
//           {/* <div className="container"> */}
//             <h1>Registration</h1>
            
//             <label>Name</label>
//               <br />
//               <input
//               onChange={(e)=>this.handlename(e)}
//                 type="text"
//                 name="name"
              
//               />

//               <br />
//               <label>Email Address</label>
//               <br />

//               <input
//                 type="text"
//                 name="email"
//                 onChange={(e)=>this.handleemail(e)}
                
//               />
//               <br />
            

//               <label>Phone Number</label>
//               <br />

//               <input
//                 type="text"
//                 name="phone"
//                 onChange={(e)=>this.handlephone(e)}
                
//               />
//               <br />

//               <label>Password</label>
//               <br />

//               <input
//                 type="text"
//                 name="password"
//                 onChange={(e)=>this.handlepass(e)}
                
            
                
//               />
//               <br /><br />

//               <button  className="regbtn" onClick={()=>this.storeUserData()} value="Register" >Register</button>
//               <br></br>
//               {/* </div> */}
          
//         </div>
//         </center>
//         </div>
//       </div>
//     );
//   }
// }
// export default Registration;
