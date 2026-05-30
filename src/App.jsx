import Navbar from "./components/Navbar"
import Aboutpage from "./pages/Aboutpage"
import Home from "./pages/Home"
const App = () => {
  return (
    <div className="min-h-screen bg-black">
    <Navbar />
    <Home />
    <Aboutpage />
    </div>
  )
}

export default App