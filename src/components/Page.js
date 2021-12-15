import PageTitle from "./PageTitle";
import {COLORS, TEXT_PROPS} from "../AppConstants";

function Page() {
    return (
        <div style={styles.pageContainer}>
            <PageTitle>The Future is Here</PageTitle>
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