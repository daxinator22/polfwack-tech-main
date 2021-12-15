import {COLORS} from "../AppConstants";
import Logo from "./Logo";
import PageLink from "./PageLink";

function Header(props) {
    var pageLinkWidth = (1 / props.pages.length) * 100;
    console.log(pageLinkWidth);

    return (
        <div style={styles.header}>
            <Logo height={100} alt="PolfWack Logo"></Logo>
            <div style={styles.pageContainer}>
                {props.pages.map(title => {
                    return <PageLink title={title} width={pageLinkWidth + "%"}></PageLink>;
                })}
            </div>
        </div>
    );
}

const styles = {
    header: {
        backgroundColor: COLORS.primary1,
        color: COLORS.text,
        height: "130px",
        display: "flex",
    },
    pageContainer: {
        width: "80%",
        display: "flex"
    }
}

export default Header;