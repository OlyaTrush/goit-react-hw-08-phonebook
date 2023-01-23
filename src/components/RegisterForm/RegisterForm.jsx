import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form } from './RegisterForm.styled';
import { TextField, Button } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        label="Username"
        variant="outlined"
        size="small"
        name="name"
        type="text"
        required
        sx={{ mb: '15px' }}
      />
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
        Register
      </Button>
    </Form>
  );
};

