import {COLORS} from "../AppConstants";

function Header(props) {
    return (
        <div>
            <h1 style={styles.header}>PolfWack Technologies</h1>
        </div>
    );
}

const styles = {
    header: {
        backgroundColor: COLORS.primary1,
        color: COLORS.text,
    },
}

export default Header;