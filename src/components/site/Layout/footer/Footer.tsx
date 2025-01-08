import React from "react";
import scss from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.footer_content}>
          <div className={scss.block_1}>
            <h4>Logo</h4>
            <div className={scss.middle_box}>
              <p className={scss.middle_box_text}>
                (Название)— это частная виртуальная сеть с уникальными функциями
                и высоким уровнем безопасности.
              </p>
              <div className={scss.circle_box}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <p className={scss.bottom_text}>©2020LaslesVPN</p>
          </div>
          <div className={scss.list_blocks}>
            <div className={scss.block_2}>
              <h4>Продукт</h4>
              <ul>
                <li>Download</li>
                <li>Pricing</li>
                <li>Locations</li>
                <li>Server</li>
                <li>Countries</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className={scss.block_3}>
              <h4>Engage</h4>
              <ul>
                <li>LaslesVPN ? </li>
                <li>FAQ</li>
                <li>Tutorials</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div className={scss.block_4}>
              <h4>Earn Money</h4>
              <ul>
                <li>Affiliate</li>
                <li>Become Partner</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
