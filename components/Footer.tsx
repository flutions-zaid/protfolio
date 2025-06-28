// components/Footer.tsx
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#222', color: '#fff', py: 2, textAlign: 'center' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Mohammed Zaid. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
