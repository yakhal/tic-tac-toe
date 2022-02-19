import Circle from "./circle";
import Cross from "./cross";
import "./Square.css";

function Square(props){
    const callBackFn = () => {
        props.changeGameState(props.id)
    }
    if (props.value === null){
        return (
            <div onClick={callBackFn} className="square"></div>
        )
    }
    return (
        <div onClick={callBackFn} className="square">{props.value ? <Cross/> : <Circle/>}</div>
    )
}

export default Square;