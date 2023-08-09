'use client'
import React, { useState, useEffect } from 'react'

const apiURL = 'https://blockchain.info/ticker'

export default function Home() {
  const [data, setData] = useState(null)

  const fetchData = async (url) => {
    const response = await fetch(url)
    if (!response.ok) {
      setData([])
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const result = await response.json()
    setData(Object.entries(result))
  }

  useEffect(() => {
    fetchData(apiURL).catch((e) => {
      // handle the error as needed
      console.error('An error occurred while fetching the data: ', e)
    })
  }, [])

  const items = (data && data.length) ? data.map((item, key) =>
    <li key={key.toString()}>
      <samp>${`${item[1].last}`} <kbd>{`${item[0]}`}</kbd></samp>
    </li>
  ) : <div>cargando...</div>

  return (
    <>
      <ul>
        <h3>₿1 <kbd>BTC</kbd> = </h3>
        {items}
      </ul>
    </>
  )
}