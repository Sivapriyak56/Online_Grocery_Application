import React, { Component } from 'react'
import axios from 'axios'
import './Style.css'
import { withWidth } from '@material-ui/core'


export class ShippingAddress extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        street:'',
        states:'',
        district:' ',
        pin:'',
        phone:'',
        loginid:localStorage.getItem("loginid"),
        total:localStorage.getItem("total")
      }
    }
    onStreetHandler(event){
        this.setState({
            street:event.target.value
            
        })
    }
    
    onPinHandler(event){
        this.setState({
            pin:event.target.value
        })
    }
    onPhoneHandler(event){
        this.setState({
            phone:event.target.value
        })
    }
    onStateHandler(event){
        this.setState({
            states:event.target.value
        }
        )
    }
    onDistrictHandler(event){
        this.setState({
            district:event.target.value
        }
        )
    }
    onSubmitHandler(event){
        event.preventDefault()
        var data={
            Street:this.state.street,
            State:this.state.states,
            district:this.state.district,
            Pin:this.state.pin,
            Phone:this.state.phone
        }
        
        axios.post("http://localhost:3000/user",data).then(response=>{
            alert("Thankyou for filling Shipping address") 
            localStorage.setItem('street',this.state.street)
            localStorage.setItem('state',this.state.states)
            localStorage.setItem('state',this.state.district)
            localStorage.setItem('pin',this.state.pin)
            localStorage.setItem('phone',this.state.phone)
            window.location.href="/Payment" 
            // localStorage.setItem('status',true);
            // localStorage.setItem('addresid',data.id);
                        
  }).catch((error)=>
  {
      console.log("Unable to retrieve data");
  })
        
        

    }
  render() {
   
    return (
      <div className='shopback'>
      <center>
      <form onSubmit={(event)=>this.onSubmitHandler(event)}>
      
      
      <h3 style={{ color:"green"}}>Amount Payable: {this.state.total}₹
      <br></br><i style={{color:"orange"}}>Ships within 1 day</i>
      </h3>

      <h1>Enter Your Shipping Address</h1>
      
      <table className="conts">
        <tr>
            <td>
                <label className='label1'>
                    Street Address:
                </label>
            </td>
            <td>
                <input type="textarea" placeholder='enter your street address' value={this.state.street} onChange={(event)=>this.onStreetHandler(event)} required ></input><br/>
            </td>
            
        </tr>

        <tr>
            <td>
                <label className='label'>
                    Country:
                </label>
            </td>
            <td>
            {/* <CountrySelector /> */}<input type="text"/>
            </td>
        </tr>
        <tr>
            <td>
                <label className='labelpin'>
                    State:
                </label>
            </td>
            <td>
            <input className='shiptext' type="text" placeholder='State' value={this.state.states} onChange={(event)=>this.onStateHandler(event)} required ></input><br/>
            </td>
        </tr>

        <tr>
            <td>
                <label className='label2'>
                    District:
                </label>
            </td>
            <td>
            <input className='shiptext' type="text" placeholder='District' value={this.state.district} onChange={(event)=>this.onDistrictHandler(event)} required ></input><br/>

            </td>
        </tr>

        <tr>
            <td>
                <label className='labelpin'>
                    PIN Code:
                </label>
            </td>
            <td>
            <input className='shiptext' type="text" placeholder='enter your pin code' value={this.state.pin} onChange={(event)=>this.onPinHandler(event)} required ></input><br/>
            </td>
        </tr>

        <tr>
            <td>
                <label>
                    Mobile:
                </label>
            </td>
            <td>
            <input className='shiptext' type="text" placeholder='enter your phone' value={this.state.phone} onChange={(event)=>this.onPhoneHandler(event)} ></input><br/>
            </td>
        </tr>
      </table>
              <button className='save' type='submit' value='submit'>Save and Continue</button>       
      </form>
      </center>
      </div>
    )
    
  }
  
}

export default ShippingAddress