import React from "react";
import ReactDOM from "react-dom";
import "./Assets/Css/global.css";
import "./Assets/Css/style.css";
import "./Assets/Css/responsive.css";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Containers/Main";
import PageHeader from "./Containers/Header";
import Footer from "./Containers/Footer";
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; 
import {paypal} from "./Utils/API";

const paypalOptions = {
  "client-id": paypal,
  currency: "USD",
};

function App() {
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <div className="app">
        <PageHeader />
        <Main />
        <Footer />
      </div>
    </PayPalScriptProvider>
  );
}

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  root
);
