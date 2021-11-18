import React from "react";

import Article from "./Article";

const Content = ({ lang }) => {
  const { main, article1, article2, article3, article4, article5, article6 } =
    lang;

  return (
    <>
      {/* HEADING ARTICLE */}
      <article class="flex-columns">
        <div class="row no-reverse-wrap">
          <div class="column">
            <div class="column-1 header-column">
              <img class="phone-image" src="images/content/phones.png" alt="" />
            </div>
          </div>
          <div class="column">
            <div class="column-2">
              <h2 class="mountguide-phone">{main.name1}</h2>
              <h2 class="mountguide-phone">{main.name2}</h2>
              <p class="mountguide-p">{main.desc}</p>
            </div>
          </div>
        </div>
      </article>

      {/* HEADING TEXT */}
      <div>
        <center>
          <h1 class="heading">{main.heading}</h1>
        </center>
      </div>

      <Article
        lang={article1}
        img="../images/content/cloud.png"
        img_style="big-image"
        reverse={true}
      />
      <Article
        lang={article2}
        img="../images/content/society.png"
        img_style="with-image"
        reverse={false}
        no_padding={true}
      />
      <Article
        lang={article3}
        img="../images/content/guides.png"
        img_style=""
        reverse={true}
      />
      <Article
        lang={article4}
        img="../images/content/path.png"
        img_style="with-image"
        reverse={false}
      />
      <Article
        lang={article5}
        img="../images/content/high_five.png"
        img_style="with-image"
        reverse={true}
      />
      <Article
        lang={article6}
        img="../images/content/bus.png"
        img_style="with-image"
        reverse={false}
      />
    </>
  );
};

export default Content;
