/* eslint-disable prettier/prettier */
import React from 'react';
import LeftSide from './LeftSide';
import Styles from './Navbar.module.scss';
import RightSide from './RightSide';


function Navbar() {
    return (
        <nav className={Styles.navbarWrapper}>
            <LeftSide />

            <RightSide />
        </nav>
    );
}

export default Navbar;
