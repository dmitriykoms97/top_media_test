import React from 'react';
// LIBRARIES
import classNames from 'classnames';
// STYLES
import styles from './index.module.scss';

const Checkbox = ({
                      value,
                      name,
                      onChange,
                      label,
                      className,
                      error,
                      disabled
                  }) => {
    const handleChange = (e) => {
        if (!disabled) {
            onChange(name, e.target.checked);
        }
    };
    return (
        <label className={classNames(styles.checkboxWrapper, {
            [styles.disabled]: disabled
        })}>
            <input
                type="checkbox"
                name={name}
                className={classNames(styles.checkbox,
                    { [className]: className })}
                checked={value}
                onChange={handleChange}
            />
            <div className={classNames(styles.customCheckbox,
                { [styles.error]: error })}/>
            {label && <p className={styles.text}>
                {label}
            </p>}
            {error && <p className={styles.errorText}>{error}</p>}
        </label>
    );
};

export default Checkbox;