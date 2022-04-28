import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/dist/client/link';

import { Form } from '../components/ui/Form/FormElements';
import { Title, Text } from '../components/Auth/AuthElements';
const Signup = () => {
  return (
    <Layout>
      <div>
        <Title>Sign Up</Title>

        <Form>
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <input type="password" placeholder="Repeat your password" required />
          <button type="submit">Register</button>
        </Form>

        <Text>
          Already have an account? Login<Link href="/login">here</Link>
        </Text>
      </div>
    </Layout>
  );
};

export default Signup;
