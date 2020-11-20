import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
    return (
        <div>
            <nav>
                {/* {props.children} */}
                <Link to="/">Home 🏠</Link>
                <Link to="/beers">Beers</Link>
                <Link to="/new-beer">New Beer</Link>
                <Link to="/random-beer">Random Beer</Link>
            </nav>

        </div>
    );
};

export default Header;