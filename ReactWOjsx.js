import React,{Component} from "react";

class ReactWOjsx extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            React.createElement('div',null,React.createElement('h1',null,'Hello World'))
        );
    }

}

export default ReactWOjsx;