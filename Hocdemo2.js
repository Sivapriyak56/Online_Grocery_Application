import React from "react";

const NewHOC = (OriginalComponent)=>{
    return class Newcomponent extends React.Component{
        render(){
            return <OriginalComponent name="Ziva"></OriginalComponent>
        }
    }
 
}

export default NewHOC;







































