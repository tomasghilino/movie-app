import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';

// styles
import { Form } from '../components/ui/Form/FormElements';
import { Title, Text } from '../components/Auth/AuthElements';

import Error from '../components/ui/Error';

// Form logic
import { Formik } from 'formik';
import { SignupSchema } from '../Auth/formValidations';

//FIREBASE
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Signup = () => {
  const { push } = useRouter();

  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div>
        <Title>Sign Up</Title>

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            passwordRepeat: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            register(values.email, values.password);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,

            /* and other goodies */
          }) => (
            <Form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && <Error text={errors.email} />}
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && <Error text={errors.password} />}
              <input
                type="password"
                name="passwordRepeat"
                placeholder="Repeat your password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.passwordRepeat && <Error text={errors.passwordRepeat} />}
              <button type="submit">Register</button>
            </Form>
          )}
        </Formik>

        <Text>
          Already have an account? Login<Link href="/login">here</Link>
        </Text>
      </div>
    </Layout>
  );
};

export default Signup;
