import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

const theme = createTheme({
  direction: "rtl",
  fontFamily: "iransans !important",
  // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </CacheProvider>
        </StyledEngineProvider>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
