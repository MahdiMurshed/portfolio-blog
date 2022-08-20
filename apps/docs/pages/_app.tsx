import { withTRPC } from "@trpc/next";
import type { AppProps } from "next/app";
import { AppRouter } from "./api/trpc/[trpc]";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx: _ctx }) {
    console.log("withTrpc", _ctx);
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    return {
      url: `http://localhost:3001/api/trpc`,
      queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
      /**
       * @link https://react-query-v3.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  //   ssr: true,
})(MyApp);
