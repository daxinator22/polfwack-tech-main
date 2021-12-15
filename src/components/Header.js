import {COLORS} from "../AppConstants";

function Header(props) {
    return (
        <div style={styles.header}>
            <h1>PolfWack Technologies</h1>
        </div>
    );
}

const styles = {
    header: {
        backgroundColor: COLORS.primary1,
        color: COLORS.text,
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}

export default Header;