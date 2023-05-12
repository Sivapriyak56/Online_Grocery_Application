import {React, Component} from 'react'
import './App.css';

class Conditional extends Component{
    constructor(props){
        super(props);
    
        this.state = {
    
            backgroundColor : 'red',
    
            score : 50
    
        }
    
    }
    
    changeName()
    
            {
    
                this.setState(
    
                    {
    
                       backgroundColor : 'green',
    
                       score : 100
    
                    }
    
                    )
            }
    
         
    
    render()
    
    {
        let ischanged = this.state.score;
        // let isChanged = this.state.name;
       
    
    return(
    
        <body style={{backgroundColor: this.state.backgroundColor}}>
    
        <div>
            {/* Enter your Score : <input type="text" value={this.state.score}/> */}
            <br></br>
            
              <h1 style = {{color : 'white'}}>{ischanged === 100 ? 'Pass': 'Fail'}</h1>
    
            <button onClick={()=>this.changeName()}> Result </button>
    
            {/* if({this.state.score} === 100){
                <button onClick={()=>this.changeName()}> Color </button>
            } */}
            {/* <button> Color </button> */}

            {/* <h1 style = {{color : 'white'}}> color {isChanged==='Iam green' ? 'is': 'is not'} changed <br></br> {this.state.name} </h1> */}
    
        </div>
    
        </body>
    
        )
    
    }
    
    }
    
   
export default Conditional;