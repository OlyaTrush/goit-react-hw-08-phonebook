import * as React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form } from './LoginForm.styled';
import { TextField, Button } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        label="Email"
        variant="outlined"
        size="small"
        name="email"
        type="email"
        required
        sx={{ mb: '15px' }}
      />
      <TextField
        label="Password"
        variant="outlined"
        size="small"
        name="password"
        type="password"
        required
        sx={{ mb: '15px' }}
      />
      <Button variant="contained" type="submit">
        Log In
      </Button>
    </Form>
  );
};