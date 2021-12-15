import {COLORS} from "../AppConstants";
import Logo from "./Logo";

function Header(props) {
    return (
        <div style={styles.header}>
            <Logo height={100}></Logo>
        </div>
    );
}

const styles = {
    header: {
        backgroundColor: COLORS.primary1,
        color: COLORS.text,
        height: "130px",
    },
}

export default Header;