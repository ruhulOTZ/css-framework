import React from 'react';
import Styles from './GeneralSettings.module.scss';

function GeneralSetting() {
    const handleColor = (color, event) => {
        switch (color) {
            case 'prText':
                document.documentElement.style.setProperty(
                    '--primary-text-color',
                    event.target.value
                );
                break;

            case 'scText':
                document.documentElement.style.setProperty(
                    '--secondary-text-color',
                    event.target.value
                );
                break;

            case 'accentText':
                document.documentElement.style.setProperty('--accent-color', event.target.value);
                break;

            default:
                break;
        }
    };

    return (
        <div className={Styles.dynamicColorWrapper}>
            <div className={Styles.dynamicColorContent}>
                <h3>General Color Settings</h3>
                <div className={Styles.dynamicColorItems}>
                    <div className={Styles.dynamicColorItem}>
                        <span>Primary Text</span>
                        <input type="color" onChange={event => handleColor('prText', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Secondary Text</span>
                        <input type="color" onChange={event => handleColor('scText', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Accent Text</span>
                        <input type="color" onChange={event => handleColor('accentText', event)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralSetting;
