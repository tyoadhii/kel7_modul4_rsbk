import React, { useReducer } from "react";
import "./index1.css";
import { ReactComponent as Logo } from "../logo.svg";

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function Index() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="Main">
            <Logo className="Logo" />
            <div className="Text">Count = {count}</div>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={() => dispatch("increment")}>
                        Increment
          </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={() => dispatch("decrement")}>
                        Decrement
          </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={() => dispatch("reset")}>
                        Reset
          </button>
                </div>
            </div>
            <h2>CREATE BY : KELOMPOK 7</h2>
        </div>
    );
}

export default Index;

//create by kel 7