import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AddNewList } from '../../Features/ListSlice';
import './ListForm.css';
import { fetchListData } from '../../Features/ListSlice';


function ListForm({ newList, handleDelete }) {
  const [list, setList] = useState([])
  const [tot, setTot] = useState(-1)
  // const [sendList, setSendList] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    setList(newList)
  }, [newList, list]);

  // console.log(tot)
  useEffect(() => {
    setTot(-1)
    list.map((item, index) => {
      (list.length == 4 ? setTot(Number(item.price)) : setTot(tot + Number(item.price)))
    })
  }, [list]);

  // console.log(list)

  const total = <tbody>
    <tr>
      <td colSpan={2}>TOTAL</td>
      <td>{tot}</td>
    </tr>
  </tbody>
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
  // console.log("jhgjh" ,sendList)
  
  const handlePrint = () => {
     const sendList = [tot, ...list]
      dispatch(AddNewList(sendList))
      // console.log("jhgjh", sendList)
    handleDelete()

    


  }



  return (
    <div className="ccontainer">
      <table className="table ">
        <thead className="table_header">
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        {(list.length > 1 ? renderList :
          <td colSpan={3}>Please add items & customer Name</td>)}
        {(list.length > 1 ? total : null)}
      </table>
      <div className='btn-container'>
        <button className='btn ' onClick={handlePrint}>Print</button>
        <button className='btn' onClick={handleDelete}>Delete</button>
      </div>
    </div>

  )
}

export default ListForm