import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { FC, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="overflow-hidden">
      <Navigation />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
