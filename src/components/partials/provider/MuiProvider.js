"use client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { yekan } from "@/utils/fonts";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: yekan,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body { 
          padding-right: 0;
        } 
      `,
    },
  },
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function MuiProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>{children}</CacheProvider>
    </ThemeProvider>
  );
}

export default MuiProvider;
