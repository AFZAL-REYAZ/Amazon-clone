import React from 'react'
import { useLocation } from 'react-router-dom';
import './AddToCart.css'

const AddToCart = () => {
    let {state} = useLocation()
    
    
  return (
    <div className='addtocart'>
           {
            state.map((val,id)=>{
                return ( 
                <div className='tablecart' key={id}>
                    <p>My Choice</p>
                    <img src={val.image} alt="loding"></img>
                    {val.name}
                    {val.price}
                    <button type="button" className="btn btn-primary">BUY KNOW</button>
                </div>
                )
            })
           }
    </div>
  )
}

export default AddToCart