import React, { Suspense, useEffect, useState } from 'react';
import './TotalList.css'
import { AddNewList } from '../../Features/ListSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { fetchListData } from '../../Features/ListSlice';

function TotalList() {
  const [total, setTotal] = useState([[]])

  const dispatch = useDispatch()

  
  //to fetch data from srever
  // useEffect(() => {
  //   dispatch(fetchListData())

  // }, []);

  const Totallists = useSelector(state => state.TotalList)

  useEffect(() => {
    function fetchData() {
      setTotal(Totallists.list);
    }
    fetchData();
  }, [Totallists]);
  // console.log(...total)

  const renderedLists = total.map((data, index) => {
    return (
      <div>
        <table className='table'>
          <tbody className='tbody'>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>

            {data.map((subitem, i) => {

              return (
                // console.log(subitem)
                i > 3 ?
                  <tr key={Math.random()}>

                    <td>{subitem.itemName}</td>
                    <td>{subitem.quantity}</td>
                    <td>{subitem.price}</td>
                  </tr> : null

              )
            })}
            <tr>
              <td colSpan={2}>total</td>
              <td>{data[0]}</td>
            </tr>
          </tbody>
        </table>
        <ul className='list '>
          <li className='listcontent'>Customername : {data[1]}</li>
          <li className='listcontent'>Date : {data[2]}</li>
          <li className='listcontent'>Time : {data[3]}</li>
        </ul>
      </div>
    )
  })

  return (
    <div className='container'>
      {/* <button className='btn' onClick={renderedLists()}>Refresh</button> */}
      {Totallists.loading && <div>Loading...</div>}
      {!Totallists.loading && renderedLists}

    </div >
  )
}

export default TotalList



// [
  // ["3/25/2023",'Customername', "1:16:13 PM",
  //   {itemName:"Milk2", quantity: '1', price: '60'},
  //   {itemName:"orange2", quantity: '2', price: '40'},
  //   {itemName:"banana2", quantity: '10', price: '20'},
  // ],
  // ["1/31/2023","jc","2:45:32 PM"}
  //   {itemName:"grape", quantity: '1', price: '620'},
  //   {itemName:"apple", quantity: '2', price: '4350'},
  //   {itemName:"watermelon", quantity: '10', price: '2340'},
  // ],
// ]

// const date = total.map((data) => {
//   return (
//     data.map((subitem) => {
//       return (
//         subitem.date
//       )
//     })
//   )
// })

// const time = total.map((data) => {
//   return (
//     data.map((subitem) => {
//       return (
//         subitem.time
//       )
//     })
//   )
// })

// [
//   [
//     {itemName:"Milk2", quantity: '1', price: '60',namedatetimeinfo:{date:"3/25/2023",name:"Jaya",time: "1:16:13 PM"}},
//     {itemName:"orange2", quantity: '2', price: '40',namedatetimeinfo:{date:"3/25/2023",name:"Jaya",time: "1:17:54 PM"}},
//     {itemName:"banana2", quantity: '10', price: '20',namedatetimeinfo:{date:"3/25/2023",name:"Jaya",time: "1:18:32 PM"}},
//     {itemName:"Milk2", quantity: '1', price: '60',namedatetimeinfo:{date:"3/25/2023",name:"Jaya",time: "1:16:13 PM"}},
//     {itemName:"orange2", quantity: '2', price: '40',namedatetimeinfo:{date:"3/25/2023",name:"Jaya",time: "1:17:54 PM"}},
//     {itemName:"banana2", quantity: '10', price: '20',namedatetimeinfo:{date:"3/25/2023",name:"Jaya",time: "1:18:32 PM"}},
//     {itemName:"Milk2", quantity: '1', price: '60',namedatetimeinfo:{date:"3/25/2023",name:"Jaya",time: "1:16:13 PM"}},
//     {itemName:"orange2", quantity: '2', price: '40',namedatetimeinfo:{date:"3/25/2023",name:"Jaya",time: "1:17:54 PM"}},
//     {itemName:"banana2", quantity: '10', price: '20',namedatetimeinfo:{date:"3/25/2023",name:"Jaya",time: "1:18:32 PM"}},
//   ],
//   [
//     {itemName:"grape", quantity: '1', price: '620',namedatetimeinfo:{date:"1/31/2023",name:"jc",time: "2:43:13 PM"}},
//     {itemName:"apple", quantity: '2', price: '4350',namedatetimeinfo:{date:"1/31/2023",name:"jc",time: "2:44:54 PM"}},
//     {itemName:"watermelon", quantity: '10', price: '2340',namedatetimeinfo:{date:"1/31/2023",name:"jc",time: "2:45:32 PM"}},
//   ],
// ]

