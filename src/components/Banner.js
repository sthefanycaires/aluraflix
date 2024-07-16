import React from "react";
import banner from "../assets/banner.png";

function Banner({ featured }) {
  if (!featured) {
    return null;
  }

  return (
    <div className="banner" style={{ backgroundImage: { banner } }}>
      <div className="banner-info">
        <div className="tag-categoria-destaque">
          <h2>{featured.category}</h2>
        </div>
        <div className="descricao-destaque">
          <h1>{featured.title}</h1>
          <p>{featured.description}</p>
        </div>
      </div>
      <div className="banner-video">
        <iframe
          src={featured.video}
          title={featured.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Banner;
