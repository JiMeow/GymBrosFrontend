import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { DM_Sans } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DevViewport from "@/components/DevViewport";
const fonts = DM_Sans({
  subsets: ["latin"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <main className={fonts.className}>
      <NextUIProvider>
        <SessionProvider session={session}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            {process.env.NODE_ENV === "development" && <DevViewport />}
          </QueryClientProvider>
        </SessionProvider>
      </NextUIProvider>
    </main>
  );
};

export default MyApp;

export const queryClient = new QueryClient();
