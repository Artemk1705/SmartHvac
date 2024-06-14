import React from "react";
import ReactDOM from "react-dom/client";
import amplifyconfig from "./amplifyconfiguration.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Amplify } from "aws-amplify";
import "./assets/styles/index.css";
import Mainpage from "./components/pages/mainpage";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Careers from "./components/pages/careers";
import Servform from "./components/pagesContent/careersPageContent/careerforms/servform";
import Schedule from "./components/pages/schedule";
import Financing from "./components/pages/financing";
import Products from "./components/pages/porducts";
import MaintenancePlan from "./components/pages/mainPlan";

Amplify.configure(amplifyconfig);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Financing" element={<Financing />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/MaintenancePlan" element={<MaintenancePlan />} />
        <Route path="/careerforms/Servform" element={<Servform />} />
      </Routes>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter
      basename={process.env.PUBLIC_URL}
      onPopState={() => window.scrollTo(0, 0)}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
