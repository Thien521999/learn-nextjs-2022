import axiosClient from "@/api-client/axios-client";
import EmptyLayout from "@/components/layout/empty";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { SWRConfig } from "swr";
import { createEmotionCache, theme } from "utils";
import { AppPropsWithLayout } from "../models";
import "../styles/globals.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
}: // emotionCache = clientSideEmotionCache,
AppPropsWithLayout) {
  // console.log("App re-render");

  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* style middle browser will common */}
        <SWRConfig
          value={{
            fetcher: (url) => axiosClient.get(url),
            shouldRetryOnError: false,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
