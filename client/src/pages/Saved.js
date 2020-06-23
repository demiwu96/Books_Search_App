import React, { useState, useEffect } from "react";
import SavedBookList from "../components/SavedBookList";
import API from "../util/API";

const styles = {
    text: {
        color: "#880e4f"
    }
}

function Saved() {
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, [])

    function loadBooks() {
        API.getBookList()
            .then(res => {
                setSavedBooks(res.data);
            })
            .catch(err => console.log(err));
    }
    

    return (
        <section>
            <div className="row">
                <div className="col s4"></div>
                <div className="col s4" style={styles.text}>
                    <div className="center-align">
                        <p style={{ fontSize: "23px" }}>Saved Books <i className="fas fa-bookmark"></i></p>
                    </div>
                </div>
                <div className="col s4"></div>
            </div>
            <div className="row">
                <div className="col s2"></div>
                <div className="col s8" style={styles.text}>
                    <h5 style={{ fontWeight: "bold" }}>My Book List</h5>
                    <ul>
                        {savedBooks.map(item => {
                            return (
                                <SavedBookList
                                    key={item._id}
                                    author={item.authors}
                                    title={item.title}
                                    description={item.description}
                                    link={item.link}
                                    img={item.img}
                                    id={item._id}
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

export default Saved;