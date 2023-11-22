import React from 'react';
import svgSprite from '../assets/sprite.svg';

export default function Footer() {
    return(
        <footer>
      <div className="container footer">
        <div className="footer_nav">
          <div className="footer_column">
            <p className="footer_heading">Home</p>
            <ul className="footer_list">
              <li className="footer_item">
                <a href="/" className="footer_link">Categories</a>
              </li>
              <li className="footer_item">
                <a href="/" className="footer_link">Devices</a>
              </li>
              <li className="footer_item">
                <a href="/" className="footer_link">Gernes</a>
              </li>
            </ul>
          </div>
          <div className="footer_column">
            <p className="footer_heading">Support</p>
            <ul className="footer_list">
              <li className="footer_item">
                <a href="/" className="footer_link">Contact Us</a>
              </li>
              <li className="footer_item">
                <a href="/" className="footer_link">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer_column">
            <p className="footer_heading">Contact Us</p>
            <div className="contact_list">
              <a href="/" className="contact_link">
                <svg className="facebook">
                  <use xlinkHref={`${svgSprite}#facebook`} />
                </svg>
              </a>
              <a href="/" className="contact_link">
                <svg className="twitter">
                  <use xlinkHref={`${svgSprite}#twitter`} />
                </svg>
              </a>
              <a href="/" className="contact_link">
                <svg className="linkedin">
                  <use xlinkHref={`${svgSprite}#linkedin`} />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <p className="copyright">@2023 annatopfrontendever, All Rights Reserved</p>
      </div>
    </footer>
    )
}