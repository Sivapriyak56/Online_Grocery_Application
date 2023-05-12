
import {React, Component} from 'react';

class Greet extends Component{
    constructor(props){
    super(props);
    this.state={name:" Sivapriya"}
    }
 changeName(){
     this.setState(
             {
                name:'Thanks for Visiting'
             }
     )
   }
     inputNameEvent(event){
         this.setState({
         name:event.target.value
     })
   }
   sayHello() {
    <h1>Hloooo</h1>
  }
        render(){
         return(
             <div> Enter the name:<input type="text" value={this.state.name}
            onChange={(event)=>this.inputNameEvent(event)} 
            ></input>
            <br></br>
            <button onClick={()=>this.changeName()}>Click Me</button>
            <h1>Good Morning !!{this.state.name}</h1>
          
           </div>)
   }
}
export default Greet;

