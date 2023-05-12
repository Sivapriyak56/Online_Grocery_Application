import {React,Component} from "react";


class ButtonDemo extends Component{
    constructor(props){
    super(props)
    this.state={ count:0}
    }

    incrementCounter(){
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }
render(){
    return(
        <div >
            <center>
            count:<br></br>{this.state.count}
            <br></br>
            <br></br>
            <button onClick={()=>this.incrementCounter()}> Click </button></center> </div>
        
    )
}
}

export default ButtonDemo;