// components/About.tsx
import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Box
      id="about"
      data-aos="fade-up"
      sx={{
        backgroundColor: 'lightgray',
        py: { xs: 6, md: 10 },
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          {/* Text Section */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              I’m Mohammed Zaid, a passionate Front-End Developer with experience building responsive and high-performance web applications using React, Next.js, and Firebase. I love bringing ideas to life through clean code and modern UI.
            </Typography>
          </Box>

          {/* Image Placeholder */}
          <Box
            component="img"
            src="/images/zaid1.jpg"
            alt="Zaid"
            sx={{
              flex: 1,
              width: '100%',
              height: 400,
              objectFit: 'cover',
              borderRadius: '50%',
              mx: 'auto',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default About;
