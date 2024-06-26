import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Open_Sans } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@/styles/globals.css";
import DevViewport from "@/components/utils/DevViewport";
import ThemeController from "@/components/utils/ThemeController";
import { useEffect, useState } from "react";

const fonts = Open_Sans({
  subsets: ["cyrillic"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  const [theme, setTheme] = useState("light"); // ["dark", "light"]
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className={fonts.className}>
      <NextUIProvider>
        {isClient && (
          <>
            <html data-theme={theme} className="relative">
              {/* TODO: Make this layout better wih store*/}
              <ThemeController theme={theme} setTheme={setTheme} />
              <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
              </QueryClientProvider>
              {process.env.NODE_ENV === "development" && <DevViewport />}
            </html>
          </>
        )}
        {!isClient && (
          <>
            <Component {...pageProps} />
            {process.env.NODE_ENV === "development" && <DevViewport />}
          </>
        )}
      </NextUIProvider>
    </main>
  );
};

export default MyApp;

export const queryClient = new QueryClient();
