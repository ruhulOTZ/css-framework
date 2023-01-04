import React from 'react';
import Styles from './Home.module.scss';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

function Home() {
    return (
        <div className={Styles.homeWrapper}>
            <LeftSide />
            <RightSide />
        </div>
    );
}

export default Home;
