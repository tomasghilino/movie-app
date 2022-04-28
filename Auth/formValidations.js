import React from 'react';

import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Minimum is 3 characters.')
    .required('Name is Required.'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string()
    .min(6, 'Too Short! Minimum is 6 characters.')
    .required('Password is Required'),
  passwordRepeat: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password Repeat is Required'),
});
export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required.'),
  password: Yup.string()
    .min(6, 'Too Short! Minimum is 6 characters.')
    .required('Password is Required.'),
});
