/* eslint-disable prettier/prettier */
import React from 'react';
import Logo from '../../assets/images/logo.jpg';
import { NavbarToggle } from '../../icons/icons';
import Styles from './LeftSide.module.scss';

function LeftSide() {
    return (
        <div className={Styles.leftSideWrapper}>
            <NavbarToggle className={Styles.navbarToggle} />
            <a href="#asd">
                <img src={Logo} width="130px" alt="Logo" />
            </a>
        </div>
    );
}

export default LeftSide;
