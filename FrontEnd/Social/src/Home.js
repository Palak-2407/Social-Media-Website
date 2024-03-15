import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Counter from './counter'
export default function Home() {
  const [displayCounter]=useState(true)
  if(displayCounter){
    return <Counter></Counter>
  }
  return (
    <div>
        <h1>Home</h1>
    <Link to="/app">Logappin</Link><br></br>
    </div>
  )
}