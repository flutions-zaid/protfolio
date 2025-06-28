import { Box, Typography } from '@mui/material';

export default function Debug() {
  return (
    <Box
      sx={{
        backgroundColor: '#00ffcc', // 💚 Very visible background
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3">✅ Background Working</Typography>
    </Box>
  );
}
