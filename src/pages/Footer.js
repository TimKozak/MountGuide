import React from "react";

const Footer = ({ lang }) => {
  return (
    <footer class="main-footer">
      <div class="footer-content container">
        {/* COPYRIGHT GROUP */}
        <div>
          <p class="mountguide">{lang.company_name}</p>
          <p class="copyright">Copyright &copy; {lang.year}</p>
        </div>

        {/* MEDIA LINKS */}
        <div class="social">
          <a
            href="https://www.instagram.com/mountguideua/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./images/social/instagram.png" alt="" />
          </a>
          <a href="https://t.me/jiter" target="_blank" rel="noreferrer">
            <img src="./images/social/telegram.png" alt="" />
          </a>
          <a
            href="https://www.facebook.com/mountguideua"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./images/social/facebook.png" alt="" />
          </a>
          <a href="mailto:contact@mount.guide" target="_blank" rel="noreferrer">
            <img src="./images/social/email.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
