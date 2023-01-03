import React from 'react';
import Styles from './Settings.module.scss';

function Settings() {
    const handleColor = (color, event) => {
        switch (color) {
            case 'sbBarBg':
                document.documentElement.style.setProperty('--sb-bg-color', event.target.value);
                break;

            case 'sbMenuText':
                document.documentElement.style.setProperty('--sb-menu-text', event.target.value);
                break;

            case 'sbMenuIcon':
                document.documentElement.style.setProperty('--sb-menu-icon', event.target.value);
                break;

            case 'sbMenuActiveText':
                document.documentElement.style.setProperty(
                    '--sb-menu-active-text',
                    event.target.value
                );
                break;

            case 'sbMenuActiveIcon':
                document.documentElement.style.setProperty(
                    '--sb-menu-active-icon',
                    event.target.value
                );
                break;

            case 'sbMenuActiveBg':
                document.documentElement.style.setProperty(
                    '--sb-menu-active-bg',
                    event.target.value
                );
                break;

            default:
                break;
        }
    };

    return (
        <div className={Styles.dynamicColorWrapper}>
            <div className={Styles.dynamicColorContent}>
                <h3>Sidebar General</h3>
                <div className={Styles.dynamicColorItems}>
                    <div className={Styles.dynamicColorItem}>
                        <span>Sidebar BG</span>
                        <input type="color" onChange={event => handleColor('sbBarBg', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Sidebar Text</span>
                        <input type="color" onChange={event => handleColor('sbMenuText', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Sidebar Icon</span>
                        <input type="color" onChange={event => handleColor('sbMenuIcon', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Sidebar Active Text</span>
                        <input
                            type="color"
                            onChange={event => handleColor('sbMenuActiveText', event)}
                        />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Sidebar Active Icon</span>
                        <input
                            type="color"
                            onChange={event => handleColor('sbMenuActiveIcon', event)}
                        />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Sidebar Active Bg</span>
                        <input
                            type="color"
                            onChange={event => handleColor('sbMenuActiveBg', event)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
