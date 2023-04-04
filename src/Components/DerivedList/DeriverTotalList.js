import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux';

function DeriverTotalList() {
  const [total, setTotal] = useState([[]])

  const Totallists = useSelector(state => state.TotalList.list)

  useEffect(() => {
    function fetchData() {

      setTotal(Totallists);
    }
    fetchData();
  });

  const filterData =  total[3];
  console.log(filterData)
  return (
    <div>DeriverTotalList</div>
  )
}

export default DeriverTotalList