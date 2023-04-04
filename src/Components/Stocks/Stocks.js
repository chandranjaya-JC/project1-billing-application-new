import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai'
import './Stocks.css';


function Stocks() {
  const [list, setList] = useState([
    {
      itemName: '',
      price: '',
      remainingQuantity: ''
    }
  ]);
  const [modalOpenAdd, setModalOpenAdd] = useState(false)
  const [modalOpenEdit, setModalOpenEdit] = useState(false)
  const [row, setRow] = useState({

    itemName: '',
    price: '',
    remainingQuantity: ''
  })
  const [editedRow,setEditedRow] = useState({
    itemName: '',
      price: '',
      remainingQuantity: ''

  })

  const closeModalAdd = () => (setModalOpenAdd(false))

  const closeModalEdit = () => (setModalOpenEdit(false))

  // const [stockUpdatedQuantity, setStockUpdatedQuantity] = useState('')
  // const [stockItemName, setStockItemName] = useState('')

  const StockList = useSelector(state => state.StockList.Stocks)

  useEffect(() => {
    function setData() {
      setList(StockList)
    }
    setData()
  }, [StockList])


  const handleDelete = (index) => {
    console.log(index)
    const filteredList = list.filter((_, idx) => idx !== index)
    setList(filteredList)
  }

  const handleEdit = (index) => {
    const filteredList = list.filter((_, idx) => idx !== index)
    setList(filteredList)
  }

  const renderedStock = list.map((data, index) => {
    return (
      <tr key={data.id}>
        <td>{data.itemName}</td>
        <td>{data.remainingQuantity}</td>
        <td>{data.price}</td>
        <td>
          <AiOutlineDelete
            onClick={() => handleDelete(index)}
          />
        </td>
      </tr>
    )
  })

  const handleChange = (e) => {
    setRow({
      ...row,
      [e.target.name]: e.target.value,
    })
    console.log(row)
  }

  const handleStockUpdate = (e) => {
    e.preventDefault()
    setList([row, ...list])
    setRow({
      itemName: '',
      price: '',
      remainingQuantity: ''
    })
    (closeModalAdd() ? closeModalAdd() : closeModalEdit())
    
  }
  const handleStockEdit = (e) => {
    e.preventDefault()
    const filter =- list.filter((data,index) => data.itemName !== e.target.value)
    setList([row, ...filter])
    setRow({
      itemName: '',
      price: '',
      remainingQuantity: ''
    })
    closeModalEdit()
  }

  const modal = <div className='modal'>
    <form onSubmit={handleStockUpdate} className='modal-form'>
      <div className='form-group'>
        <input
          type='text'
          name='itemName'
          className='addform_input'
          placeholder='Item Name'
          value={row.itemName}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type='text'
          name='price'
          className='addform_input'
          placeholder='Update price'
          value={row.price}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type='text'
          name='remainingQuantity'
          className='addform_input'
          placeholder='Update Quantity'
          value={row.remainingQuantity}
          onChange={(e) => handleChange(e)}
          required
        />
        <button
          className="btn"
        >
          Add Changes
        </button>
      </div>
    </form>
  </div>

  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Remaining Quantity</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {renderedStock}
        </tbody>
      </table>
      {modalOpenAdd && <div className='modal-container'
        onClick={(e) => {
          if (e.target.className === "modal-container") closeModalAdd()
        }}>
        {modal}
      </div>}
      {modalOpenEdit && <div className='modal-container'
        onClick={(e) => {
          if (e.target.className === "modal-container") closeModalEdit()
        }}>
        {modal}
      </div>}
      <div className='btn-container'>
        <button
          onClick={() => setModalOpenAdd(true)}
          className='btn'
        >
          ADD
        </button>
        <button
          onClick={() => setModalOpenEdit(true)}
          className='btn'
        >
          Edit
        </button>
      </div>
    </div>
  )
}

export default Stocks

// item : {stockItemName}
//        price : {stockUpdatedPrice}
//       quantity : {stockUpdatedQuantity}