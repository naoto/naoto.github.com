import React from 'react'

const About: React.FC = () => {
  return (
    <>
    <h1>About</h1>
    <div className='about-line'>
      <span className='label'>Name: </span>
      <span className='label-value'>Naoto</span>
    </div>
    <div className='about-line'>
      <span className='label'>Twitter:</span>
      <span className='label-value'><a href="https://www.twitter.com/naotos">@naotos</a></span>
    </div>
    <div className='about-line'>
      <span className='label'>Github: </span>
      <span className='label-value'><a href="https://github.com/naoto">github.com/naoto</a></span>
    </div>
    </>
  )
}

export default About