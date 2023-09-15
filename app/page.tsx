import Image from 'next/image'
import Index from './pages'
import NavBar from './layout/navbar'
import Header from './pages/Header'
import Services from './pages/Services'
import Projects from './pages/Projects'

export default function Home() {
  return (
    <>
    <NavBar/>
    <Header/>
    <Services/>
    <Projects/>
    </>
  )
}
