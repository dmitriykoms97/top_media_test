import React from 'react';
// STYLES
import styles from './index.module.scss';

const Button = ({ label, onClick }) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;