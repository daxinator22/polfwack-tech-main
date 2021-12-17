import {COLORS} from "../AppConstants";
import TextBox from "./TextBox";
import Image from "./Image";

function RightImageText(props) {
    return (
        <div style={styles.imageTextContainer}>
            <TextBox title={props.title} btnText={props.btnText}>{props.children}</TextBox>
            <div style={styles.imageContainer}>
                <Image src={props.src} cols={props.imgCols} height={300} width={300}></Image>
            </div>
        </div>
    )
}

const styles = {
    imageContainer: {
        width: "40%",
        padding: "0% 2% 0% 2%",
        backgroundColor: COLORS.accent1,
    },
    imageTextContainer: {
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        backgroundColor: COLORS.accent2,
        fontSize: "20px",
    },
}

export default RightImageText;