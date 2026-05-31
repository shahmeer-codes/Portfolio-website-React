import Navbar from "./components/Navbar"
import Aboutpage from "./pages/Aboutpage"
import Home from "./pages/Home"
import Contactpage from "./pages/Contactpage"
import Footer from "./components/Footer"
import Myskills from "./components/Myskills";
import Myprojects_cards from "./components/Myprojects_cards";

const App = () => {
  return (
    <div className="min-h-screen bg-black">
    <Navbar />
    <Home />
    <Aboutpage />
    <Myskills />
    <Myprojects_cards />
    <Contactpage />
    <Footer />
    </div>
  )
}

export default App