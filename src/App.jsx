import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Skills from "./Components/Experience/Skills"
import Projects from "./Components/Projects/Projects"
import Footer from "./Components/Footer/Footer"

function App() {
  return <div className="bg-[#355e84] h-auto width-full overflow-hidden">
    <Navbar />
    <Home />
    <About />
    <Skills/>
    <Projects/>
    <Footer/>
   
  </div>
}
  

  
export default App
