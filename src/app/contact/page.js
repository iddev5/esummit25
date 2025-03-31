"use client"

import { motion } from "framer-motion"
import ContactCard from "@/components/ContactCard"

export default function ContactPage() {
  // Animation variants for staggered section animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  }

  // Animation variants for headings
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  // Animation variants for cards container
  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  // Animation variants for individual cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <motion.div initial="hidden" animate="visible" className="container mx-auto px-6 mb-24">
        <motion.h1
          variants={headingVariants}
          className="text-4xl font-semibold text-[#fbc503] text-center mb-12 tracking-wider"
        >
          OUR TEAM
        </motion.h1>

        <motion.h1
          variants={headingVariants}
          className="text-3xl font-semibold text-[#fbc503] text-center mb-16 tracking-wider"
        >
          FOR WEBSITE & TECHNICAL RELATED QUERIES
        </motion.h1>

        <motion.div variants={cardsContainerVariants} className="flex flex-wrap justify-evenly gap-12">
          {[1, 2, 3].map((_, index) => (
            <motion.div key={`tech-${index}`} variants={cardVariants}>
              <ContactCard
                imageSrc="/assets/past-speakers/khalid.jpg"
                name="Anshu Agrawal"
                designation="Co-Ordinator"
                socialLinks={{
                  linkedin: "https://linkedin.com/in/anshu",
                  instagram: "https://instagram.com/anshu",
                  facebook: "https://facebook.com/anshu",
                  twitter: "https://twitter.com/anshu",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={1}
        variants={sectionVariants}
        className="container mx-auto px-6 mb-24"
      >
        <motion.h1
          variants={headingVariants}
          className="text-3xl font-semibold text-[#fbc503] text-center mb-16 tracking-wider"
        >
          FOR ANY SPEAKER RELATED QUERIES
        </motion.h1>

        <motion.div variants={cardsContainerVariants} className="flex flex-wrap justify-evenly gap-12">
          {[1, 2].map((_, index) => (
            <motion.div key={`speaker-${index}`} variants={cardVariants}>
              <ContactCard
                imageSrc="/assets/past-speakers/khalid.jpg"
                name="Anshu Agrawal"
                designation="Co-Ordinator"
                socialLinks={{
                  linkedin: "https://linkedin.com/in/anshu",
                  instagram: "https://instagram.com/anshu",
                  facebook: "https://facebook.com/anshu",
                  twitter: "https://twitter.com/anshu",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={2}
        variants={sectionVariants}
        className="container mx-auto px-6 mb-24"
      >
        <motion.h1
          variants={headingVariants}
          className="text-3xl font-semibold text-[#fbc503] text-center mb-16 tracking-wider"
        >
          FOR ANY EVENT RELATED QUERIES
        </motion.h1>

        <motion.div variants={cardsContainerVariants} className="flex flex-wrap justify-evenly gap-12">
          {[1, 2, 3].map((_, index) => (
            <motion.div key={`event-${index}`} variants={cardVariants}>
              <ContactCard
                imageSrc="/assets/past-speakers/khalid.jpg"
                name="Anshu Agrawal"
                designation="Co-Ordinator"
                socialLinks={{
                  linkedin: "https://linkedin.com/in/anshu",
                  instagram: "https://instagram.com/anshu",
                  facebook: "https://facebook.com/anshu",
                  twitter: "https://twitter.com/anshu",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={3}
        variants={sectionVariants}
        className="container mx-auto px-6 mb-24"
      >
        <motion.h1
          variants={headingVariants}
          className="text-3xl font-semibold text-[#fbc503] text-center mb-16 tracking-wider"
        >
          FOR ANY MEDIA RELATED QUERIES
        </motion.h1>

        <motion.div variants={cardsContainerVariants} className="flex flex-wrap justify-evenly gap-12">
          {[1, 2].map((_, index) => (
            <motion.div key={`media-${index}`} variants={cardVariants}>
              <ContactCard
                imageSrc="/assets/past-speakers/khalid.jpg"
                name="Anshu Agrawal"
                designation="Co-Ordinator"
                socialLinks={{
                  linkedin: "https://linkedin.com/in/anshu",
                  instagram: "https://instagram.com/anshu",
                  facebook: "https://facebook.com/anshu",
                  twitter: "https://twitter.com/anshu",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={4}
        variants={sectionVariants}
        className="container mx-auto px-6 mb-24"
      >
        <motion.h1
          variants={headingVariants}
          className="text-3xl font-semibold text-[#fbc503] text-center mb-16 tracking-wider"
        >
          FOR ANY SPONSERSHIP RELATED QUERIES
        </motion.h1>

        <motion.div variants={cardsContainerVariants} className="flex flex-wrap justify-evenly gap-12">
          {[1, 2, 3].map((_, index) => (
            <motion.div key={`sponsor-${index}`} variants={cardVariants}>
              <ContactCard
                imageSrc="/assets/past-speakers/khalid.jpg"
                name="Anshu Agrawal"
                designation="Co-Ordinator"
                socialLinks={{
                  linkedin: "https://linkedin.com/in/anshu",
                  instagram: "https://instagram.com/anshu",
                  facebook: "https://facebook.com/anshu",
                  twitter: "https://twitter.com/anshu",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={5}
        variants={sectionVariants}
        className="container mx-auto px-6 mb-24"
      >
        <motion.h1
          variants={headingVariants}
          className="text-3xl font-semibold text-[#fbc503] text-center mb-16 tracking-wider"
        >
          FOR ANY DESIGN RELATED QUERIES
        </motion.h1>

        <motion.div variants={cardsContainerVariants} className="flex flex-wrap justify-evenly gap-12">
          {[1, 2].map((_, index) => (
            <motion.div key={`design-${index}`} variants={cardVariants}>
              <ContactCard
                imageSrc="/assets/past-speakers/khalid.jpg"
                name="Anshu Agrawal"
                designation="Co-Ordinator"
                socialLinks={{
                  linkedin: "https://linkedin.com/in/anshu",
                  instagram: "https://instagram.com/anshu",
                  facebook: "https://facebook.com/anshu",
                  twitter: "https://twitter.com/anshu",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={6}
        variants={sectionVariants}
        className="container mx-auto px-6"
      >
        <motion.h1
          variants={headingVariants}
          className="text-3xl font-semibold text-[#fbc503] text-center mb-16 tracking-wider"
        >
          ORGANISERS
        </motion.h1>

        <motion.div variants={cardsContainerVariants} className="flex flex-wrap justify-evenly gap-12">
          {[1, 2, 3].map((_, index) => (
            <motion.div key={`organiser-${index}`} variants={cardVariants}>
              <ContactCard
                imageSrc="/assets/past-speakers/khalid.jpg"
                name="Anshu Agrawal"
                designation="Co-Ordinator"
                socialLinks={{
                  linkedin: "https://linkedin.com/in/anshu",
                  instagram: "https://instagram.com/anshu",
                  facebook: "https://facebook.com/anshu",
                  twitter: "https://twitter.com/anshu",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}


