import Navbar from "./components/Navbar"
import Aboutpage from "./pages/Aboutpage"
import Home from "./pages/Home"
import Contactpage from "./pages/Contactpage"
const App = () => {
  return (
    <div className="min-h-screen bg-black">
    <Navbar />
    <Home />
    <Aboutpage />
    <Contactpage />
    </div>
  )
}

export default App