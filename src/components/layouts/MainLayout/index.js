import React from 'react';
// IMAGES
import bgImage from './images/bg-cover.jpg';
// STYLES
import styles from './index.module.scss';

const MainLayout = ({ children }) => {
    return (
        <div className={styles.root}>
            <img src={bgImage} alt='bg-image' className={styles.bgImage}/>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;