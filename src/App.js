import './App.css'

// Components
import { CTA, Brand, Navbar } from './components'
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGpt,
} from './containers'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
