import AccordionPanel from './Components/AccordionPanel';
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
    </div>
  );
}

export default App;
