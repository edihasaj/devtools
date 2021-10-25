import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import {Routes} from "./components/routing/Routes";
import NavbarPage from "./components/utils/Navbar";
import {MDBContainer} from "mdbreact";

export default function App() {
  return (
      <Router>
        <MDBContainer>
          <NavbarPage />

          <Routes />
        </MDBContainer>
      </Router>
  );
}