import React, { useState, useRef } from "react";

// Languages
import ukrainian from "./languages/ukrainian";
import english from "./languages/english";

// Styles
import "./styles/desktop.css";
import "./styles/mobile.css";

// Components
import Header from "./pages/Header";
import Content from "./pages/Content";
import Buttons from "./pages/Buttons";
import Footer from "./pages/Footer";
import Partners from "./pages/Partners";

const App = () => {
  // Scrolling
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  // Language select
  const [language, setLanguage] = useState("ua");

  const languageObject = language === "ua" ? ukrainian : english;

  const { header, content, buttons, footer, form, partners } = languageObject;

  return (
    <div className="app">
      <Header lang={header} scroll={executeScroll} setLanguage={setLanguage} />
      <Content lang={content} />
      <Buttons lang={buttons} formlang={form} reference={myRef} />
      <Footer lang={footer} />
      <Partners lang={partners} />
    </div>
  );
};

export default App;
