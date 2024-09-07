import React from "react";

const InstagramWidget = () => {
  return (
    <>
      <iframe
        src="https://snapwidget.com/embed/1078420"
        className="snapwidget-widget rounded-2xl"
        allowtransparency="true"
        frameborder="0"
        style={{
          border: "none",
          overflow: "hidden",
          width: "550px",
          height: "200px",
        }}
        title="Posts from Instagram"
        loading="lazy"
      ></iframe>
    </>
  );
};

export default InstagramWidget;
