import React, { useState } from 'react';
import './Modal.css'

function Modal({ closeModal }) {
    const [row,setRow] = useState({
        itemName:'',
        price: '',
        remainingQuantity: ''
    })

    const handleChange = (e) => {
        setRow({
            ...row,
            [e.target.name]: e.target.value,
            
        })
    }

    const handleSubmit = (e) => {
        e.preventDefult();
        console.log(row)

    }
  return (
    <div className='modal-container' 
    onClick={(e)=>{
        if(e.target.className === "modal-container")closeModal()
        }}>
        <div className='modal'>
            <form className='modal-form' onSubmit={(e) => handleSubmit(e)} >
                <div className='form-group'>
                    {/* <label htmlFor="item Name">Item Name</label> */}
                    <input 
                    className='addform_input' 
                    type="text" 
                    name="itemName" 
                    onChange={handleChange}
                    value={row.itemName}
                    placeholder='item Name' 
                    required
                    />
                </div>
                <div className='form-group'>
                    {/* <label htmlFor="quantity">Quantity</label> */}
                    <input  
                    className='addform_input'
                    type="text" 
                    name="remainingQuantity" 
                    onChange={handleChange}
                    value={row.remainingQuantity}
                    placeholder='quantity'
                    required
                    />
                </div>
                <div className='form-group'>
                    {/* <label htmlFor="price">Price</label> */}
                    <input 
                    className='addform_input' 
                    type="text" 
                    name="price" 
                    onChange={handleChange}
                    value={row.price}
                    placeholder='price'
                    required
                    />
                </div>
                
                <button type="submit" className='btn'>Add Changes</button>
            </form>
        </div>
    </div>
  )
}

export default Modal