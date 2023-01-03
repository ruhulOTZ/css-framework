/* eslint-disable prettier/prettier */
import React from 'react';
import { AddIcon } from '../../icons/icons';
import TopText from '../topText/TopText';
import Styles from './Bit.module.scss';
import BitSetting from './BitSetting';

function Bit() {
    return (
        <>
            <TopText>Button, Input, Tabs</TopText>

            <div className={Styles.bitWrapper}>
                <div className={Styles.bitContent}>
                    <button className={Styles.btn} type="button">
                        Button
                    </button>

                    <div className={Styles.inputWrapper}>
                        <AddIcon />
                        <input className={Styles.input} type="text" placeholder="Type Anything" />
                    </div>

                    <div className={Styles.tabs}>
                        <div className={Styles.withBg}>
                            <div className={`${Styles.item} ${Styles.active}`}>Activity</div>
                            <div className={Styles.item}>Inbox</div>
                            <div className={Styles.item}>Notification</div>
                        </div>
                        <div className={Styles.withoutBg}>
                            <span className={`${Styles.item} ${Styles.active}`}>All</span>
                            <span className={Styles.item}>Unread</span>
                            <span className={Styles.item}>Recent</span>
                        </div>

                    </div>


                </div>

                <BitSetting />
            </div>
        </>
    );
}

export default Bit;
