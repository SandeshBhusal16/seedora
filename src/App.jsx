import React from 'react'
import AppRoutes from './Routes/AppRoutes'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



const App = () => {
  return (
    <div>
     <Navbar/>
      <AppRoutes/>
      <Footer/>

   
    </div>
  )
}

export default App;
