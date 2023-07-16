'use client'
import React, { useState, useEffect } from 'react'

// object to array
const filterJson = (json) => {
  var _items = []
  for (let item in json) {
    _items = _items.concat(json[item])
  }
  return _items
}  

export default function Home() {
  const [data, setData] = useState(null)
 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://blockchain.info/ticker')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      setData(filterJson(result))
    }
 
    fetchData().catch((e) => {
      // handle the error as needed
      console.error('An error occurred while fetching the data: ', e)
    })
  }, [])

  const items = (data && data.length) ? data.map((item, key) =>
    <li key={key.toString()}>
       <code>${item.last}</code> <b>{`${item.symbol}`}</b>
    </li>
  ) : <div>cargando...</div>

  return (
    <div>
      <b>1 BTC = </b>
      <ul style={{"padding-left": "20px"}}>{items}</ul>
    </div>
  )
}