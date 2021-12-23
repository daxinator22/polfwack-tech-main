import {COLORS} from "../AppConstants";
import TextBox from "./TextBox";
import Image from "./Image";

function LeftImageText(props) {
    return (
        <div style={styles.imageTextContainer}>
            <Image style={styles.imageContainer} src={props.src}/>
            <TextBox title={props.title} btnText={props.btnText}>{props.children}</TextBox>
        </div>
    )
}

const styles = {
    imageContainer: {
        width: "40%",
    },
    imageTextContainer: {
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        backgroundColor: COLORS.accent2,
        fontSize: "20px",
    },
    spacer: {
        width: "20%",
    },
}

export default LeftImageText;