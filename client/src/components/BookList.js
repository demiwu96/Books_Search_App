import React from 'react';

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
    return (
        <li style={styles.liStyle}>
            <div className="row">
                <div className="col s8">
                    <p style={styles.title}>{props.title}</p>
                    <p>{props.author}</p>
                </div>
                <div className="col s4">
                    <a href={props.link} style={styles.button} className="btn waves-effect waves-red pink">View</a>
                    <a style={styles.button} className="btn waves-effect waves-red pink">Save</a>
                </div>
            </div>
            <div className="row">
                <div className="col s4 l3">
                    <img src={props.img} alt="placeholder" width="160" />
                </div>
                <div className="col s8 l9">
                    <p>{props.description}</p>
                </div>
            </div>
        </li>
    )
}

export default BookList;