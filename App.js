// import './Style.css';
// import Home from './Home';
// import Welcome from './Welcome';
// import Greet  from './Greet';
// import Conditional from './Conditional';
// import ConditionalFormat from './ConditionalFormat';
// import ArrayListRender from './ArrayListRender';
// import ButtonDemo from './ButtonDemo';
// import FirstPrm from "./FirstPrm";
// import LayoutDemo from "./LayoutDemo";
// import HOCButton from "./HOCButton";
// import HOCLabel from "./HOCLabel";
// import Pro_Product from "./Pro_Product";
// import ReactWOjsx from "./ReactWOjsx";
// import Pass  from "./Pass";
// import HocdemoPart1 from "./HocdemoPart1";
// import SpreadOp from "./SpreadOp";
// import Phone from "./Phone";

// import Course from "./Course";
// import RegisteredCourses from "./RegisteredCourses";

import './Style.css';
import Nav from "./Nav";
import AboutUS from "./AboutUS";
import ContactUS from "./ContactUS";
import Product from "./Product";
import Doll from './Doll';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Home';
import Phone from './Phone';
import Snack from './Snack';
import Redmi from './Redmi';
import Samsung from './Samsung';
import Iphone from './Iphone';
import Error from './Error';
import Western from './Western';
import Bevarage from './Bevarage';
import Login from './Login';
import Registration from './Registration';
import Tologin from './Tologin';
import Cart from './Cart';
import { Category } from "./Category";
import ShippingAddress from './ShippingAddress';
import Payment from './Payment';
// import Navigator from "./Navigator";
// import About from "./About";
// import Contact from "./Contact";

function App() {
    
    return(

<div className="bg">
    



 {/* <Home name="Home"/>  
    <Welcome name ="veena" lname = "nair" />
    <Welcome name ="Anu" lname ="Narayanan"/> 
    <Greet name/> 
<Conditional score="100"/>
 <ConditionalFormat />  */}
{/* <FirstPrm /> */}
 {/* <ArrayListRender />
 <ButtonDemo />

<LayoutDemo />
 <HOCButton /> */}
{/* <HOCLabel /> */}
{/* <SpreadOp /> */}
{/* < Pro_Product /> */}
{/* <ReactWOjsx /> */}
{/* <Pass /> */}
{/* <HocdemoPart1 /> */}
{/* <Phone /> */}

{/* <Course />
<RegisteredCourses /> */}



<BrowserRouter><Nav/>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='Payment' element={<Payment/>}></Route>
<Route path='cart/ShippingAddress' element={<ShippingAddress/>}></Route>
<Route path='ShippingAddress' element={<ShippingAddress/>}></Route>
    <Route path ='home' element={<Home/>} > 
    
        <Route>
        <Route path="doll" element={<Doll />}></Route>
        <Route path="phone" element={<Phone />}></Route>
        <Route path="tv" element={<Western/>}></Route>
        <Route path="beverage" element={<Bevarage/>}></Route>
        <Route path="snack" element={<Snack/>}></Route>
        </Route>
    </Route>
    <Route path ='Home/product' element={<Product/>} />
    <Route path ='Home/Phone' element={<Phone/>} />
    <Route path ='Product' element={<Product />} />
    {/* <Route path="/Product/*">    */}
        
    {/* </Route> */}
    
    <Route path="doll" element={<Doll />}></Route>
        <Route path="phone" element={<Phone />}></Route>
        <Route path="tv" element={<Western/>}></Route>
        <Route path="beverage" element={<Bevarage/>}></Route>
        <Route path="snack" element={<Snack/>}></Route>
        
    <Route path ='AboutUS' element={< AboutUS/>} />  
    <Route path ="login" element={< Login/>} /> 
    <Route path ="/Cart/login" element={< Login/>} /> 
    <Route path ="/login/registration/login" element={< Login/>} /> 
    
    <Route path ="/login/registration" element={< Registration/>} /> 
    <Route path ="/Cart/login/registration" element={< Registration/>} /> 
    <Route path ="/cart/login/registration/login" element={< Login/>} /> 
    
  
   
    {/* <Route path ='Doll' element={<Doll />} /> */}
    
    <Route path ='/Home/Category' element={<Category />} />
    <Route path ='Product/Phone/Redmi' element={<Redmi />} />
    <Route path ='Product/Phone/Samsung' element={<Samsung />} />
    <Route path ='Product/Phone/Iphone' element={<Iphone />} />
    <Route path ='ContactUS' element={<ContactUS />} />
    <Route path ='cart' element={<Cart/>} />
    <Route path='/*' element={<Error />} />
     
</Routes>
</BrowserRouter> 

{/* <BrowserRouter>
<Navigator />
<Routes>
    <Route path="Home" element={< Home/>}/>
    <Route path="About" element={< About/>}/>
    <Route path="Contact" element={< Contact/>}/>
    
</Routes>
</BrowserRouter> */}
    </div>
  

    ); 
     
}

export default App;
