
import {React, Component} from 'react'
import './App.css';

class LayoutDemo extends Component{
    constructor(props){
        super(props)
    this.state={name:"Layout 1"}
    }
    sayHello(event){
        this.setState(
            {
                name: "Layout 2"
               
            }
        )
        // event.target.style.background = "brown";
        
    }
    render(){
        return(
            
            <center><b><label onMouseOver={(event)=>this.sayHello(event)}>{this.state.name}</label></b></center>
        )
    }
}

export default LayoutDemo;


















