"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LoadingAnimation = ({ loadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hideBackground, setHideBackground] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(max-width: 639px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (loadingComplete) {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setHideBackground(true), 800);
      }, 1500);
    }
  }, [loadingComplete]);

  // Position values with proper spacing
  const topSpacing = isMobile ? "40px" : "48px"; // Increased top spacing
  const rightSpacing = isMobile ? "40px" : "48px"; // Increased right spacing

  // Fixed position calculations with better spacing
  const containerAnimation = {
    scale: isLoading ? 1 : isMobile ? 0.3 : 0.4,
    top: isLoading ? "50%" : topSpacing,
    left: isLoading ? "50%" : `calc(100% - ${rightSpacing})`,
    x: isLoading ? "-50%" : "-50%",
    y: isLoading ? "-50%" : "-50%",
  };

  return (
    <>
      {!hideBackground && (
        <div
          className={`h-screen w-full flex justify-center items-center fixed top-0 left-0 z-50 transition-all duration-1000 ${
            isLoading
              ? "bg-black/90 backdrop-blur-sm"
              : "bg-black/50 backdrop-blur-sm"
          }`}
        >
          <motion.div
            className="fixed w-32 h-32 sm:w-48 sm:h-48 origin-center"
            initial={{
              scale: 1,
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            animate={containerAnimation}
            transition={{
              duration: 1.2,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ rotate: 0 }}
              animate={{
                rotate: isLoading ? 360 : 0,
              }}
              transition={{
                repeat: isLoading ? Infinity : 0,
                duration: 2.5,
                ease: "linear",
              }}
            >
              <Image
                src="/logo-outer.png"
                alt="Outer Part"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{ 
                delay: 0.3,
                duration: 0.8, 
                ease: [0.4, 0, 0.2, 1] 
              }}
            >
              <div className="relative w-1/2 h-1/2">
                <Image
                  src="/logo-center.png"
                  alt="Center Part"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
      {hideBackground && (
        <motion.div
          className="fixed z-50 top-12 right-12 sm:top-12 sm:right-12 w-12 h-12 sm:w-16 sm:h-16"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              rotate: 360,
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8, 
              ease: "linear" 
            }}
          >
            <Image
              src="/logo-outer.png"
              alt="Outer Part"
              fill
              className="object-contain"
            />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-1/2 h-1/2">
              <Image
                src="/logo-center.png"
                alt="Center Part"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default LoadingAnimation;
