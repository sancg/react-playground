import React from "react";

import btn from "./button.module.css";

const Button = (props) => {
    const { type, value } = props;
    return <button type={type || "button"}>{props.children}</button>;
};

export default Button;
