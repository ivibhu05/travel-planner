import React from 'react'
import '../static/home.css'
import InputForm from './form'

function Home() {
  return (
    <div className='container'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className='home-title'>
          <span className='title'>Traveling Somewhere?</span><br/>
          <span className='sub-title'>Let's Plan things</span>
        </div>
        <div className='main-content'>
          <InputForm />
        </div>
      </div>
    </div>
  )
}

export default Home
