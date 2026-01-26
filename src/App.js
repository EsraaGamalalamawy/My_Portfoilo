import React, { useEffect, useState } from "react";
import Main from "./component/main";
import Header from "./component/header";
import Skills from "./component/skills";
import About from "./component/about";
import Contact from "./component/contact";
import Proj from "./component/proj";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
const App=()=>{
  return(
      <div>
        <Header/>
        <Main/>
        <About/>
        <Skills/>
        <Proj/>
        <Contact/>
      </div>
  )
}
export default App