import blueCity from "../assets/blue-city.jpg";

function PageTitle(props){
    console.log(props.children);

    return (
        <p style={styles.pageTitle}>{props.children}</p>
    );
}

const styles = {
    pageTitle: {
        height: "300px",
        margin: "0",
        backgroundImage: `url(${blueCity})`,
        backgroundSize: "100%",
        paddingTop: "20px",
        fontSize: "128px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}

export default PageTitle;