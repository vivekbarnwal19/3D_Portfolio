import LogoSection from "./components/LogoSection"
import NavBar from "./components/NavBar"
import FeatureCards from "./sections/FeatureCards"
import HeroSection from "./sections/HeroSection"
import ShowcaseSection from "./sections/ShowcaseSection"

const App = () => {
  return (
    <>
    <NavBar />
    <HeroSection />
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards />
    </>
  )
}

export default App