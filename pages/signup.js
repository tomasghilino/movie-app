import React, { useContext } from 'react';
import Layout from '../components/Layout';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';

// Alert
import Swal from 'sweetalert2';

// styles
import { Form } from '../components/ui/Form/FormElements';
import { Title, Text, Container } from '../components/Auth/AuthElements';

import Error from '../components/ui/Error';

// Form logic
import { Formik } from 'formik';
import { SignupSchema } from '../Auth/formValidations';

//FIREBASE
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
  const { push } = useRouter();

  const register = async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // ADDING USER IN COLLECTION : user in session id === user in collection id, so we can get his data
      await setDoc(doc(db, 'user', res.user.uid), {
        id: res.user.uid,
        favoritesMovies: [],
        listMovies: [],
      });

      push('/');

      Swal.fire({
        title: 'Registrado!',
        text: 'Ya podes navegar tranquilo',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'No se pudo realizar el registro',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  };

  return (
    <Layout>
      <Container>
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
            touched,
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
              {errors.email && touched.email && <Error text={errors.email} />}
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <Error text={errors.password} />
              )}
              <input
                type="password"
                name="passwordRepeat"
                placeholder="Repeat your password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.passwordRepeat && touched.passwordRepeat && (
                <Error text={errors.passwordRepeat} />
              )}
              <button type="submit">Register</button>
            </Form>
          )}
        </Formik>

        <Text>
          Already have an account? Login<Link href="/login">here</Link>
        </Text>
      </Container>
    </Layout>
  );
};

export default Signup;
