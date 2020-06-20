import React from 'react';

const styles = {
    button: {
        marginLeft: "10px",
        marginTop:"10px"
    },
    title: {
        fontWeight: "bold",
        fontSize: "20px"
    }
}

function BookList() {
    return (
        <li>
            <div className="row">
                <div className="col s8">
                    <p style={styles.title}>The Hunger Games</p>
                    <p>Suzanne Collins</p>
                </div>
                <div className="col s4">
                    <a style={styles.button} className="btn waves-effect waves-red pink">View</a>
                    <a style={styles.button} className="btn waves-effect waves-red pink">Save</a>
                </div>
            </div>
            <div className="row">
                <div className="col s4 l3">
                    <img src="http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" alt="placeholder" height="200" />
                </div>
                <div className="col s8 l9">
                    <p>Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.</p>
                </div>
            </div>
        </li>
    )
}

export default BookList;