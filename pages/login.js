import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

import { Form } from '../components/ui/Form/FormElements';
import { Title, Text } from '../components/Auth/AuthElements';

const Login = () => {
  return (
    <Layout>
      <div>
        <Title>Log In</Title>

        <Form>
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Login</button>
        </Form>

        <Text>
          Don't have an account? Register<Link href="/signup">here</Link>
        </Text>
      </div>
    </Layout>
  );
};

export default Login;
