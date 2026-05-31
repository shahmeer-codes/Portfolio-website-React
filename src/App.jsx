import React, { Suspense, lazy } from 'react';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

const Aboutpage = lazy(() => import("./pages/Aboutpage"));
const Myskills = lazy(() => import("./components/Myskills"));
const Myprojects_cards = lazy(() => import("./components/Myprojects_cards"));
const Contactpage = lazy(() => import("./pages/Contactpage"));
const Footer = lazy(() => import("./components/Footer"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh] bg-black">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-400"></div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Home />
      <Suspense fallback={<LoadingFallback />}>
        <Aboutpage />
        <Myskills />
        <Myprojects_cards />
        <Contactpage />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App