import React, { useEffect, useRef } from "react";
import styles from "./parallax.module.css";
import Gallery from "./Gallery";
import Image from "next/image";

function Parallax() {
  const canvasRef1 = useRef(null);
  const canvasRef2 = useRef(null);
  const canvasRef3 = useRef(null);

  const imagesRef = useRef([
    "/assets/canvas/wolf1-removebg-preview.png",
    "/assets/canvas/wolf2-removebg-preview.png",
    "/assets/canvas/wolf3-removebg-preview.png",
    "/assets/canvas/wolf4-removebg-preview.png",
    "/assets/canvas/wolf5-removebg-preview.png",
    "/assets/canvas/wolf6-removebg-preview.png",
    "/assets/canvas/wolf7-removebg-preview.png",
    "/assets/canvas/wolf8-removebg-preview.png",
    "/assets/canvas/wolf9-removebg-preview.png",
    "/assets/canvas/wolf10-removebg-preview.png",
  ]);

  const currentImageRef1 = useRef(0);
  const currentImageRef2 = useRef(9);
  const currentImageRef3 = useRef(Math.floor(Math.random() * 10));

  useEffect(() => {
    const startAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.target.classList.contains("anim-rise")) {
          entry.target.classList.toggle("animate-rise", entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(startAnimation, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Reduced threshold for better triggering
    });

    const elements = document.querySelectorAll(".anim-rise");
    elements.forEach((element) => observer.observe(element));

    // Canvas image switching logic
    const canvas1 = canvasRef1.current;
    const canvas2 = canvasRef2.current;
    const canvas3 = canvasRef3.current;

// sourcery skip: use-braces
    if (!canvas1 || !canvas2 || !canvas3) return;

    const ctx1 = canvas1.getContext("2d");
    const ctx2 = canvas2.getContext("2d");
    const ctx3 = canvas3.getContext("2d");

    const drawImage = (ctx, imgSrc, scale = 1) => {
      const img = new window.Image();
      img.src = imgSrc;
      img.onload = () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        // Increased scale factor for better visibility
        const imgScale =
          Math.min(
            ctx.canvas.width / img.width,
            ctx.canvas.height / img.height
          ) * scale * 1.4; // Increased scale factor by 40%
        const x = (ctx.canvas.width - img.width * imgScale) / 2;
        const y = (ctx.canvas.height - img.height * imgScale) / 2;
        ctx.drawImage(img, x, y, img.width * imgScale, img.height * imgScale);
      };
    };

    const switchImages = () => {
      // Forward sequence
      drawImage(ctx1, imagesRef.current[currentImageRef1.current], 1.2);
      currentImageRef1.current =
        (currentImageRef1.current + 1) % imagesRef.current.length;

      // Reverse sequence
      drawImage(ctx2, imagesRef.current[currentImageRef2.current], 1.2);
      currentImageRef2.current =
        (currentImageRef2.current - 1 + imagesRef.current.length) %
        imagesRef.current.length;

      // Random sequence
      drawImage(ctx3, imagesRef.current[currentImageRef3.current], 1.2);
      currentImageRef3.current = Math.floor(
        Math.random() * imagesRef.current.length
      );
    };

    const interval = setInterval(switchImages, 500);
    switchImages(); // Initial render

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.container} data-parallax="container">
      <header className={`${styles.group} h-screen`} data-parallax="group">
        <div
          className={`${styles.layer} ${styles.title}`}
          data-parallax="layer"
          data-parallax-speed="front"
        >
          <div className="absolute left-0 -top-5 blur-xl w-full h-[40px] bg-black text-black">
            .
          </div>
          <div className="flex justify-center items-center pt-4">
            <Image
              src="/assets/esummit.png"
              width={700}
              height={322}
              alt="E-Summit Logo"
              className="w-auto h-auto max-w-[90vw] object-contain"
              priority
            />
          </div>
          {/* Increased width of the background container and improved canvas visibility */}
          <div className="relative w-full h-auto bg-black flex flex-wrap justify-center items-center gap-8 py-12 px-4">
            <div className="canvas-container relative w-[90vw] md:w-[30vw] max-w-[600px] border-2 border-yellow-500/30 rounded-lg overflow-hidden p-4 bg-black/80">
              <canvas
                ref={canvasRef1}
                width={600}
                height={600}
                className="h-auto w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-yellow-500 text-sm">Forward Sequence</div>
            </div>
            <div className="canvas-container relative w-[90vw] md:w-[30vw] max-w-[600px] border-2 border-yellow-500/30 rounded-lg overflow-hidden p-4 bg-black/80">
              <canvas
                ref={canvasRef2}
                width={600}
                height={600}
                className="h-auto w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-yellow-500 text-sm">Reverse Sequence</div>
            </div>
            <div className="canvas-container relative w-[90vw] md:w-[30vw] max-w-[600px] border-2 border-yellow-500/30 rounded-lg overflow-hidden p-4 bg-black/80">
              <canvas
                ref={canvasRef3}
                width={600}
                height={600}
                className="h-auto w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-yellow-500 text-sm">Random Sequence</div>
            </div>
          </div>
        </div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slowest"
          style={{
            backgroundImage: `url('./assets/images/1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: "brightness(50%)",
          }}
          data-image="captain-america"
        ></div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slower"
          style={{
            backgroundImage: `url('./assets/images/3.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: "brightness(50%)",
          }}
          data-image="scarlet-witch"
        ></div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slow"
          style={{
            backgroundImage: `url('./assets/images/5.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: "brightness(50%)",
          }}
          data-image="black-widow"
        ></div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slower"
          style={{
            backgroundImage: `url('./assets/images/4.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: "brightness(50%)",
          }}
          data-image="vision"
        ></div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slowest"
          style={{
            backgroundImage: `url('./assets/images/2.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: "brightness(50%)",
          }}
          data-image="iron-man"
        ></div>
      </header>
      <section className={styles.preamble} data-parallax="none">
        <div className="flex relative flex-col w-screen justify-center items-center pt-8 pb-4">
          <div className="flex relative flex-col md:flex-row justify-center items-center mb-8 gap-4 px-4">
            <h1 className="text-3xl text-white md:text-5xl lg:text-7xl uppercase text-center">
              What is
            </h1>
            <Image
              src="/assets/esummit_name.png"
              width={300}
              height={52}
              alt="E-Summit Text Logo"
              className="h-auto w-auto max-w-[80vw] md:max-w-[300px] object-contain"
              style={{ filter: "drop-shadow(0px 0px 15px #ffd35b)" }}
            />
            <h1 className="text-3xl text-white md:text-5xl lg:text-7xl uppercase text-center">
              ?
            </h1>
          </div>
          <p className="text-lg md:text-2xl text-white w-[85vw] md:w-[70vw] lg:w-[60vw] text-center mb-8">
            This year, E-Summit 2025, the leading entrepreneurial event in
            western Odisha from E-Cell, VSSUT Burla, is channeling its inner
            "Wolf of Wall Street." We're assembling industry heavyweights,
            forward-thinking visionaries, and ambitious budding entrepreneurs
            for a dynamic gathering. Prepare for engaging panel discussions,
            skill-building workshops, and keynote sessions packed with the kind
            of insights that can build empires.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/assets/images/leo.png"
            width={563}
            height={364}
            alt="Leonardo DiCaprio from Wolf of Wall Street"
            className="relative w-auto h-auto max-w-[90vw] md:max-w-[563px]"
          />
        </div>
      </section>
      <section
        className={`${styles.parallax} ${styles.group}`}
        data-parallax="group"
      >
        <div
          className={`${styles.layer} w-full flex flex-col items-center justify-center py-16`}
          data-parallax="layer"
          data-parallax-speed="base"
        >
          <div className="w-full">
            <div className="flex flex-col items-center">
              <div className="flex flex-col gap-5 w-[90vw] md:w-[70vw] lg:w-[60vw] items-end">
                <div className="text-2xl md:text-4xl relative uppercase bg-yellow-500 w-[80%] opacity-0 anim-rise p-3 py-6 md:py-10 shadow-lg transform transition-all duration-300 hover:scale-105">
                  <p className="absolute right-6 bottom-5 font-bold">
                    2000+&nbsp;Attendees
                  </p>
                </div>

                <div className="text-2xl md:text-4xl relative uppercase bg-yellow-500 w-[60%] opacity-0 anim-rise p-3 py-6 md:py-10 shadow-lg transform transition-all duration-300 hover:scale-105">
                  <p className="absolute right-6 bottom-5 font-bold">30+&nbsp;Startups</p>
                </div>

                <div className="text-2xl md:text-4xl relative uppercase bg-yellow-500 w-[40%] opacity-0 anim-rise p-3 py-6 md:py-10 shadow-lg transform transition-all duration-300 hover:scale-105">
                  <p className="absolute right-6 bottom-5 font-bold">10+&nbsp;Events</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.layer} ${styles["deep-stars"]}`}
          data-parallax="layer"
          data-parallax-speed="slowest"
          style={{
            backgroundImage: `url('./assets/images/money.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: "scale(1.0)",
          }}
        ></div>
      </section>
      <section
        className={`${styles.plot} ${styles.group}`}
        data-parallax="group"
      >
        <div
          className={`${styles["plot--content"]} ${styles.layer} z-10`}
          data-parallax="layer"
          data-parallax-speed="base"
        >
          <Gallery />
        </div>
      </section>
      <footer className={styles.footer} data-parallax="none">
        <div className="w-full h-full relative">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            playsInline
          >
            <source src="./assets/teaser.mp4" type="video/mp4" />
            <p>Your browser does not support the video tag.</p>
          </video>
        </div>
      </footer>
    </div>
  );
}

export default Parallax;
