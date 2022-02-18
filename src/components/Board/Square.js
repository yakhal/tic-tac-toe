import Circle from "./circle";
import Cross from "./cross";
import "./Square.css";

function Square(props){
    if (props.value === null){
        return (
            <div className="square"></div>
        )
    }
    return (
        <div className="square">{props.value ? <Cross/> : <Circle/>}</div>
    )
}

export default Square;