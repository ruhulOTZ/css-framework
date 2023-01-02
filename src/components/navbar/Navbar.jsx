/* eslint-disable prettier/prettier */
import React from 'react';
import LeftSide from './LeftSide';
import Styles from './Navbar.module.scss';
import RightSide from './RightSide';


function Navbar() {
    return (
        <header className={Styles.header}>
            <div className={Styles.topText}>
                Top Bar Color Management
            </div>
            <nav className={Styles.navbarWrapper}>
                <LeftSide />

                <RightSide />
            </nav>
        </header>

    );
}

export default Navbar;
