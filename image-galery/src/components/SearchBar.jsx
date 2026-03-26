import { useState } from "react";
//import '..styles/style.css'
function SearchBar({ addText }) {

    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addText(text);
    }

    return (<>
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={handleSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="button-label">Search</span>
                </button>

                <input
                    value={(text)}
                    onChange={(e) => setText(e.target.value)}
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
            
        </header>
    </>);
}

export default SearchBar;