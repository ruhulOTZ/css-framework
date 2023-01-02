/* eslint-disable no-unused-vars */
import React from 'react';
import Styles from './DynamicColor.module.scss';

function DynamicColor() {
    const handleNavbarBg = e => {
        console.log(e.target.value);
    };

    return (
        <div className={Styles.dynamicColorWrapper}>
            <div className={Styles.dynamicColorContent}>
                <h3>TopBar General</h3>
                <div className={Styles.dynamicColorItems}>
                    <div className={Styles.dynamicColorItem}>
                        <span>NavBG</span>
                        <input type="color" onChange={e => handleNavbarBg} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Toggle Icon</span>
                        <input type="color" />
                    </div>
                </div>
            </div>

            <div className={Styles.dynamicColorContent}>
                <h3>TopBar Search Box</h3>
                <div className={Styles.dynamicColorItems}>
                    <div className={Styles.dynamicColorItem}>
                        <span>Search bg</span>
                        <input type="color" />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Search text</span>
                        <input type="color" />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Search Border</span>
                        <input type="color" />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Search Placeholder</span>
                        <input type="color" />
                    </div>
                </div>
            </div>

            <div className={Styles.dynamicColorContent}>
                <h3>TopBar Icons</h3>
                <div className={Styles.dynamicColorItems}>
                    <div className={Styles.dynamicColorItem}>
                        <span>Icon Color</span>
                        <input type="color" />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Icon Bg</span>
                        <input type="color" />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Icon Hover Color</span>
                        <input type="color" />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Icon Hover Bg</span>
                        <input type="color" />
                    </div>
                </div>
            </div>

            <div className={Styles.dynamicColorContent}>
                <h3>TopBar Badge</h3>
                <div className={Styles.dynamicColorItems}>
                    <div className={Styles.dynamicColorItem}>
                        <span>Badge Text</span>
                        <input type="color" />
                    </div>
                    <div className={Styles.dynamicColorItem}>
                        <span>Badge BG</span>
                        <input type="color" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DynamicColor;
