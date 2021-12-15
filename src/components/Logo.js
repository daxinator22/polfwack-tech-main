import logo from "../assets/logo.png";

function Logo(props) {
    return (
        <div style={styles.logo}>
            <img height={props.height} width={props.width} src={logo} alt={props.alt}/>
        </div>
    );
}

const styles = {
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        height: "100%"
    }
}

export default Logo;