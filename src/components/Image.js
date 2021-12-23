function getImagesInRow(cols, row, src){
    let i = row * cols;

    var images = [];
    while (i < (row + 1) * cols) {
        images.push(<td><img style={styles.image} src={src[i]}/></td>);
    }

    return images;
}

function Image(props) {
    var src = props.src;
    if (Array.isArray(src)){
        var cols = props.cols;
        var rows = [];

        var numRows = (src.length / cols);
        let i = 0;
        while (i < numRows) {
            rows.push(<tr>{getImagesInRow(cols, i, src)}</tr>);
            i++;
        }

        return (
            <div style={{
                ...props.style,
                ...styles.imageContainer
            }}>
                <table>
                    {rows}
                </table>
            </div>
        );
    }
    else {
        return (
            <img 
                style={{
                    ...props.style
                }}
                src={props.src}
                alt={`${props.src}`}
            />
        );
    }
}

const styles = {
    imageContainer: {
    },
    row: {
        height: "50%",
        display: "inline",
        
    },
    image: {
        width: "40%",
        padding: "5% 10% 5% 10%",
    }
}

export default Image;