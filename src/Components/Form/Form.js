import { render } from "@testing-library/react"
import { useState } from "react"
import AddFrom from "../AddForm/AddFrom"
import ListForm from "../ListForm/ListForm"
import "./Form.css"

function Form() {
  const [newList, setNewList] = useState([])
  const [name, setName] = useState('')
  const event = new Date();
  const date = event.toLocaleDateString()
  const time = event.toLocaleTimeString()

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'name') {
      setName(value)
    }
  }

  

  const handleCustomerDetails = (e) => {
    e.preventDefault()
    setNewList([name, date, time , ...newList])
    setName('')
     
  }

  
  // console.log(newList)

  const handleList = (list) => {
    setNewList([...newList, list])
    // console.log(...newList)
    // newList.map((data,i) => {
    //   return(
    //     console.log(data.price)
    //   )
    // })
  }

  const handleDelete = () => {
    setNewList([])
  }

  return (
    <div className="form_container">
      <AddFrom handleList={handleList} />
      <form onSubmit={handleCustomerDetails}>
      <input
        type='text'
        name='name'
        className='addform_input'
        placeholder='Customer Name'
        value={name}
        onChange={(e) => handleChange(e)}
        required
      />
      <button
        
        className="btn"
      >
        Add Customer Info
      </button>
      </form>

      <ListForm newList={newList} handleDelete={handleDelete} />
      
    </div>
  )
}

export default Form