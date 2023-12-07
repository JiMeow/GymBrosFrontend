import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { DM_Sans } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@/styles/globals.css";
import DevViewport from "@/components/DevViewport";
const fonts = DM_Sans({
  subsets: ["latin"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <main className={fonts.className}>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          {process.env.NODE_ENV === "development" && <DevViewport />}
        </QueryClientProvider>
      </NextUIProvider>
    </main>
  );
};

export default MyApp;

export const queryClient = new QueryClient();
