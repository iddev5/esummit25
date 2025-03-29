import React, { useEffect } from 'react';
import styles from './parallax.module.css';

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
          <h1>
            E-Summit<span>2025</span>
          </h1>
          <p>E-Cell, VSSUT</p>
        </div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slowest"
          style={{ backgroundImage: `url('./assets/images/1.jpg')` }}
          data-image="captain-america"
        ></div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slower"
          style={{ backgroundImage: `url('./assets/images/2.jpg')` }}
          data-image="scarlet-witch"
        ></div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slow"
          style={{ backgroundImage: `url('./assets/images/3.jpg')` }}
          data-image="black-widow"
        ></div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slower"
          style={{ backgroundImage: `url('./assets/images/2.jpg')` }}
          data-image="vision"
        ></div>
        <div
          className={styles.layer}
          data-parallax="layer"
          data-parallax-speed="slowest"
          style={{ backgroundImage: `url('./assets/images/1.jpg')` }}
          data-image="iron-man"
        ></div>
      </header>
      <section className={styles.preamble} data-parallax="none">
        <div>
            <h1 className="text-3xl text-black md:text-6xl uppercase text-center mb-12">What is E-Summit?</h1>
            <p className="md:text-lg text-black w-[85vw] md:w-[60vw]">
            E-Summit 2025, the biggest entrepreneurial event of western Odisha
            hosted by E-Cell, VSSUT Burla, brings together industry leaders,
            visionaries, and budding entrepreneurs in a symphony of innovation and
            inspiration. It will act as a vibrant platform featuring panel
            discussions, workshops, and captivating keynote sessions.
            </p>
        </div>
      </section>
      <section className={`${styles.parallax} ${styles.group}`} data-parallax="group">
        <div className={styles.layer} data-parallax="layer" data-parallax-speed="base"></div>
        <div>
            <div className="flex flex-col items-center my-10">
            <div className="flex flex-col gap-5 w-[60vw] text-right">
                <div className="text-4xl relative uppercase bg-yellow-500 max-w-[80%] opacity-0 anim-rise p-3 py-8">
                    <p className="absolute right-2 bottom-3">2000+&nbsp;Attendees</p>
                </div>

                <div className="text-4xl relative uppercase bg-yellow-500 max-w-[50%] opacity-0 anim-rise p-3 py-8">
                    <p className="absolute right-2 bottom-3">30+&nbsp;Startups</p>
                </div>

                <div className="text-4xl relative uppercase bg-yellow-500 max-w-[30%] opacity-0 anim-rise p-3 py-8">
                    <p className="absolute right-2 bottom-3">10+&nbsp;Events</p>
                </div>
            </div>
            </div>
        </div>
        {/* <div
          className={`${styles.layer} ${styles.stars}`}
          data-parallax="layer"
          data-parallax-speed="slow"
          style={{ backgroundImage: `url('./assets/images/blue-star-sky.png')` }}
        ></div>
        <div
          className={`${styles.layer} ${styles['deep-stars']}`}
          data-parallax="layer"
          data-parallax-speed="slowest"
          style={{ backgroundImage: `url('./assets/images/blue-star-sky.png')` }}
        ></div> */}
      </section>
      <section className={`${styles.plot} ${styles.group}`} data-parallax="group">
        <div
          className={`${styles['plot--content']} ${styles.layer}`}
          data-parallax="layer"
          data-parallax-speed="base"
        >
          <h2>Synopsis</h2>
          <p>
            The Avengers and their allies must be willing to sacrifice all in an
            attempt to defeat the powerful Thanos before his blitz of devastation
            and ruin puts an end to the universe.
          </p>
        </div>
        <div
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
        ></div>
      </section>
      <footer className={styles.footer} data-parallax="none">
        <video
            id="video-parent"
            autoPlay
            muted
            loop
            className="w-[100%] h-[100%]"
            >
            <source src="./assets/teaser.mp4" type="video/mp4" />
            Video tag is not supported
        </video>
      </footer>
    </div>
  );
}

export default Parallax;