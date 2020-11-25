import React, { useState, useEffect } from "react";
import "./Index.css";

export default function Index() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (count > 0) {
            alert(`component will update & count ${count}`);
        }
    }, [count]);

    useEffect(() => {
        console.log('spam console kuy');
    });

    const countUp = () => {
        setCount(count + 1);
    };

    const countDown = () => {
        setCount(count - 1);
    };

    return (
        <div className="Main">
            <p className="Text">Learn useEffect</p>
            <p>Kelompok-7</p>
            <ul>
                {data.slice(0, 10).map((value) => (
                    <li key={value.id}>{value.title}</li>
                ))}
            </ul>

            <p className="Text">{count}</p>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={countUp}>
                        Up
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={countDown}>
                        Down
                    </button>
                </div>
            </div>
        </div>
    );
}