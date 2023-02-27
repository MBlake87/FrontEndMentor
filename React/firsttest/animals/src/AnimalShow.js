import "./App.css"
import { useState } from "react"
import bird from "./svg/bird.svg"
import horse from "./svg/horse.svg"
import cat from "./svg/cat.svg"
import cow from "./svg/cow.svg"
import dog from "./svg/dog.svg"
import gator from "./svg/gator.svg"
import heart from "./svg/heart.svg"

const svgMap = {
    bird,
    cat,
    horse,
    cow,
    dog,
    gator

}

function AnimalShow({ type }) {
    const [click, setClicks] = useState(0)
    const handleClick = () => {
        setClicks(click + 1)
    }
    return <div className="animalshow" onClick={handleClick}>
        <img className="animal" alt="animals" src={svgMap[type]} />
        <img className="heart" alt="heart" src={heart} style={{ width: 10 + 10 * click + "px" }} />
    </div>
}

export default AnimalShow;