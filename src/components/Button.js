import {COLORS, TEXT_PROPS} from "../AppConstants";
import {useState} from "react";

function Button(props){
    const [hover, setHover] = useState(false);
    return (
        <button style={{
            ...styles.button,
            ...(hover ? styles.buttonHover : null)

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
    },
    buttonHover: {
        transfrom: "scale(1.1)",
        transitionDuration: "0.5s",
    }
}

export default Button;