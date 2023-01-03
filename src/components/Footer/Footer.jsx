import React from "react";

import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="topdiv">
      <div className="bigcontainer">
        <div className="logos">
          <a href="https://www.facebook.com" target="_blank">
            <FacebookOutlined />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <TwitterOutlined />
          </a>
        </div>
        <div className="footer">
          <p className="copy">&copy; 2023 Divorciados.com</p>
          <p>¡Y olvídate de tu ex!</p>
        </div>
        <div className="logos2">
          <a href="https://www.youtube.com" target="_blank">
            <YoutubeOutlined />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <InstagramOutlined />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
