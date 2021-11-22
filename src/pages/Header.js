import React from "react";

const Header = ({ lang, scroll, setLanguage }) => {
  return (
    <header class="main-header">
      <div class="header-content">
        <div class="logo">
          {/* LOGO IMAGE */}
          <img class="logo-img" src="../images/logo.png" alt="" />

          {/* LOGO TEXT */}
          <div class="logo-arrangement">
            <h2>{lang.name1}</h2>
            <h2>{lang.name2}</h2>
          </div>
        </div>
        <div class="logo">
          {/* SCROLL BUTTON */}
          <button onClick={scroll} class="no-btn white">
            <p class="languages">{lang.scroll_button}</p>
          </button>

          {/* LOCALISATION GROUP */}
          <div className="logo">
            <button
              onClick={() => {
                setLanguage("ua");
              }}
              className="no-btn"
            >
              <img
                class="localisation"
                src="images/languages/ukraine.png"
                alt=""
              />
            </button>
            <button
              onClick={() => {
                setLanguage("en");
              }}
              className="no-btn"
            >
              <img
                class="localisation"
                src="images/languages/england.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
