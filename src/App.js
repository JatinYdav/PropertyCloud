import AccordionPanel from './Components/AccordionPanel';
import ContactSection from './Components/ContactSection';
import LandingPage from './Components/LandingPage';
import PopularResidences from './Components/PopularResidences';
import Societies from './Components/SocietyLogos';
function App() {
  return (
    <div className="App">
      <LandingPage/>
      <Societies/>
      <PopularResidences/>
      <AccordionPanel/>
      <ContactSection/>
    </div>
  );
}

export default App;
