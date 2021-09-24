import React from "react";
import './Button.css';

const Button = () => {
    const click = () => console.log(111);

    return (
        <button className="btn" onClick={click}>Btn</button>
    )
}

export default Button;
