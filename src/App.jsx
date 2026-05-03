import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {


  return (
    <>
    Hello Namste 
    <div className="design">
      <div className="left">
        <h1 className="title">Unlimited movies, TV shows, and more.</h1>
        <h2 className="subtitle">Watch anywhere. Cancel anytime.</h2>
        <p className="description">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="input-container">
          <input type="email" placeholder="Email address" className="email-input" />
          <button className="get-started-button">Get Started</button>
        </div>
      </div>
      <div className="right">
        <img src={heroImg} alt="Hero" className="hero-image" />
      </div>
    </div>


    <div className="text-3xl font-bold underline text-center mt-10 text-red-500">
      Hello world!
    </div>
    </>
  )
}

export default App
