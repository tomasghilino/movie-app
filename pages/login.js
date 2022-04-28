import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

// Styles
import { Form } from '../components/ui/Form/FormElements';
import { Title, Text } from '../components/Auth/AuthElements';
import Error from '../components/ui/Error';

// Form logic
import { Formik } from 'formik';
import { LoginSchema } from '../Auth/formValidations';

const Login = () => {
  return (
    <Layout>
      <div>
        <Title>Log In</Title>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            touched,
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
              <button type="submit">Login</button>
            </Form>
          )}
        </Formik>

        <Text>
          Don't have an account? Register<Link href="/signup">here</Link>
        </Text>
      </div>
    </Layout>
  );
};

export default Login;
