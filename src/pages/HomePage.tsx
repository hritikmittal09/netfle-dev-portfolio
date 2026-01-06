import Header from "../compounts/header"
import Hero from "../compounts/hero"
import Footer from "../compounts/Footer"
import Skills from "../compounts/skills"
import About from "../compounts/About"

const HomePage = () => {
  return (
    <div>
        <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <About/>

      <Skills/>
      
      
      
      <Footer/>
    </div>

    </div>
  )
}

export default HomePage