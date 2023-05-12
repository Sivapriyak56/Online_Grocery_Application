
import {React, Component} from "react";
import HOC from "./HOCDemo";

class HOCLabel extends Component
{  
     render(){
    return(
        <div>
            <h1>Label</h1>
            Count: {this.props.count}
            <label onMouseOver={this.props.incrementCount}> Click here </label>
        </div>
    );

    }

}

export default HOC(HOCLabel)