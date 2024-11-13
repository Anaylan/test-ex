'use client';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    cssVariables: true,
    palette: {
        mode: 'light',
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 932,
            lg: 1200,
            xl: 1536,
        }
    },
});
export default theme;