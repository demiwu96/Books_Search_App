import React, { useState, useRef } from "react";
import BookList from "../components/BookList";
import API from "../util/API";

const styles = {
    text: {
        color: "#880e4f"
    }
}

function Search() {
    const inputRef = useRef();

    const [title, setTitle] = useState("");
    const [results, setResults] = useState([]);

    function handleInputChange(event) {
        const value = event.target.value;
        setTitle(value);
    };

    function handleFormSubmit(event) {
        event.preventDefault();

        API.searchBooks(inputRef.current.value)
            .then(res => {
                setResults(res.data.items)
            })
            .catch(err => console.log(err));
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
                                <input id="searchBar" type="text" required onChange={handleInputChange} ref={inputRef} />
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
                        {results.map(item => {
                            let imgLink;
                            let authorList;
                            if (!item.volumeInfo.imageLinks) {
                                imgLink = "https://place-hold.it/200"
                            } else {
                                imgLink = item.volumeInfo.imageLinks.thumbnail
                            }
                            if (item.volumeInfo.authors) {
                                if (item.volumeInfo.authors.length > 1) {
                                    authorList = item.volumeInfo.authors.join();
                                } else {
                                    authorList = item.volumeInfo.authors;
                                }
                            }
                            return (
                                <BookList
                                    key={item.volumeInfo.id}
                                    author={authorList}
                                    title={item.volumeInfo.title}
                                    description={item.volumeInfo.description}
                                    link={item.volumeInfo.infoLink}
                                    img={imgLink}
                                />
                            )
                        })}
                    </ul>
                </div>
                <div className="col s2"></div>
            </div>
        </section>
    )
}

export default Search;