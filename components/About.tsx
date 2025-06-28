'use client';
import { useEffect } from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box
      id="about"
      sx={{
        background: 'linear-gradient(to right, #e0f7fa, #ffffff)',
        py: { xs: 12, md: 16 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Avatar
          alt="Mohammed Zaid"
          src="/images/zaid1.jpg"
          sx={{
            width: 280,
            height: 280,
            mx: 'auto',
            mb: 4,
            border: '5px solid #1976d2',
            boxShadow: 4,
          }}
          data-aos="fade-down"
        />

        <Typography variant="h3" fontWeight="bold" gutterBottom data-aos="fade-up">
          Mohammed Zaid
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 3 }}
          data-aos="fade-up"
        >
          Front-End Developer • React & Next.js Enthusiast • Creative Coder
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.15rem',
            lineHeight: 1.9,
            color: '#333',
            maxWidth: 750,
            mx: 'auto',
          }}
          data-aos="fade-up"
        >
          I'm a passionate web developer dedicated to creating visually stunning and highly
          functional websites. With a strong grip on modern tools like React.js, Next.js,
          and Material UI, I bring clean code and fresh design together to deliver immersive user
          experiences. My mission is to make the web faster, more beautiful, and more human.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1rem',
            color: '#555',
            mt: 4,
            maxWidth: 720,
            mx: 'auto',
          }}
          data-aos="fade-up"
        >
          I thrive in building fast, accessible, and SEO-friendly apps that scale. Whether it’s a
          sleek portfolio or a complex product dashboard, I put user experience first and
          continuously learn to stay ahead in the front-end world.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
