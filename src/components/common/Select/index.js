import React from 'react';
// LIBRARIES
import Select, { components } from 'react-select'
// IMAGES
import { ReactComponent as DropdownArrowIcon } from './images/u_angle-right-b.svg';
// STYLES
import styles from './index.module.scss';
import classNames from 'classnames';

const getCustomStyles = () => ({
    indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none'
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        paddingRight: 7
    }),
    container: (provided) => ({
        ...provided,
        '&:focus': {
            '& ~ .placeholder': {
                border: '1px solid red'
            }
        }
    }),
    placeholder: (provided) => ({
        ...provided,
        display: 'none'
    }),
    control: (provided) => ({
        ...provided,
        height: 56,
        background: 'none',
        border: '1px solid #FFFFFF',
        transition: '.3s linear',
        boxShadow: 'none',
        '&:hover': {
            border: '1px solid #6CEEC7'
        },
        ':focus-within': {
            border: '1px solid #6CEEC7'
        },
    }),
    input: (provided) => ({
        ...provided,
        padding: 0,
        font: '19px/normal var(--rubik-light)',
        color: '#E0E0E0'
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: '22px 30px 11px 50px',
        font: '19px/normal var(--rubik-light)',
        color: '#E0E0E0'
    }),
    singleValue: (provided) => ({
        ...provided,
        font: '19px/normal var(--rubik-light)',
        color: '#E0E0E0'
    }),
    menu: (provided) => ({
        ...provided,
        background: '#FFFFFF',
        boxShadow: '0 0 18px rgba(31, 33, 35, 0.08)',
        borderRadius: 10,
        border: 'none',
        marginTop: 2,
        zIndex: 10
    }),
    menuList: (provided) => ({
        ...provided,
        padding: '21px 23px',
        font: '15px/normal var(--rubik-light)',
        maxHeight: 155,
        "::-webkit-scrollbar": {
            width: "4px",
            height: "21px",

        },
        "::-webkit-scrollbar-track": {
            background: "none",
            marginBlock: 10
        },
        "::-webkit-scrollbar-thumb": {
            background: "#D0D0D0",
            borderRight: '1px transparent solid',
            backgroundClip: 'padding-box'
        }
    }),
    option: (provided) => ({
        ...provided,
        padding: 0,
        color: '#5E5E5E',
        marginBottom: 15,
        cursor: 'pointer',
        background: 'none',
        transition: '.3s linear',
        '&:last-child': {
            marginBottom: 0
        },
        '&:hover': {
            background: 'none',
            paddingLeft: 9,
            color: '#212121'
        },
        '&:active': {
            background: 'none',
            color: '#212121'
        }
    }),
});

const DropdownIndicator = ({ selectProps, ...props }) => {
    return (
        <components.DropdownIndicator {...props}>
            <DropdownArrowIcon className={classNames(styles.arrow, { [styles.arrowReverted]: selectProps.menuIsOpen })}/>
        </components.DropdownIndicator>
    );
};

const CustomSelect = ({ value, handleSelectedValue, options, placeholder, Icon }) => {
    const components = {
        DropdownIndicator
    };
    return (
        <div className={styles.root}>
            {Icon && <Icon className={styles.icon}/>}
            <Select
                components={components}
                options={options}
                styles={getCustomStyles()}
                onChange={(choice) => handleSelectedValue(choice.value)}
                // menuIsOpen={true}
            />
            {placeholder && <p className={classNames(styles.placeholder,
                { [styles.withValue]: !!value })}>{placeholder}</p>}
        </div>
    );
};

export default CustomSelect;