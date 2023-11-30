import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import WeatherReact from "./weather-react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>React Weather App</h1>
      <WeatherReact />
    </div>
    <div>
      <ul></ul>
    </div>
    <h4></h4>
  </StrictMode>
);
