function Image(props) {
    var src = props.src;
    if (Array.isArray(src)){
        var cols = props.cols;
        return (
            <div style={{
                ...styles.imageContainer,
                ...{
                    height: props.height,
                    width: props.width,
                }
            }}>
                <div style={styles.row}>
                    <img style={styles.image} src={src[0]}/>
                    <img style={styles.image} src={src[1]}/>
                </div>
                <div style={styles.row}>
                    <img style={styles.image} src={src[2]}/>
                    <img style={styles.image} src={src[3]}/>
                </div>
            </div>
        );
    }
    else {
        return (
            <img src={props.src}/>
        );
    }
}

const styles = {
    imageContainer: {
        margin: "40px 40px 40px 40px",
    },
    row: {
        height: "50%",
        display: "inline",
        
    },
    image: {
        width: "40%",
        padding: "5% 5% 5% 5%",
    }
}

export default Image;