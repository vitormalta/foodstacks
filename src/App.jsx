import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import api from "./services/api";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState([]);

  useEffect(() => {
    api.get("/shops")
      .then(response => {
        if (response.status === 200) {
          setLandingPageData(response.data)
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Services data={landingPageData} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
