import React from "react";
import bitcoin from "../assets/bitcoin.png";
import layer0 from "../assets/layer0.png";
import layer1 from "../assets/layer1.png";

function MoreNews() {
  return (
    <>
      <br />
      <div className="aside-content">
        <h2>More News</h2>
        <hr />
        <br />
        <ul className="website-list">
          <div className="website-group">
            <li className="website-li">
              <a href="https://btc-mkt-website.vercel.app">
                <img
                  src={bitcoin}
                  className="otherwebsiteimg"
                  alt="bitcoin"
                />
                <p className="textCardMoreWebsites">Bitcoin</p>
              </a>
            </li>
            <li className="website-li">
              <a href="https://layer0-mkt-website.vercel.app">
                <img src={layer0} className="otherwebsiteimg" alt="Layer 0" />
                <p className="textCardMoreWebsites"> Layer 0</p>
              </a>
            </li>
          </div>
          <div className="website-entire">
            <li className="website-li layer1div">
              <a href="https://layer1-mkt-webiste.vercel.app">
                <img src={layer1} className="layer1logo" alt="Layer 1" />
                <p className="textCardMoreWebsites">Layer 1</p>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default MoreNews;
