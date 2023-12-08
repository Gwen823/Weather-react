import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import WeatherReact from "./weatherReact";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div className="container">
      <h1>React Weather App</h1>
      <WeatherReact defaultCity="New York" />
    
    <div>
      <ul></ul>
    </div>
    <footer>coded by Johana Abreu <a href="https://github.com/Gwen823/Weather-react.git" target="_blank" rel="noopener noreferrer">open source Github</a></footer>
    </div>
    </div>
  </StrictMode>
);
