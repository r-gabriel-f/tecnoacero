import React from "react";
import "../conponents/Mapa.css";
export const Mapa = () => {
  return (
    <section className="container-mapa">
      <div className="mapa">
        <iframe
          className="gmap_iframe"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=753&amp;height=954&amp;hl=en&amp;q=TECNOACERO S.R.L.&amp;t=p&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </section>
  );
};
