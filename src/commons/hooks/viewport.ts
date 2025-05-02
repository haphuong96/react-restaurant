import { useEffect, useState } from "react";

export const BREAKPOINTS = {
  mobile: 0,
  miniTablet: 640,
  tablet: 768,
  desktop: 1024,
};
export type ViewportMode = "MOBILE" | "MINI_TABLET" | "TABLET" | "DESKTOP";

export const useViewport = () => {
  const [viewportMode, setViewportMode] = useState<ViewportMode>();

  useEffect(() => {
    if (window.innerWidth < BREAKPOINTS.miniTablet) {
      setViewportMode("MOBILE");
    } else if (window.innerWidth < BREAKPOINTS.tablet) {
      setViewportMode("MINI_TABLET");
    } else if (window.innerWidth < BREAKPOINTS.desktop) {
      setViewportMode("TABLET");
    } else {
      setViewportMode("DESKTOP");
    }
  }, []);

  return viewportMode;
};
