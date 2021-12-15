import React, {useState} from 'react';
import {COLORS, TEXT_PROPS} from "../AppConstants";

function PageLink(props) {
    const [hover, setHover] = useState(false);

    return (
        <div style={{
            ...styles.pageLink,
            ...{width: props.width},
            ...(hover ? styles.pageLinkHover : null)
        }}
        onMouseEnter={() => {
            setHover(true);
        }}
        onMouseLeave={() => {
            setHover(false);
        }}>
            <p>{props.title}</p>
        </div>
    );
}

const styles = {
    pageLink: {
        fontFamily: TEXT_PROPS.font,
        fontSize: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    pageLinkHover: {
        backgroundColor: COLORS.accent1,
    }
}

export default PageLink;