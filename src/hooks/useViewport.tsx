import { useEffect, useState } from "react";

export type Viewport = "al" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export function useViewport() {
  const [width, setWidth] = useState(0);
  const [viewport, setViewport] = useState<Viewport>("al");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (width < 640) {
      setViewport("al");
    } else if (width < 768) {
      setViewport("sm");
    } else if (width < 1024) {
      setViewport("md");
    } else if (width < 1280) {
      setViewport("lg");
    } else if (width < 1536) {
      setViewport("xl");
    } else if (width < 1920) {
      setViewport("2xl");
    } else {
      setViewport("3xl");
    }
  }, [width]);

  return { viewport };
}
