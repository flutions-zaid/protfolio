import { Box, Typography } from '@mui/material';

export default function TestPage() {
  return (
    <Box
      sx={{
        backgroundColor: '#ffcccc', // BRIGHT red-pink to easily see
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        Test Background Color ✅
      </Typography>
    </Box>
  );
}
