import React, { Component } from "react";

const styles = {
    navbar: {
        background: "#f48fb1"
    },
    logo: {
        paddingLeft: "20px"
    },
    link: {
        marginLeft: "150px"
    }
}

class Navbar extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    }

    render() {
        return (
            <div>
                <nav style={styles.navbar}>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo" style={styles.logo}><i className="fas fa-book"></i> Books</a>
                        <a data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down" style={styles.link}>
                            <li><a href="/">Search Books</a></li>
                            <li><a href="/saved">Saved Books</a></li>
                        </ul>
                    </div>
                </nav>

                <ul id="slide-out" className="sidenav">
                    <li><a href="/">Search Books</a></li>
                    <li><a href="/saved">Saved Books</a></li>
                </ul>
            </div>

        )
    }
}

export default Navbar;