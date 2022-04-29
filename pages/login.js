import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Alert
import Swal from 'sweetalert2';

// Styles
import { Form } from '../components/ui/Form/FormElements';
import { Title, Text, Container } from '../components/Auth/AuthElements';
import Error from '../components/ui/Error';

// Form logic
import { Formik } from 'formik';
import { LoginSchema } from '../Auth/formValidations';

//FIREBASE
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const { push } = useRouter();

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      push('/');
      
      Swal.fire({
        title: 'Logged In!',
        text: 'Ya podes navegar tranquilo',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    } catch (error) {

      Swal.fire({
        title: 'Error',
        text: 'Credenciales incorrectas',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  };
  return (
    <Layout>
      <Container>
        <Title>Log In</Title>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            login(values.email, values.password);
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
              {errors.email && touched.email && <Error text={errors.email} />}
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && <Error text={errors.password} />}
              <button type="submit">Login</button>
            </Form>
          )}
        </Formik>

        <Text>
          Don't have an account? Register<Link href="/signup">here</Link>
        </Text>
      </Container>
    </Layout>
  );
};

export default Login;
