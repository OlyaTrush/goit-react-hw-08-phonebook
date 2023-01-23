import { Box, Typography,Avatar } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';
import Person3SharpIcon from '@mui/icons-material/Person3Sharp';

export default function Login() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px'
      }}
    >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <Person3SharpIcon />
          </Avatar>
      <Typography variant="h5" component="h2" sx={{ mb: '16px' }}>
        Login
      </Typography>
      <LoginForm />
    </Box>
  );
}
