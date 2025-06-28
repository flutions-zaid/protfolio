// components/ScrollToTop.tsx
import { Fab, useScrollTrigger, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box } from '@mui/system';

const ScrollToTop = () => {
  const trigger = useScrollTrigger({ threshold: 200 });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 9999 }}
        onClick={handleClick}
      >
        <Fab color="primary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ScrollToTop;
