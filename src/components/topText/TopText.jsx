import React from 'react';
import Styles from './TopText.module.scss';

function TopText({children}) {
    return <div className={Styles.topText}>{children}</div>;
}

export default TopText;
