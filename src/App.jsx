import React from "react";
import ContextProvider from './context/Context.jsx'
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";

// img
import personOne from "../public/person-one.png"
import personTwo from "../public/person-two.png"

function App() {


  return (
    <ContextProvider>
      <div className="app">
        <Header1 img={personOne} name={"Alex"} networkStatus={"Онлайн"} />
        <Header2 img={personTwo} name={"Evgeniy"} networkStatus={"Онлайн"} />
      </div>
    </ContextProvider>
  );
}

export default App;
