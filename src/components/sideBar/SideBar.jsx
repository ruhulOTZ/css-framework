/* eslint-disable prettier/prettier */
import React from 'react';
import { DashboardIcon } from '../../icons/icons';
import TopText from '../topText/TopText';
import Settings from './Settings';
import Styles from './SideBar.module.scss';

function SideBar() {
    return (
        <>
            <TopText>Side Bar Color Management</TopText>
            <div className={Styles.sidebarWrapper}>
                <div className={Styles.sidebarContent}>
                    <ul className={Styles.sidebarList}>
                        <li className={`${Styles.sidebarItem} ${Styles.active}`}>
                            <DashboardIcon />
                            <span>Dashboard</span>
                        </li>

                        <li className={Styles.sidebarItem}>
                            <DashboardIcon />
                            <span>Inbox</span>
                        </li>

                        <li className={Styles.sidebarItem}>
                            <DashboardIcon />
                            <span>Deal</span>
                        </li>

                        <li className={Styles.sidebarItem}>
                            <DashboardIcon />
                            <span>Calender</span>
                        </li>
                    </ul>
                </div>
                <Settings />
            </div>
        </>
 
    );
}

export default SideBar;
