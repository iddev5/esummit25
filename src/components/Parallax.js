import React, { useEffect } from 'react';
import styles from './parallax.module.css';
import Gallery from './Gallery';
import Image from 'next/image';

function Parallax() {
    useEffect(() => {
        {
            const startAnimation = (entries, observer) => {
              entries.forEach(entry => {
                entry.target.classList.toggle("animate-rise", entry.isIntersecting);
              });
            };
        
            const observer = new IntersectionObserver(startAnimation);
            const options = { root: null, rootMargin: '0px', threshold: 1.0 }; 
        
            const elements = document.querySelectorAll('.anim-rise');
            elements.forEach(element => 
              observer.observe(element, options)
            );
        }
    }, []);

  return (
    <div className={styles.container} data-parallax="container">
      <header className={styles.group} data-parallax="group">
        <div
          className={`${styles.layer} ${styles.title}`}
          data-parallax="layer"
          data-parallax-speed="front"
        >
          <div className='absolute left-0 -top-5 blur-xl w-full h-[40px] bg-black text-black'>.</div>
          <Image src='/assets/esummit.png' width={9795} height={4500} />
        </div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slowest"
          style={{ backgroundImage: `url('./assets/images/1.jpg')`, filter: 'brightness(50%)' }}
          data-image="captain-america"
        ></div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slower"
          style={{ backgroundImage: `url('./assets/images/3.jpg')`, filter: 'brightness(50%)' }}
          data-image="scarlet-witch"
        ></div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slow"
          style={{ backgroundImage: `url('./assets/images/5.jpg')`, filter: 'brightness(50%)' }}
          data-image="black-widow"
        ></div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slower"
          style={{ backgroundImage: `url('./assets/images/4.jpg')`, filter: 'brightness(50%)' }}
          data-image="vision"
        ></div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slowest"
          style={{ backgroundImage: `url('./assets/images/2.jpg')`, filter: 'brightness(50%)' }}
          data-image="iron-man"
        ></div>
      </header>
      <section className={styles.preamble} data-parallax="none">
        <div className='flex relative -top-15 flex-col w-screen justify-center items-center'>
          <div className='flex relative justify-center items-center mb-12 gap-8'>
            <h1 className="text-3xl text-white md:text-7xl uppercase text-center flex-grow">What is</h1>
            <Image src='/assets/esummit_name.png' width={3819} height={665} className='h-[90px] w-auto object-contain'
              style={{ filter: 'drop-shadow(0px 0px 15px #ffd35b)' }} />
            <h1 className="text-3xl text-white md:text-7xl uppercase text-center flex-grow">?</h1>
          </div>
          <p className="md:text-2xl text-white w-[85vw] md:w-[60vw] text-center">
            This year, E-Summit 2025, the leading entrepreneurial event in western Odisha from E-Cell, VSSUT Burla, is channeling its inner "Wolf of Wall Street." We're assembling industry heavyweights, forward-thinking visionaries, and ambitious budding entrepreneurs for a dynamic gathering. Prepare for engaging panel discussions, skill-building workshops, and keynote sessions packed with the kind of insights that can build empires.
          </p>
        </div>
        <Image src='/assets/images/leo.png' width={563} height={364} className='relative bottom-0' />
      </section>
      <section className={`${styles.parallax} ${styles.group}`} data-parallax="group">
        <div className={`${styles.layer} w-full flex flex-col items-center justify-center`} data-parallax="layer" data-parallax-speed="base">
          <div className=''>
              <div className="flex flex-col items-center my-10">
              <div className="flex flex-col gap-5 w-[60vw] text-right">
                  <div className="text-4xl relative uppercase bg-yellow-500 max-w-[80%] opacity-0 anim-rise p-3 py-10">
                      <p className="absolute right-6 bottom-5">2000+&nbsp;Attendees</p>
                  </div>

                  <div className="text-4xl relative uppercase bg-yellow-500 max-w-[50%] opacity-0 anim-rise p-3 py-10">
                      <p className="absolute right-6 bottom-5">30+&nbsp;Startups</p>
                  </div>

                  <div className="text-4xl relative uppercase bg-yellow-500 max-w-[30%] opacity-0 anim-rise p-3 py-10">
                      <p className="absolute right-6 bottom-5">10+&nbsp;Events</p>
                  </div>
              </div>
              </div>
          </div>


        </div>
        
        {/* <div
          className={`${styles.layer} ${styles.stars}`}
          data-parallax="layer"
          data-parallax-speed="slow"
          style={{ backgroundImage: `url('./assets/images/money.jpg')` }}
        ></div> */}
        
        <div
          className={`${styles.layer} ${styles['deep-stars']}`}
          data-parallax="layer"
          data-parallax-speed="slowest"
          style={{ backgroundImage: `url('./assets/images/money.jpg')`, transform: 'scale(1.0)' }}
        ></div>
      </section>
      <section className={`${styles.plot} ${styles.group}`} data-parallax="group">
        <div
          className={`${styles['plot--content']} ${styles.layer} z-[-1]`}
          data-parallax="layer"
          data-parallax-speed="base"
        >
          <Gallery />
        </div>
        {/* <div
          className={`${styles.layer} ${styles.character}`}
          data-parallax="layer"
          data-parallax-speed="slowest"
          style={{ backgroundImage: `url('./assets/images/nebula.png')` }}
          data-image="nebula"
        ></div>
        <div
          className={`${styles.layer} ${styles.character}`}
          data-parallax="layer"
          data-parallax-speed="slower"
          style={{ backgroundImage: `url('./assets/images/winter-soldier.png')` }}
          data-image="winter-soldier"
        ></div>
        <div
          className={`${styles.layer} ${styles.character}`}
          data-parallax="layer"
          data-parallax-speed="slower"
          style={{ backgroundImage: `url('./assets/images/okoye.png')` }}
          data-image="okoye"
        ></div>
        <div
          className={`${styles.layer} ${styles.character}`}
          data-parallax="layer"
          data-parallax-speed="slower"
          style={{ backgroundImage: `url('./assets/images/captain-america-2.png')` }}
          data-image="captain-america-2"
        ></div>
        <div
          className={`${styles.layer} ${styles.character}`}
          data-parallax="layer"
          data-parallax-speed="slow"
          style={{ backgroundImage: `url('./assets/images/mantis.png')` }}
          data-image="mantis"
        ></div>
        <div
          className={`${styles.layer} ${styles.character}`}
          data-parallax="layer"
          data-parallax-speed="slow"
          style={{ backgroundImage: `url('./assets/images/scarlet-witch-2.png')` }}
          data-image="scarlet-witch-2"
        ></div> */}
      </section>
      <footer className={styles.footer} data-parallax="none">
        <video
            id="video-parent"
            autoPlay
            muted
            loop
            className="w-[100%] h-[100%] z-[100]"
            // style={{ filter: 'brightness(70%)' }}
            >
            <source src="./assets/teaser.mp4" type="video/mp4" />
            Video tag is not supported
        </video>
      </footer>
    </div>
  );
}

export default Parallax;