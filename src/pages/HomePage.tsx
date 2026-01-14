import Header from "../compounts/header"
import Hero from "../compounts/hero"
import Footer from "../compounts/Footer"
import Skills from "../compounts/skills"
import About from "../compounts/About"
import ExperienceSection from "../compounts/experience"
import AwardsCarousel from "../compounts/AwardsCarousel"

const HomePage = () => {
  return (
    <div>
        <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <About/>

      <Skills/>
      <ExperienceSection/>
      <AwardsCarousel/>
      
      
      
      <Footer/>
    </div>

    </div>
  )
}

export default HomePage