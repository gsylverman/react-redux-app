import React from "react";

const Image = (props) => {
    return (
        <img
            style={{ maxWidth: "100%" }}
            src={props.src} alt="img"
        />
    );
};

export default Image;