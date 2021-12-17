import {COLORS} from "../AppConstants";
import TextBox from "./TextBox";

function LeftImageText(props) {
    return (
        <div style={styles.imageContainer}>
            <img style={styles.image} src={props.src}></img>
            <TextBox title={props.title} btnText={props.btnText}>{props.children}</TextBox>
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
    spacer: {
        width: "20%",
    },
    text: {
        
    }
}

export default LeftImageText;