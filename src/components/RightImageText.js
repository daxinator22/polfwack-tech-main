import {COLORS} from "../AppConstants";
import TextBox from "./TextBox";

function RightImageText(props) {
    return (
        <div style={styles.imageContainer}>
            <TextBox title={props.title} btnText={props.btnText}>{props.children}</TextBox>
            <img style={styles.image} src={props.src}></img>
        </div>
    )
}

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
}

export default RightImageText;