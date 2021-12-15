function PageSpacer(props) {
    var propStyle = {
        backgroundColor: props.color,
        height: props.height,
    };

    return (
        <div style={{
            ...propStyle,
        }}></div>
    );
}

export default PageSpacer;