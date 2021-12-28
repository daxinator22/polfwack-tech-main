function Image(props) {
    var src = props.src;
    if (Array.isArray(src)){
        
        return (
            <div style={{
                ...props.style,
            }}>
                <table style={styles.imageTable}>
                    <tr>
                        <td><img style={styles.image} src={src[0]}/></td>
                        <td><img style={styles.image} src={src[1]}/></td>
                    </tr>
                    <tr>
                        <td><img style={styles.image} src={src[2]}/></td>
                        <td><img style={styles.image} src={src[3]}/></td>
                    </tr>
                </table>
            </div>
        );
    }
    else {
        return (
            <div styles={props.style}>
                <img 
                    style={{
                        width: "100%"
                    }}
                    src={props.src}
                    alt={`${props.src}`}
                />
            </div>
        );
    }
}

const styles = {
    image: {
        width: "50%",
        padding: "5% 10% 5% 10%",
    },
    imageTable: {
        height: "100%",
    }
}

export default Image;