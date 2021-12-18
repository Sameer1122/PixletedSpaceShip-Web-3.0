import AfterCard from "./components/AfterCard.jsx";
import Card from "./components/Card.jsx";
import CountDown from "./components/CountDown.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";
import FourthSection from "./components/FourthSection.jsx";
import GetStarted from "./components/GetStarted.jsx";
import Hero from "./components/Hero.jsx";
import Navigation from "./components/Navigation.jsx";
import Parralax from "./components/Parralax.jsx";
import Progress from "./components/Progress.jsx";
import Scribentur from "./components/Scribentur.jsx";
import SeventhSection from "./components/SeventhSection.jsx";
import Team from "./components/Team.jsx";
import TwoCards from "./components/TwoCards.jsx";
import Vim from "./components/Vim.jsx";
import Aos from "aos";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <CountDown />
      <FourthSection />
      <Card />
      <TwoCards />
      <AfterCard />
      <SeventhSection />
      <Progress />
      <Vim />
      <Parralax />
      <Faq />
      <Team />
      <GetStarted />

      <Scribentur />
      <Footer />
    </div>
  );
}

export default App;
