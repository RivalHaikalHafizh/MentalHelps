import React from "react";
import Navbar from "./components/Navbar";
import Age from "./components/Age";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Screentime from "./components/Screentime";
import Irregulareatinghabits from "./components/Irregulareatinghabits";
import Exercisedepressiveness from "./components/Exercisedepressiveness";
import Missunderstanduingoverthingking from "./components/Missunderstanduingoverthingking";
import Numerik from "./components/Numerik";
import Predict from "./components/Predict";
import Foother from "./components/Foother";

function App() {
  React.useEffect(() => {
  }, []);

  return (
    <div className="App bg-white">
      <Navbar />
      <Hero />
      <Age />
      <Education />
      <Screentime/>
      <Irregulareatinghabits/>
      <Exercisedepressiveness/>
      <Missunderstanduingoverthingking/>
      <Numerik/>
      <Predict/>
      <Foother/>
    </div>
  );
}

export default App;
