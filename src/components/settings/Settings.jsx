import React from 'react';
import Styles from './Settings.module.scss';

function Settings() {
    const handleColor = (color, event) => {
        switch (color) {
            case 'navBarText':
                document.documentElement.style.setProperty('--tb-text-color', event.target.value);
                break;
            case 'navBarBg':
                document.documentElement.style.setProperty('--tb-bg-color', event.target.value);
                break;
            case 'toggleIcon':
                document.documentElement.style.setProperty('--tb-toggle-color', event.target.value);
                break;
            case 'searchBg':
                document.documentElement.style.setProperty(
                    '--tb-search-background',
                    event.target.value
                );
                break;
            case 'searchText':
                document.documentElement.style.setProperty('--tb-search-text', event.target.value);
                break;
            case 'searchBorder':
                document.documentElement.style.setProperty(
                    '--tb-search-border',
                    event.target.value
                );
                break;
            case 'searchPlaceholder':
                document.documentElement.style.setProperty(
                    '--tb-search-placeholder',
                    event.target.value
                );
                break;
            case 'iconColor':
                document.documentElement.style.setProperty('--tb-icon-color', event.target.value);
                break;
            case 'iconBg':
                document.documentElement.style.setProperty(
                    '--tb-icon-background-color',
                    event.target.value
                );
                break;
            case 'iconHoverColor':
                document.documentElement.style.setProperty(
                    '--tb-icon-hover-icon-color',
                    event.target.value
                );
                break;
            case 'iconHoverBg':
                document.documentElement.style.setProperty(
                    '--tb-icon-hover-background-color',
                    event.target.value
                );
                break;
            case 'badgeColor':
                document.documentElement.style.setProperty('--tb-badge-text', event.target.value);
                break;
            case 'badgeBg':
                document.documentElement.style.setProperty('--tb-badge-bg', event.target.value);
                break;

            default:
                break;
        }
    };

    return (
        <div className={Styles.dynamicColorWrapper}>
            <div className={Styles.dynamicColorContent}>
                <h3>TopBar General</h3>
                <div className={Styles.dynamicColorItems}>
                    <div className={Styles.dynamicColorItem}>
                        <span>Navbar Text</span>
                        <input type="color" onChange={event => handleColor('navBarText', event)} />
                    </div>
                    <div className={Styles.dynamicColorItem}>
                        <span>Navbar BG</span>
                        <input type="color" onChange={event => handleColor('navBarBg', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Toggle Icon</span>
                        <input type="color" onChange={event => handleColor('toggleIcon', event)} />
                    </div>
                </div>
            </div>

            <div className={Styles.dynamicColorContent}>
                <h3>TopBar Search Box</h3>
                <div className={Styles.dynamicColorItems}>
                    <div className={Styles.dynamicColorItem}>
                        <span>Search bg</span>
                        <input type="color" onChange={event => handleColor('searchBg', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Search text</span>
                        <input type="color" onChange={event => handleColor('searchText', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Search Border</span>
                        <input
                            type="color"
                            onChange={event => handleColor('searchBorder', event)}
                        />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Search Placeholder</span>
                        <input
                            type="color"
                            onChange={event => handleColor('searchPlaceholder', event)}
                        />
                    </div>
                </div>
            </div>

            <div className={Styles.dynamicColorContent}>
                <h3>TopBar Icons</h3>
                <div className={Styles.dynamicColorItems}>
                    <div className={Styles.dynamicColorItem}>
                        <span>Icon Color</span>

                        <input type="color" onChange={event => handleColor('iconColor', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Icon Bg</span>
                        <input type="color" onChange={event => handleColor('iconBg', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Icon Hover Color</span>
                        <input
                            type="color"
                            onChange={event => handleColor('iconHoverColor', event)}
                        />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Icon Hover Bg</span>
                        <input type="color" onChange={event => handleColor('iconHoverBg', event)} />
                    </div>
                </div>
            </div>

            <div className={Styles.dynamicColorContent}>
                <h3>TopBar Badge</h3>
                <div className={Styles.dynamicColorItems}>
                    <div className={Styles.dynamicColorItem}>
                        <span>Badge Text</span>
                        <input type="color" onChange={event => handleColor('badgeColor', event)} />
                    </div>
                    <div className={Styles.dynamicColorItem}>
                        <span>Badge BG</span>
                        <input type="color" onChange={event => handleColor('badgeBg', event)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
