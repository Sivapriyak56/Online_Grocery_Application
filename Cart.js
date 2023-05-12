import { useContext,useState } from "react"
import { Cartcontext } from "./context/Context"
// import * as Icons from 'react-icons/fa'
import {Link} from 'react-router-dom'
import ShippingAddress from "./ShippingAddress";
import * as Icons from 'react-icons/ai'

const Cart=()=>{
    const Globalstate=useContext(Cartcontext);
    const state=Globalstate.state;
    const dispatch=Globalstate.dispatch;
    var totalCartPrice=0;
    var count=0;
   

    const [items, setItems] = useState([]);    
   
    return (
    <div>
 
 
    <div className="cart_nav">
   
        {state.map((item,index)=>{

            totalCartPrice+=item.product_price * item.quantity + 50
            count=count+1
            localStorage.setItem("count",count)
            // window.location.reload()
            
        return (
           
            <div className="card_nav" key={index}>
                <img src={item.thump} alt="phto"></img>
                
              <p>{item.product_name}</p>
                <p>{item.quantity}*{item.product_price} = {item.quantity * item.product_price}</p>
                <div className="quantity">
                    <button onClick={() => dispatch({ type: 'INCREASE', payload: item })}>+</button>
                    <p>{item.quantity}</p>
                    <button onClick={() =>
                    {
                        if(item.quantity>1)
                        {
                            dispatch({ type: 'DECREASE', payload: item })
                        }else {
                            dispatch({ type: 'REMOVE', payload: item })
                        }
                    }}>
                    -
                    </button>
                </div>
                    <h2 style={{marginRight:"60px"}} onClick={() => dispatch({ type: 'REMOVE', payload: item })}>
                        {/* <Icons.FaTrash /> */}
                        <Icons.AiFillDelete/>
                    </h2>
                    
            </div>
                    



           
        )})}
       
           
    </div>
    <table  className="table">
       
    <div className="checkout">
    <h4><tr><td>DELIVERYCHARGE:</td><td><div className="cart_div">50</div></td></tr>
   
    <tr><td> GRANDTOTAL:</td> <td><div className="cart_div">{totalCartPrice}{ localStorage.setItem("total",totalCartPrice)}</div></td>
    
    
    </tr>   
    </h4>
    </div>
    
    {/* </div> */}
<tr>

<td>
 <Link to="/ShippingAddress" ><button className="cart_button">Order</button></Link>
 </td>
 </tr> 
 </table>
  </div> 

  
    )

               
}

export default Cart;