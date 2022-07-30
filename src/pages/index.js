import React, {useState} from 'react'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Info from '../components/info'
import Services from '../components/services'
import { aboutSection, musicSection, showsSection, contactSection } from '../components/info/Data'
import Footer from '../components/footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Hero />
      <Info {...aboutSection}/>
      <Info {...musicSection}/>
      {/* <Services /> */}
      <Info {...showsSection}/>
      <Info {...contactSection}/>
      <Footer/>
    </>
  )
}

export default Home