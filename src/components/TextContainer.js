import './TextContainer.css';

function TextContainer(props) {
    return (
        <div className="text-container">
            {props.children}
        </div>
    )
}

export default TextContainer;
