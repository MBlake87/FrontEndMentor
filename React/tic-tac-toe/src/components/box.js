import "./box.css"


function Box({ id, box, boxes, setBox, go, setGo, winningMessage }) {
    const handleClick = (e) => {
        const taken = e.target.firstChild.classList.contains("pigs") || e.target.firstChild.classList.contains("lambs")
        console.log(e.target.firstChild.classList)
        if (!taken) {
            if (go === "pigs") {
                e.target.firstChild.classList.add("lambs")
                handleBoxChange("pigs")
                setGo("lambs")
            }
            if (go === "lambs") {
                e.target.firstChild.classList.add("pigs")
                handleBoxChange("lambs")
                setGo("pigs")
            }
        }

    }

    const handleBoxChange = (className) => {
        const nextBox = boxes.map((box, index) => {
            if (index === id) {
                return className
            } else {
                return box
            }
        })
        setBox(nextBox)


    }
    return (
        <div className="box" id={id} onClick={!winningMessage ? handleClick : null} >
            <div className={box}></div></div>

    )

}

export default Box;