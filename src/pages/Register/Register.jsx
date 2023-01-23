import { Box, Typography, Avatar } from '@mui/material';
import Person3SharpIcon from '@mui/icons-material/Person3Sharp';
import { RegisterForm } from 'components/RegisterForm';

export default function Register() {
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
        Registration
      </Typography>
      <RegisterForm />
    </Box>
  );
}
