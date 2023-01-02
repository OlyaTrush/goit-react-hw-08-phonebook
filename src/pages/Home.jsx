import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Box sx={{ maxWidth: `1650px`, paddingTop: `150px` }}>
      <Box
        sx={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          flexDirection: `column`,
          height: `400px`,
          width: `900px`,
          marginLeft: `25%`,
          marginRight: `25%`,
          backgroundColor: `#ffffffa3`,
          boxShadow: `0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2)`,
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: `45px`, fontWeight: `600`, marginBottom: `40px` }}
        >
          Create your personal phonebook 
        </Typography>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <Typography
            paragraph={true}
            sx={{
              margin: `0`,
              padding: `10px`,
              fontSize: `35px`,
              backgroundColor: `#1976d2`,
              color: `#fff`,
              borderRadius: `4px`,
              '&:hover': {
                color: `#3b5998`,
                backgroundColor: `aliceblue`,
                border: `1px solid #3b5998`,
                borderRadius: `4px`,
              },
            }}
          >
            Let's Get Started!
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;