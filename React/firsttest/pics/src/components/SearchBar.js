import { useState } from "react"
import "./SearchBar.css"

function SearchBar({ onSubmit }) {

    const [term, SetTerm] = useState("")

    const handleOnChange = (event) => {
        SetTerm(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        onSubmit(term)
    }
    return <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <label>Enter Search:</label>
            <input value={term} onChange={handleOnChange} />
        </form>

    </div>
}

export default SearchBar;
