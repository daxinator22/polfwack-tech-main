import Button from "./Button";

function TextBox(props){
    return (
        <div style={styles.textBox}>
            <h1>{props.title}</h1>
            <p>{props.children}</p>
            <Button>{props.btnText}</Button>
        </div>
    );
}

const styles = {
    textBox: {
        padding: "5% 5% 5% 5%",
    }
}

export default TextBox;