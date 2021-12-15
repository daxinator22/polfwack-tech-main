function PageTitle(props){
    console.log(props.children);

    return (
        <p style={styles.pageTitle}>{props.children}</p>
    );
}

const styles = {
    pageTitle: {
        margin: "0",
        paddingTop: "20px",
        fontSize: "128px",
    }
}

export default PageTitle;