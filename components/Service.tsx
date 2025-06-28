// components/Services.tsx
import { Box, Container, Typography, Paper } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';

const services = [
  {
    icon: <DesignServicesIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    title: 'UI/UX Design',
    description: 'Crafting intuitive interfaces and clean layouts with user-first principles.',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    title: 'Web Development',
    description: 'Building fast, responsive websites using React, Next.js, and Firebase.',
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
    title: 'Responsive Design',
    description: 'Ensuring your site looks great across all devices, from mobile to desktop.',
  },
];

const Services = () => {
  return (
    <Box id="services" data-aos="fade-up" sx={{ backgroundColor: '#e3f2fd', py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          What I Do
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 6 }}>
          Here are some of the things I can help you with
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {services.map((service, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                p: 4,
                textAlign: 'center',
                width: { xs: '100%', md: 300 },
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-5px)' },
              }}
              data-aos="zoom-in"
            >
              {service.icon}
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                {service.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, lineHeight: 1.8 }}>
                {service.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
