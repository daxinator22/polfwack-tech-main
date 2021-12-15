function LeftImageText(props) {
    return (
        <div>
            <img style={styles.image} src={props.src}></img>
        </div>
    )
}

const styles = {
    image: {
        height: "200px",
        padding: 0,
        margin: 0,
    }
}

export default LeftImageText;