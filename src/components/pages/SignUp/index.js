import React, { useEffect, useMemo, useState } from 'react';
// LIBRARIES
import { useFormik } from 'formik';
import * as Yup from 'yup';
// COMPONENTS
import Input from '../../common/Input';
import Button from '../../common/Button';
import CustomSelect from '../../common/Select';
// IMAGES
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as FirstNameIcon } from './images/u_user.svg';
import { ReactComponent as SecondNameIcon } from './images/u_users-alt.svg';
import { ReactComponent as CountryIcon } from './images/u_map-marker-alt.svg';
import { ReactComponent as PhoneIcon } from './images/u_phone-alt.svg';
import { ReactComponent as PasswordIcon } from './images/u_padlock.svg';
import { ReactComponent as ConfirmPasswordIcon } from './images/u_padlock (1).svg';
import { ReactComponent as EmailIcon } from './images/u_envelope.svg';
import { ReactComponent as MobileBgImage1 } from './images/section_2-svg_1.svg';
import { ReactComponent as MobileBgImage2 } from './images/section_2-svg_2.svg';
import { ReactComponent as MobileBgImage3 } from './images/section_2-svg_3.svg';
// STYLES
import styles from './index.module.scss';
import Checkbox from '../../common/Checkbox';

const stringRegEx = /^.{1,100}$/;
const phoneRegExp = /^\d+$/;

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .matches(
            stringRegEx,
            'Please, enter a correct value'
        ),
    secondName: Yup.string()
        .matches(
            stringRegEx,
            'Please, enter a correct value'
        ),
    phone: Yup.string()
        .matches(phoneRegExp, 'Enter a correct phone number'),
    terms: Yup.bool()
        .oneOf([true], 'Required!'),
    email: Yup.string().email('Enter a correct email').required('Email is required'),
    password: Yup.string()
        .required('Password is required'),
    confirmPassword: Yup.string()
        .required('Password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const SignUp = () => {
    const [selectedCountry, setSelectedCountry] = useState();
    const countries = require('./../../../data/countries-codes.json');
    const formik = useFormik({
        initialValues: {
            firstName: '',
            secondName: '',
            country: '',
            phone: '',
            password: '',
            confirmPassword: '',
            email: '',
            terms: false
        },
        validateOnChange: false,
        validationSchema: SignupSchema,
        onSubmit: values => {
            handleSubmit(values);
        },
    });
    useEffect(() => {
        const countryCode = countries.find(item => item.name === formik.values.country)
        if (countryCode) {
            setSelectedCountry(countryCode.dial_code);
        }
    }, [formik.values.country]);
    const handleSelectCountry = (value) => {
        formik.setFieldValue('country', `${value}`)
    }
    const checkboxLabel = <p>I agree to the <a href='/' className={styles.termsLink}>Terms & Conditions</a></p>
    const countriesOptions = countries.map(country => {
        return {
            value: country.name,
            label: country.name
        };
    });
    const handleSubmit = (values) => {
        const correctedValues = {
            ...values,
            phone: `${selectedCountry}${values.phone}`
        }
        console.log(JSON.stringify(correctedValues, null, 2));
    };
    return (
        <div className={styles.root}>
            <div />
            <div className={styles.signUpFormWrapper}>
                <Logo className={styles.logo}/>
                <h1 className={styles.title}>
                    <span>Sign Up</span> and find the best place to rest while traveling
                </h1>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <Input
                        value={formik.values.firstName}
                        name='firstName'
                        onChange={formik.handleChange}
                        placeholder='First Name'
                        Icon={FirstNameIcon}
                        error={formik.errors.firstName && formik.errors.firstName}
                    />
                    <Input
                        value={formik.values.secondName}
                        name='secondName'
                        onChange={formik.handleChange}
                        placeholder='Second Name'
                        Icon={SecondNameIcon}
                        error={formik.errors.secondName && formik.errors.secondName}
                    />
                    <CustomSelect
                        value={formik.values.country}
                        name='country'
                        handleSelectedValue={(value) => handleSelectCountry(value)}
                        placeholder='Country'
                        Icon={CountryIcon}
                        options={countriesOptions}
                    />
                    <Input
                        value={formik.values.phone}
                        name='phone'
                        onChange={formik.handleChange}
                        placeholder='Phone'
                        Icon={PhoneIcon}
                        phoneMask={selectedCountry}
                        error={formik.errors.phone && formik.errors.phone}
                    />
                    <Input
                        value={formik.values.password}
                        name='password'
                        type='password'
                        onChange={formik.handleChange}
                        placeholder='Password'
                        Icon={PasswordIcon}
                        error={formik.errors.password && formik.errors.password}
                    />
                    <Input
                        value={formik.values.confirmPassword}
                        name='confirmPassword'
                        type='password'
                        onChange={formik.handleChange}
                        placeholder='Confirm password'
                        Icon={ConfirmPasswordIcon}
                        error={formik.errors.confirmPassword && formik.errors.confirmPassword}
                    />
                    <Input
                        value={formik.values.email}
                        name='email'
                        onChange={formik.handleChange}
                        placeholder='Email'
                        Icon={EmailIcon}
                        error={formik.errors.email && formik.errors.email}
                    />
                    <div className={styles.checkboxWrapper}>
                        <Checkbox
                            value={formik.values.terms}
                            name='terms'
                            onChange={formik.setFieldValue}
                            label={checkboxLabel}
                            error={formik.errors.terms && formik.errors.terms}
                        />
                    </div>
                    <div className={styles.buttonWrapper}>
                        <Button
                            label='Sign up'
                        />
                    </div>
                </form>
            </div>
            <div className={styles.logInWrapper}>
                <p className={styles.logInText}>
                    If you have an account, <a href='/' className={styles.logIn}>Log In</a>
                </p>
            </div>
            <MobileBgImage1 className={styles.mobileBg1}/>
            <MobileBgImage2 className={styles.mobileBg2}/>
            <MobileBgImage3 className={styles.mobileBg3}/>
        </div>
    );
};

export default SignUp;