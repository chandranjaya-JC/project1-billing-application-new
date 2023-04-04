import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AddNewList } from '../../Features/ListSlice';
import './ListForm.css';


function ListForm({ newList }) {
  const [list, setList] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    setList(newList)
  }, [newList]);

  // console.log(list)
  const renderList = list.map((item, index) => {
    return (
      index > 2 ?
        <tbody key={index}>
          <tr>
            <td>{item.itemName}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>
        </tbody>
        :
        null
    )
  })

  const handlePrint = () => {
    dispatch(AddNewList(list))
  }

  const handleDelete = () => {
    setList([])
  }

  return (
    <div className= "ccontainer">
       <table className="table ">
        <thead className="table_header">
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        {(list.length > 1 ? renderList :
      <h3>Please add items</h3>)}
      </table>
      <div className='btn-container'>
        <button className='btn ' onClick={handlePrint}>Print</button>
        <button className='btn' onClick={handleDelete}>Delete</button>
      </div>
    </div>

  )
}

export default ListForm