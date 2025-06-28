// pages/_app.tsx
import { AppProps } from 'next/app';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // ✅ AOS styles

const theme = createTheme({
  palette: {
    background: {
      default: '#f4f6f8',
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  // ✅ Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // only animate once
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: theme.palette.background.default },
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
