import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import RegisterLinks from './RegisterLinks';

const Navbar = (props) => {
    let links;
    if (props.loggedIn) {
        links = <SignedInLinks />
    } else {
        links = <RegisterLinks />
    }
    
    
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brandLogo">BudgetTracker</Link>
                {links}
            </div>
        </nav>
    )
}

export default Navbar;