import React, { useState, useEffect } from "react";
import axios from "axios";
import dice from "./images/icon-dice.svg"
import divider from "./images/pattern-divider-desktop.svg"
import "./App.css"
function App() {
    const [advice, setAdvice] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        axios
            .get("https://api.adviceslip.com/advice")
            .then((response) => {
                setAdvice(response.data.slip.advice);
                setId(response.data.slip.id);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    return (
        <div className="App">
            <div className="container">
                <p className="pHeader">Advice #<span>{id}</span></p>
                <p className="pAdvice">"{advice}"</p>
                <img alt="" className="divider" src={divider}></img>
                <button className="diceContainer">
                    <img alt="" className="dice" src={dice} onClick={() => window.location.reload()}></img>
                </button>
            </div>
        </div >
    );
}

export default App;
