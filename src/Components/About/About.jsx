import React from 'react'
import img55 from 'file:///E:/eslam/application/src/images/about.png'

export default function About() {
  return (<>
  <div className="container py-5 text-center">
    <h1>About Us</h1>
    <div className="row">
      <div className="col-md-6 py-5">
      <img src={img55} className='w-75' alt="" />
      </div>
      <div className="col-md-6" style={{'paddingTop':'200px'}}>
        <h2>Welcome to <strong>SBS</strong>, </h2>
        <h5>
          where we provide innovative solutions for 
          modern, intelligent buildings. Our platform integrates smart technology to enhance 
          security, efficiency, and comfort in residential and commercial spaces.
        </h5>
      </div>
    </div>
  </div>
  </>
  )
}
