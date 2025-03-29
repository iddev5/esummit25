"use client";

import { useEffect, useState } from "react";
import useLocoScroll from "@/hooks/useLocoScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  useLocoScroll(!isLoading);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Header />
      <main id="main-container" data-scroll-container>
        {children}
      </main>
      <Footer />
    </>
  );
}
