import {React, Component} from 'react'
import './App.css';

class ConditionalFormat extends Component{
    constructor(props){
        super(props);
        this.state = {
            flag : true
    
    
        }
    }
    changeColor(){
        this.setState(
          {
            flag : false
          }  
        )
    }
    changeColors(){
        this.setState(
          {
            flag : true
          }  
        )
    }
        render(){
        if(this.state.flag)
            return(
                <div className="App"><center> <button onClick={()=>this.changeColor()}> Click </button> </center></div>
            );
        else
            return(
            <div className="Body"><center> <button onClick={()=>this.changeColors()}> Click </button> </center></div>
            );
            }
        }
    export default ConditionalFormat;