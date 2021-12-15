import Button from "./Button";

function TextBox(props){
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.children}</p>
            <Button>{props.buttonText}</Button>
        </div>
    );
}

export default TextBox;