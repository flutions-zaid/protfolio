'use client';
import { Box, Typography, Container, Avatar } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box
      id="about"
      sx={{
        backgroundColor: '#f9f9f9',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        {/* Avatar */}
        <Avatar
          alt="Mohammed Zaid"
          src="/images/zaid1.jpg" // replace with your real image path
          sx={{
            width: 120,
            height: 120,
            margin: '0 auto',
            mb: 3,
            border: '4px solid #1976d2',
          }}
          data-aos="fade-down"
        />

        {/* Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          data-aos="fade-up"
        >
          About Me
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{ lineHeight: 1.8, maxWidth: 700, mx: 'auto', color: '#555' }}
          data-aos="fade-up"
        >
          I’m Mohammed Zaid, a passionate Front-End Developer with experience in
          React, Next.js, and Firebase. I focus on building modern, responsive, and
          clean web applications. I enjoy turning designs into reality and creating
          intuitive digital experiences.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
