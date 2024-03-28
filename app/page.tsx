'use client';
import Image from "next/image";
import Header from "./appComponents/Header";
import Hero from "./appComponents/Hero";
import Usps from "./appComponents/Usps";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {

  const lenisRef = useRef<Lenis | undefined>(undefined);
  const rafHandleRef = useRef<number | null>(null);

  useEffect(() => {
    // Initialize Lenis on the first render
    if (!lenisRef.current) {
      lenisRef.current = new Lenis();

      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        rafHandleRef.current = requestAnimationFrame(raf);
      };

      rafHandleRef.current = requestAnimationFrame(raf);
    }

    // Clean up on component unmount
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = undefined;
      }
      if (rafHandleRef.current) {
        cancelAnimationFrame(rafHandleRef.current);
        rafHandleRef.current = null;
      }
    };
  }, []);
  return (
  <>
  <Header/>
  <main>
    <div className="bg-mainbackground">
      <Hero/>
      <Usps/>
    </div>
    <div>3 col layout</div>
    <div>Carousel with posters</div>
  </main>
  </>
);
}
