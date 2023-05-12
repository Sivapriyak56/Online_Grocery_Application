import React, { Component } from 'react'
// import './Payment.css'
import {FaCcVisa,FaCcMastercard} from 'react-icons/fa'



export class Payment extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items:localStorage.getItem("item"),
       order:localStorage.getItem("order"),
       total:localStorage.getItem("total"),
       street:localStorage.getItem('street'),
       state:localStorage.getItem('state'),
       pin:localStorage.getItem('pin'),
       phone:localStorage.getItem('phone')

    }
  }
  onSubmit(event){
    alert("Payment Successfull...Successfully ordered");
    alert("Thankyou for shopping with us....")
    window.location.href="/Home"
  }
 
  render()  {
    return(
        <div className='flex'><center>
</center>
<div className='col-50 flex'>

  
  <table>
  <center><h1>Payment</h1></center>
    <tr>
      <td>Accepted Cards</td>
    </tr>
    <tr><div class="icon-container">
    <i><FaCcVisa color='navy'/></i>
    <i><FaCcMastercard color='red'/></i>
              
            </div></tr>
    <tr>
    <label className='labelp' for="cname">Name on Card</label>
            <input className='inputp' type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <label className='labelp' for="ccnum">Credit card number</label>
            <input className='inputp' type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label className='labelp' for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
            
    </tr>
    <tr>
    <div class="row">
              <div className="col-50">
                <label className='labelp' for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>
              <div className="col-50">
                <label className='labelp' for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
      </div>
    </tr>
    <tr>
    <button type="submit" value="Continue to checkout" onClick={(event)=>this.onSubmit(event)}>Continue to checkout</button>
    </tr>
  </table>
  <div className="row1">
            <div className="col-75">
               <div className="container1">
                  <form>
                      <div className="row">
                        <div className="col-50">
                          <h3>Order Details</h3>
                          <table>
            <tr>
              <td>Items:</td><td>{this.state.items}</td>
            </tr>
            <tr>
              <td>Sub Total:</td><td>₹{this.state.order}</td>
            </tr>
            <tr>
              <td>Shipping:</td><td>₹50</td>
            </tr>
            <tr>
              <td>Amout Payable:</td><td>₹{this.state.total}</td>
            </tr>
          </table>
                       
                          <div style={{color:"green"}}><center> Ships in within 4-6 days</center></div>

                          </div>

          <div className="col-50">
          <h3>Shipping Address</h3>
          <table>
            <tr>
              <td>State:</td><td>{this.state.state}</td>
            </tr>
            <tr>
              <td>Street:</td><td>{this.state.street}</td>
            </tr>
            <tr>
              <td>Pin:</td><td>{this.state.pin}</td>
            </tr>
            <tr>
              <td>Phone:</td><td>{this.state.phone}</td>
            </tr>         
          </table>
          <label className='labelp'>
          <input type="checkbox"  /> Shipping address same as billing
        </label>       
          </div>
        </div>       
      </form>
    </div>
  </div>
</div> 
</div>


</div>  
    )
  }
}

export default Payment