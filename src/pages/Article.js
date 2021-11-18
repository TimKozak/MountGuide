import React from "react";

// reverse - bool
// lang - object
// img - str
// img_style - str ["big-image", "with-image", ""]
// no_padding - bool
const Article = ({
  lang,
  img,
  img_style,
  reverse = false,
  no_padding = false,
}) => {
  return (
    <article class={`flex-columns ${reverse && "flex-reverse"}`}>
      <div class="row my-7">
        <div class="column">
          <div class={`column-1 ${img_style}`}>
            <img src={img} alt="" />
          </div>
        </div>
        <div class="column">
          <div class={`column-2 ${no_padding && "no-padding-top"}`}>
            <h2 class="number">{lang.number}</h2>
            <p class="main-p">{lang.heading}</p>
            <p class="content-p">{lang.text}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
