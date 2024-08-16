import React from "react";
import ContextProvider from '@/context/Context.jsx'
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import bgImg from "@i/bg.jpg";

// img
import personOne from "@i/person-one.png"
import personTwo from "@i/person-two.png"

function App() {


  return (
    <ContextProvider>
      <div className="app">
        <Header1 img={personOne} name={"Alex"} bgImg={bgImg} networkStatus={"Онлайн"} />
        <Header2 img={personTwo} name={"Evgeniy"} bgImg={bgImg} networkStatus={"Онлайн"} />
      </div>
    </ContextProvider>
  );
}

export default App;
