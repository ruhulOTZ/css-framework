import React from 'react';
import Styles from './BitSettings.module.scss';

function BitSetting() {
    const handleColor = (color, event) => {
        switch (color) {
            case 'btnBg':
                document.documentElement.style.setProperty('--btn-background', event.target.value);
                break;

            case 'btnText':
                document.documentElement.style.setProperty('--btn-text', event.target.value);
                break;

            case 'btnBorder':
                document.documentElement.style.setProperty('--btn-border', event.target.value);
                break;

            case 'btnHoverBg':
                document.documentElement.style.setProperty(
                    '--btn-hover-background',
                    event.target.value
                );
                break;

            case 'btnHoverText':
                document.documentElement.style.setProperty('--btn-hover-text', event.target.value);
                break;

            case 'btnHoverBorder':
                document.documentElement.style.setProperty(
                    '--btn-hover-border',
                    event.target.value
                );
                break;

            case 'inputBg':
                document.documentElement.style.setProperty('--inp-background', event.target.value);
                break;

            case 'inputText':
                document.documentElement.style.setProperty('--inp-text', event.target.value);
                break;

            case 'inputBorder':
                document.documentElement.style.setProperty('--inp-border', event.target.value);
                break;

            case 'inputPlaceholder':
                document.documentElement.style.setProperty('--inp-placeholder', event.target.value);
                break;

            case 'inputIcon':
                document.documentElement.style.setProperty('--inp-icon', event.target.value);
                break;

            //   --tab-wub-text: #0025db;
            //   --tab-wub-active-text: #ff264a;
            case 'twbText':
                document.documentElement.style.setProperty('--tab-wb-text', event.target.value);
                break;

            case 'twbBg':
                document.documentElement.style.setProperty(
                    '--tab-wb-background',
                    event.target.value
                );
                break;

            case 'twbActiveText':
                document.documentElement.style.setProperty(
                    '--tab-wb-active-text',
                    event.target.value
                );
                break;

            case 'twbActiveBg':
                document.documentElement.style.setProperty(
                    '--tab-wb-active-background',
                    event.target.value
                );
                break;

            case 'twubText':
                document.documentElement.style.setProperty('--tab-wub-text', event.target.value);
                break;

            case 'twubActiveText':
                document.documentElement.style.setProperty(
                    '--tab-wub-active-text',
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
                <h3>Button General</h3>
                <div className={Styles.dynamicColorItems}>
                    <div className={Styles.dynamicColorItem}>
                        <span>Button BG</span>
                        <input type="color" onChange={event => handleColor('btnBg', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Button Text</span>
                        <input type="color" onChange={event => handleColor('btnText', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Button Border</span>
                        <input type="color" onChange={event => handleColor('btnBorder', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Button Hover BG</span>
                        <input type="color" onChange={event => handleColor('btnHoverBg', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Button Hover Text</span>
                        <input
                            type="color"
                            onChange={event => handleColor('btnHoverText', event)}
                        />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Button Hover Border</span>
                        <input
                            type="color"
                            onChange={event => handleColor('btnHoverBorder', event)}
                        />
                    </div>
                </div>
            </div>

            <div className={Styles.dynamicColorContent}>
                <h3>Input General</h3>
                <div className={Styles.dynamicColorItems}>
                    <div className={Styles.dynamicColorItem}>
                        <span>Input BG</span>
                        <input type="color" onChange={event => handleColor('inputBg', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Input Text</span>
                        <input type="color" onChange={event => handleColor('inputText', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Input Border</span>
                        <input type="color" onChange={event => handleColor('inputBorder', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Input Placeholder</span>
                        <input
                            type="color"
                            onChange={event => handleColor('inputPlaceholder', event)}
                        />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Input Icon</span>
                        <input type="color" onChange={event => handleColor('inputIcon', event)} />
                    </div>
                </div>
            </div>

            <div className={Styles.dynamicColorContent}>
                <h3>Tabs General</h3>

                <div className={Styles.dynamicColorItems}>
                    <div className={Styles.dynamicColorItem}>
                        <span>Tabs withBg - Text</span>
                        <input type="color" onChange={event => handleColor('twbText', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Tab withBg - background</span>
                        <input type="color" onChange={event => handleColor('twbBg', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Tabs WithBg - Active Text</span>
                        <input
                            type="color"
                            onChange={event => handleColor('twbActiveText', event)}
                        />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Tabs WithBg - Active Background</span>
                        <input type="color" onChange={event => handleColor('twbActiveBg', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Tab withoutBg - text</span>
                        <input type="color" onChange={event => handleColor('twubText', event)} />
                    </div>

                    <div className={Styles.dynamicColorItem}>
                        <span>Tab withoutBg - Active text</span>
                        <input
                            type="color"
                            onChange={event => handleColor('twubActiveText', event)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BitSetting;
