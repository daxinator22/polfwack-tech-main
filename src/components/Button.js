import {COLORS, TEXT_PROPS} from "../AppConstants";
import {useState} from "react";

function Button(props){
    const [hover, setHover] = useState(false);
    return (
        <button style={{
            ...styles.button,
            ...(hover ? styles.buttonHover : null),
        }}
        onMouseEnter={() => {
            setHover(true);
        }}
        onMouseLeave={() => {
            setHover(false);
        }}>
            {props.children}
        </button>
    );
}

const styles = {
    button: {
        padding: "20px 20px 20px 20px",
        borderRadius: "20px",
        border: 0,
        backgroundColor: COLORS.accent1,
        color: COLORS.text,
        fontFamily: TEXT_PROPS.font,
        fontSize: "16px",
        transition: "all .2s ease-in-out",
    },
    buttonHover: {
        transform: "scale(1.1)",
    }
}

export default Button;