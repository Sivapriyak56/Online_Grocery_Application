import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Course extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         couseList:[],
         udate:" ",
         uname:" ",
         course: " "
        
      }
    
    }

    setDate(event){
        this.setState({
            udate:event.target.value
        })
    }
    setName(event){
        this.setState({
            uname:event.target.value
        })
    }
    setCourse(event){
        this.setState({
            course:event.target.value
        })
    }
    postregCourses(){
      
        axios({
            method:'post',
            url:'http://localhost:3000/registeredcourses',
            data:
            {
                id:this.state.id,
                pname:this.state.uname, 
                pdate:this.state.udate,
                regcourse:this.state.course
            }
        })
        alert("Successfully Inserted!").catch((error)=>
        
        {
            console.log("Unable to insert data");
        })
    }
      
     

  render() {   
    return (
        
     <div>
        EnterName <input  type="text"  placeholder='Name'  value={this.state.uname} onChange={(event)=>this.setName(event) } required/><br></br><br></br>

        Enterdate <input type="Date"  name='udate' value={this.state.udate} onChange={(event)=>this.setDate(event) } required/><br></br><br></br>
        <h1><center>List of Courses</center></h1>
        <table  className='table'>
            <thead className="thead">
                <th>Course ID</th>
                <th>Course Name</th>
                <th>select/deselect</th>
            </thead>
            <tbody>

               <tr className="tr">
                <td>1</td>
                <td>Ajax</td>
                <td><input onChange={(event)=>this.setCourse(event)} type="checkbox"  value="Ajax"></input></td>
               </tr>
               <tr className="tr">
                <td>2</td>
                <td>Node</td>
                <td><input onChange={(event)=>this.setCourse(event)} type="checkbox"  value="Node"></input></td>
               </tr>
               <tr className="tr">
                <td>3</td>
                <td>Angular</td>
                <td><input onChange={(event)=>this.setCourse(event)} type="checkbox"   value="Angular"></input></td>
               </tr>
               <tr className="tr">
                <td>4</td>
                <td>Javascript</td>
                <td><input onChange={(event)=>this.setCourse(event)} type="checkbox"   value="Javascript"></input></td>
               </tr>
            </tbody>
        </table>
        <button  onClick={()=>this.postregCourses()} type='submit' className="button" >Register</button>
       
        
     </div>
    )
  }
}

export default Course;
