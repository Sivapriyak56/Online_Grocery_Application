
import {React, Component} from "react";
import HOC from "./HOCDemo";

class HOCButton extends Component
{  
     render(){
    return(
        <div>
            <h1>Button</h1>
            Count: {this.props.count}
            <button onClick={this.props.incrementCount}> Click here </button>
        </div>
    );

    }

}

export default HOC(HOCButton);