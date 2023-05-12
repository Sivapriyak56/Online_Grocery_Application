import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
export class RegisteredCourses extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        registeredcourses:[]
      }
    }
    getAllCourses()
    {
        axios.get("http://localhost:3000/registeredcourses").then((Response)=>{
            this.setState({
                registeredcourses:Response.data
            })
        }).catch((error)=>
        
        {
            console.log("Unable to retrieve data");
        })
    }
  render() {
    const registeredcourses = this.state.registeredcourses.map((data)=>{
        return(
            
            <tr className="tr">
                <td>{data.id}</td>
                <td>{data.pname}</td>
                <td>{data.pdate}</td>
                <td>{data.regcourse}</td>
                
            </tr>

           
     ) } )
    
    return (
      <div>
        <br></br>
        <h1>Registered  Courses</h1><br></br><br></br>
        <table className='table'>
            <thead className="thead">
                <th>Participant ID</th>
                <th>Participant Name</th>
                <th>Date of Course</th>
                <th>Course</th>
            </thead>
            
            <tbody>
              {this.getAllCourses()}  {registeredcourses}
            </tbody>
            
        </table>
        
      </div>
     
    )
  }
}

export default RegisteredCourses;
