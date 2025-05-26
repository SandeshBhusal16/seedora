
import HeroSection from '../Components/HeroSection'

import ProcessSteps from '../Components/ProcessSteps'
import Services from '../Components/Services'



const HomePage = () => {
  return (
    <div> 
      
      <HeroSection/>
     <div className="h-[1px] bg-white w-full" />
      <ProcessSteps/>
      <Services/>

    </div>
  )
}

export default HomePage
