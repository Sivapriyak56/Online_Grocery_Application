import React, { Component } from "react";
import NewHOC from "./Hocdemo2";


class HocdemoPart1 extends Component{
    render(){
        return(
            <h2> Name: {this.props.name}</h2>
        )
    }
}

export default NewHOC(HocdemoPart1)







