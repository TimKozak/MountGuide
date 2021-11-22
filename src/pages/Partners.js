import React from "react";

import Partner from "./Partner";

// Styles
import "../styles/sponsors.css";

const Partners = ({ lang }) => {
  const { partner1, partner2 } = lang;

  return (
    <div class="partners-container">
      <h2>{lang.heading}</h2>
      <div class="u-clearfix u-layout-wrap u-layout-wrap-1">
        <div class="partners-grid">
          <Partner lang={partner1} img={"images/partners/gra.png"} />
          <Partner lang={partner2} img={"images/partners/funkarpaty.png"} />
        </div>
      </div>
    </div>
  );
};

export default Partners;
