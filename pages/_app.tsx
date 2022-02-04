import axiosClient from "@/api-client/axios-client";
import EmptyLayout from "@/components/layout/empty";
import { SWRConfig } from "swr";
import { AppPropsWithLayout } from "../models";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // console.log("App re-render");

  const Layout = Component.Layout ?? EmptyLayout;

  return (
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
  );
}

export default MyApp;
