import React from "react";

const Partner = ({ lang, img }) => {
  return (
    <a class="partner-link" href={lang.link} target="_blank" rel="dofollow">
      <div class="partner-grid">
        <div>
          <div class="partner-img">
            <img src={img} alt="" />
          </div>
        </div>
        <div class="partner-text">
          <h4>{lang.name}</h4>
          <p>{lang.text}</p>
        </div>
      </div>
    </a>
  );
};

export default Partner;
