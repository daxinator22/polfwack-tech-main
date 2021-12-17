import PageTitle from "./PageTitle";
import {COLORS, TEXT_PROPS} from "../AppConstants";
import PageSpacer from "./PageSpacer";
import computer from "../assets/computer.jpg";
import teamwork from "../assets/teamwork.jpg";
import LeftImageText from "./LeftImageText";
import RightImageText from "./RightImageText";

function Page() {
    return (
        <div style={styles.pageContainer}>
            <PageSpacer height={50}></PageSpacer>
            <PageTitle>The Future is Here</PageTitle>
            <PageSpacer height={100}></PageSpacer>
            <LeftImageText 
                src={computer} 
                title="Welcome to PolfWack Tech"
                btnText="See what we're about"
            >
                Our mission at PolfWack Tech is to change the software development industry. We want to make the process as
easy as possible for you because we're not just making software; we are helping you accomplish your ideas, 
dreams and ambitions.
            </LeftImageText>
            <PageSpacer height={100}></PageSpacer>
            <RightImageText 
                src={teamwork} 
                title="Welcome to PolfWack Tech"
                btnText="See what we're about"
            >
                Our mission at PolfWack Tech is to change the software development industry. We want to make the process as
easy as possible for you because we're not just making software; we are helping you accomplish your ideas, 
dreams and ambitions.
            </RightImageText>
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