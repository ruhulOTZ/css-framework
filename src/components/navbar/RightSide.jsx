/* eslint-disable prettier/prettier */
import React from 'react';
import UserAvatar from '../../assets/images/avatar.png';
import { AddIcon, CallIcon, NotificationIcon } from '../../icons/icons';
import Styles from './RightSide.module.scss';

function RightSide() {
    return (
        <div className={Styles.rightSideWrapper}>
            <input className={Styles.searchInput} type="search" placeholder="Search" />
            <span className={Styles.callIcon}>
                <CallIcon />
            </span>
            <span className={Styles.callIcon}>
                <AddIcon />
            </span>
            <span className={Styles.callIcon}>
                <NotificationIcon />
            </span>

            <div className={Styles.creditWrapper}>
                 <span className={Styles.dollar}>$</span>
                 <span className={Styles.badge}>120.53</span>
            </div>

            <div className={Styles.profileWrapper}>
                {/* <UserAvatar /> */}
                <img className={Styles.userAvatar} src={UserAvatar} alt="" />

                <div className={Styles.userInfo}>
                    <h3>Technical Test</h3>
                    <span>technical_test@orangetoolz.com</span>
                </div>
            </div>

        </div>
    );
}

export default RightSide;
