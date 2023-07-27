import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Landing from '../components/Landing'
import Projects from '../components/Projects'
import About from '../components/About'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Landing />
    <Topbar isOpen={ isOpen } toggle={ toggle } />
    <Sidebar toggle={ toggle } /> 
    <Projects />
    <About />
    <Resume />
    <Contact />
    <Footer />
    </>
  )
}

export default Home
