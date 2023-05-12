import React, { Component } from 'react'
import axios from 'axios';
import './App.css';

 class Pro_Product extends Component {
    constructor(props){
    super(props)
    this.state={
        products:[]

    }
    }
    getAllProducts()
    {
        axios.get("http://localhost:3000/products").then((Response)=>{
            this.setState({
                products:Response.data
            })
        }).catch((error)=>
        {
            console.log("Unable to retrieve data");
        })
    }
    saveProduct=()=>{
        var data={
        id:5,
        name:"Mouse",
        price:25000
        }
        axios.post("http://localhost:3000/products",data).then((Response)=>{
            console.log("Data inserted Successfully")
    
        }).catch((error)=>
        {
            console.log("Unable to insert data");
        })
        
    } 
  render() {
    
        const product  = this.state.products.map((product)=>{
            return (
              
            <tr className="tr">
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
        )})
        return(
            <div>
                <table>
                    <thead className='tr'>
                        <td> Product ID </td>
                        <td> Product Name </td>
                        <td> Product Price</td>
                    </thead>
                    <tbody>
    
                        {product}
    
                    </tbody>
    
                </table>
    
                <button  onClick={()=>this.getAllProducts()}> Get All Products </button>
                <button  onClick={()=>this.saveProduct()}> save Products </button>
            </div>
    
        )
    
    }
    
    }
    
    
    
    export default Pro_Product;