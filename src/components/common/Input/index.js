import React from 'react';
// LIBRARIES
import classNames from 'classnames';
// STYLES
import styles from './index.module.scss';

const Input = ({ id, type, value, name, onChange, placeholder, Icon, phoneMask, error }) => {
    return (
        <div className={styles.root}>
            {Icon && <Icon className={styles.icon}/>}
            <input
                id={id}
                value={value}
                onChange={onChange}
                name={name}
                type={type}
                autoComplete="new-password"
                style={{ paddingLeft: phoneMask ? `${phoneMask.length * 11 + 55}px` : 50 }}
                className={classNames(styles.input, { [styles.error]: error })}
            />
            {phoneMask && <p className={styles.phoneMask}>{phoneMask}</p>}
            <label
                htmlFor={id}
                className={classNames(styles.placeholder,
                    { [styles.withValue]: !!value || phoneMask })}>
                {placeholder}
            </label>
            {error && <p className={styles.errorText}>{error}</p>}
        </div>
    );
};

export default Input;