import React, { useState } from 'react';
import './AddForm.css'

function AddFrom({handleList}) {
    const [itemName, setItemName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [name, setName] = useState('')

    const event = new Date();
    const date = event.toLocaleDateString()
    const time = event.toLocaleTimeString()
    // console.log(event)
    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'ItemName') {
            setItemName(value)
        } else if (name === 'quantity') {
            setQuantity(value)
        } else if (name === 'price') {
            setPrice(value)
        }else if (name === 'name') {
            setName(value)
        }
    }

    const handleAdd = (e) => {
        e.preventDefault()
        handleList({ itemName, quantity, price})
        setItemName('')
        setQuantity('')
        setPrice('')
        setName('')
        
    }
    return (
        <form 
        className='addform_container'
        onSubmit={(e) => handleAdd(e)}
        >
            <div className='addform_container_two'>
            <input
                type='text'
                name='ItemName'
                className='addform_input'
                placeholder='item Name'
                value={itemName}
                onChange={(e) => handleChange(e)}
                required
            />
            <input
                type='text'
                name='quantity'
                className='addform_input'
                placeholder='Quantity'
                value={quantity}
                onChange={(e) => handleChange(e)}
                required
            />
            <input
                type='text'
                name='price'
                className='addform_input'
                placeholder='Price'
                value={price}
                onChange={(e) => handleChange(e)}
                required
            />
              
            <button
                type='submit'
                className=' btn'
            >
                Add
            </button>
            </div>
        </form>
    )
}

export default AddFrom


{/* <input
type='text'
name='name'
className='addform_input'
placeholder='Customer Name'
value={name}
onChange={(e) => handleChange(e)}
/> */}