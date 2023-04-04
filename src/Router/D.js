import React from 'react'
import { useState } from 'react';
import Form from '../Components/Form/Form'
import Navbar from '../Components/Navbar/Navbar';
import Modal from '../Components/Stocks/Modal/Modal';
import Stocks from '../Components/Stocks/Stocks';

function D() {
  

  const rows = [
    {ItemName: "page 1", remainingQuantity: "20", price: "10"},
    {ItemName: "page 2", remainingQuantity: "30", price: "10"},
    {ItemName: "page 3", remainingQuantity: "40", price: "10"},
    {ItemName: "page 4", remainingQuantity: "50", price: "10"}
  ]
  // const closeModal =()=>(setModalOpen(false))

  return (
    <div>
        <Navbar />
        <Stocks  />
    </div>
  )
}

export default D