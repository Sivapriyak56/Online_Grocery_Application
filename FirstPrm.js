import {React,Component} from 'react';
import Home from './Home';
import './App.css';
// import Home from './Home';
import Greet from './Greet';
// import App from './App';

class FirstPrm extends Component {
  constructor(props){
    super(props)
    this.state={
      count:0
    } 
  }
  setHome(){
   this.setState(
    {
      count:1
    }
   )
  }
  render(){
    if(this.state.count ===1){
      return(
        <div>
        <div className="navbar">
          <ul>
            <li>MyConTenT</li>
            <li><a href='#' target={()=> this.setHome()}>Home</a></li>
            <li><a href="<Greet>">Greet</a></li>
            <li><a href="/App">App</a></li>
            <li><a href='h'>About</a></li>
        </ul>
        
        </div>
        < Home name="Home" />
      </div>
      );
    }
     else {
      return(
<div className="navbar">
          <ul>
            <b color='blue'>MyConTenT</b>
            <li>   </li>
            <li><a href='#' onClick={()=> this.setHome()}>Home</a></li>
            <li><a href="#" onClick={()=> this.setGreet()}>Greet</a></li>
            <li><a href="/App">App</a></li>
            <li><a href='h'>About</a></li>
            <button>SignOut</button>
        </ul>
        
        </div>
      );
      
    }
    }
 
    }

  export default FirstPrm;




// class FirstPrm extends Component {
//   render(){
//   return (
    
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/" element={<Layout />}> */}
//           {/* <Route index element={<Home />} /> */}
//           <Route path="Home" element={<Home />} />
//           {/* <Route path="contact" element={<Contact />} /> */}
//           {/* <Route path="*" element={<NoPage />} /> */}
//         {/* </Route> */}
//       </Routes>
//     </BrowserRouter>
//   );
//   }
//   }

//   export default FirstPrm;