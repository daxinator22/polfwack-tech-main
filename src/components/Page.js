import PageTitle from "./PageTitle";
import {COLORS, TEXT_PROPS} from "../AppConstants";
import PageSpacer from "./PageSpacer";
import computer from "../assets/computer.jpg";
import LeftImageText from "./LeftImageText";

function Page() {
    return (
        <div style={styles.pageContainer}>
            <PageSpacer height={50}></PageSpacer>
            <PageTitle>The Future is Here</PageTitle>
            <PageSpacer height={100}></PageSpacer>
            <LeftImageText src={computer}></LeftImageText>
        </div>
    );
}

const styles = {
    pageContainer: {
        height: "500px;",
        backgroundColor: COLORS.primary1,
        color: COLORS.text,
        fontFamily: TEXT_PROPS.font,
    }
}

export default Page;