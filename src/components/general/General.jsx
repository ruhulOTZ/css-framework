import React from 'react';
import TopText from '../topText/TopText';
import Styles from './General.module.scss';
import GeneralSetting from './GeneralSetting';

function General() {
    return (
        <>
            <TopText>Primary, secondary, Accent</TopText>
            <div className={Styles.generalWrapper}>
                <h1 className={Styles.primary}>This is primary text</h1>
                <p className={Styles.secondary}>
                    This is Secondary text. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus expedita necessitatibus pariatur, soluta, quos velit nesciunt, tenetur
                    excepturi aspernatur similique aliquid quisquam totam eaque sint in sit corrupti
                    quia voluptates?
                </p>

                <h2 className={Styles.accent}>This is Accent</h2>
                <p className={Styles.secondary}>
                    This is Secondary text. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus expedita necessitatibus pariatur, soluta, quos velit nesciunt, tenetur
                    excepturi aspernatur similique aliquid quisquam totam eaque sint in sit corrupti
                    quia voluptates?
                </p>
            </div>

            <GeneralSetting />
        </>
    );
}

export default General;
