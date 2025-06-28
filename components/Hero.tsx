// components/Hero.tsx
import { Box, Typography, Button } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url("/images/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'left',
          px: { xs: 3, md: 10 },
        }}
      >
        <Box sx={{ maxWidth: 700 }}>
          {/* Static Name */}
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, color: '#fff' }}
          >
            Mohammed Zaid
          </Typography>

          {/* Typing Animation */}
          <Typography
            variant="h5"
            sx={{ color: '#fff', minHeight: 60 }}
          >
            <Typewriter
              words={['Front-End Developer | React & Next.js Specialist']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </Typography>

          {/* Button */}
          <Button
            variant="contained"
            href="#about"
            sx={{ mt: 4, px: 4, py: 1.5, fontWeight: 'bold' }}
          >
            Explore More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
