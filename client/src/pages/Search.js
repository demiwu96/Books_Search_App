import React, { useState } from "react";
import BookList from "../components/BookList";
import API from "../util/API";

const styles = {
    text: {
        color: "#880e4f"
    }
}

function Search() {
    const [title, setTitle] = useState("");

    function handleInputChange(event) {
        const value = event.target.value;
        setTitle({ title: value });
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (title) {
            API.getBooks(title)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
        }
    }

    function renderBooks(){
        
    }

    return (
        <section>
            <div className="row">
                <div className="col s4"></div>
                <div className="col s4" style={styles.text}>
                    <div className="center-align">
                        <p style={{ fontSize: "20px" }}>Enter the book title to start <i className="fas fa-arrow-circle-down"></i></p>
                        <form>
                            <div className="input-field">
                                <i className="material-icons prefix">search</i>
                                <input id="searchBar" type="text" required onChange={handleInputChange} />
                                <label htmlFor="searchBar">Search</label>
                            </div>
                            <button className="btn waves-effect waves-red pink" type="submit" name="action"
                                disabled={!title}
                                onClick={handleFormSubmit}>
                                Search
                                </button>
                        </form>
                    </div>
                </div>
                <div className="col s4"></div>
            </div>
            <div className="row">
                <div className="col s2"></div>
                <div className="col s8" style={styles.text}>
                    <h5 style={{ fontWeight: "bold" }}>Search Results</h5>
                    <ul>
                        <BookList />
                    </ul>
                </div>
                <div className="col s2"></div>
            </div>
        </section>
    )
}

export default Search;