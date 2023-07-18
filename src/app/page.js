'use client'
import React, { useState, useEffect } from 'react'

const apiURL = 'https://blockchain.info/ticker'
const toArray = (json) => {
  let _items = []
  for (let item in json) {
    _items = _items.concat(json[item])
  }
  return _items
}

export default function Home() {
  const [data, setData] = useState(null)
  const fetchData = async (url) => {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const result = await response.json()
    setData(toArray(result))
  }

  useEffect(() => {
    fetchData(apiURL).catch((e) => {
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