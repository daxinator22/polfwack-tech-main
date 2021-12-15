import {COLORS} from "../AppConstants";
import TextBox from "./TextBox";

function LeftImageText(props) {
    return (
        <div style={styles.imageContainer}>
            <img style={styles.image} src={props.src}></img>
            <div style={styles.spacer}></div>
            <TextBox title="Welcome to the Wack" buttonText="See what we're about">{text}</TextBox>
        </div>
    )
}

const text = "Here is an example of a left image text";

const styles = {
    image: {
        width: "40%",
    },
    imageContainer: {
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        backgroundColor: COLORS.accent2,
        fontSize: "20px",
    },
    spacer: {
        width: "20%",
    },
    text: {
        
    }
}

export default LeftImageText;