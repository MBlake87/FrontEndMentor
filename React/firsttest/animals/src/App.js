import "./AnimalShow.css"
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getAnimal() {
    const animal = ["dog", "cat", "bird", "gator", "horse", "cow"]
    return animal[Math.floor(Math.random() * animal.length)]
}


function App() {
    const [animals, setAnimal] = useState([]);

    const handleClick = () => {
        setAnimal([...animals, getAnimal()])
    }

    const renderdAnimal = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />

    })
    return <div className="app">
        <button onClick={handleClick}>Add Animal</button>
        <div className="animal-list">{renderdAnimal}</div>
    </div>
}

export default App;