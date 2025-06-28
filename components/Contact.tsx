// components/Contact.tsx
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Box sx={{ backgroundColor: 'lightgray', py: 10 }} id="contact">
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Let’s Work Together
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            I'm currently open to new opportunities. Feel free to reach out to me.
          </Typography>

          <Stack direction="row" spacing={4} justifyContent="center" sx={{ mb: 4 }}>
            <IconButton
              component="a"
              href="mailto:a.s.mohammedzaidflutions@gmail.com"
              sx={{ color: '#1976d2' }}
            >
              <Email fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/flutions-zaid"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#000' }}
            >
              <GitHub fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkedin.com/in/mohammed-zaid-74373728b"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#0a66c2' }}
            >
              <LinkedIn fontSize="large" />
            </IconButton>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            Or drop me a message via email: <strong>a.s.mohammedzaidflutions@gmail.com</strong>
          </Typography>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Contact;
