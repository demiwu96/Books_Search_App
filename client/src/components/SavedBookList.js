import React from 'react';
import API from "../util/API";

const styles = {
    button: {
        marginLeft: "10px",
        marginTop: "10px"
    },
    title: {
        fontWeight: "bold",
        fontSize: "20px"
    },
    liStyle: {
        background: "#fce4ec",
        border: "2px solid pink",
        marginBottom: "10px",
        padding: "15px"
    }
}

function BookList(props) {

    function handleDelete(id) {
        API.deleteBook(id)
            .then(res => console.log("sucessful"))
            .catch(err => console.log(err));
    }

    return (
        <li key={props.id} style={styles.liStyle}>
            <div className="row">
                <div className="col s8">
                    <p style={styles.title}>{props.title}</p>
                    <p>{props.author}</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m4 l3">
                    <img src={props.img} alt="placeholder" width="160" />
                </div>
                <div className="col s12 m8 l9">
                    <p style={{ overflow: "auto", padding:"0 20px" }}>{props.description}</p>
                </div>
            </div>
            <div className="row">
                <a href={props.link} style={styles.button} className="btn waves-effect waves-red pink">View</a>
                <button onClick={() => handleDelete(props.id)} style={styles.button} className="btn waves-effect waves-red pink">Delete</button>
            </div>
        </li>
    )
}

export default BookList;