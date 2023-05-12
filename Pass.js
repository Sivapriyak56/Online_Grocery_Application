import {React,Component} from "react";

 class Pass extends Component{
    constructor(props){
        super(props)
        this.state={name:["Raj","Ravi"]
    };
    }
    render(){
        const dataItem = this.state.name.map((data)=>{
        return(
            <li>{data}</li>
        );
    });
        return(
       
            <div>
                {dataItem}    
            </div>
      
        );
    }
}

export default Pass;