import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import ServiceList from "../Pages/Services";
import SiteAssistance from "../Pages/Help";
import About from "../Pages/About";
import PagenotFound from "../Pages/404";
import GetStarted from "../Pages/GetStarted";
import Contact from "../Pages/Contact";

export function Main() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage/>} />
      <Route path="/GetStarted" element={<GetStarted/>} />
      <Route path="/Service" element={<ServiceList />} />
      <Route path="/Assistance" element={<SiteAssistance />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/*" element={<PagenotFound/>}/>
    </Routes>
  );
}
