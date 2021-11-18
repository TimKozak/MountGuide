import React, { useState } from "react";
import GuideForm from "../components/GuideForm";
import TouristForm from "../components/TouristForm";

const Buttons = ({ lang, formlang, reference }) => {
  const [show, setShow] = useState(false);
  const [formtype, setFormtype] = useState("");

  // CLICK HANDLER
  const handleClick = (type) => {
    setShow(show === true && formtype === type ? false : true);
    setFormtype(type);
  };

  return (
    <div>
      <center>
        {/* HEADING GROUP */}
        <h1 class="small-heading">{lang.top_header}</h1>
        <p class="small-text">{lang.top_text}</p>

        {/* BUTTON GROUP */}
        <div class="button-group" ref={reference}>
          {/* TOURIST BUTTON */}
          <button
            onClick={() => {
              handleClick("tourists");
            }}
            target="_blank"
            class="btn btn-text"
          >
            {lang.button_left}
          </button>

          {/* GUIDE BUTTON */}
          <button
            onClick={() => {
              handleClick("guides");
            }}
            target="_blank"
            class="btn btn-text"
          >
            {lang.button_right}
          </button>
        </div>

        {/* RESPONSES FORM */}
        {show &&
          (formtype === "tourists" ? (
            <TouristForm lang={formlang.tourists} />
          ) : (
            <GuideForm lang={formlang.guides} />
          ))}

        {/* MAIL LINK */}
        <a href="mailto:contact@mount.guide?subject=Домовленість про онлайн-зустріч">
          <p class="little-text">{lang.mail_link}</p>
        </a>
      </center>
    </div>
  );
};

export default Buttons;
