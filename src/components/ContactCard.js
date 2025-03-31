"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react"

export default function ContactCard({
  imageSrc = "/placeholder.svg?height=400&width=400",
  designation = "Product Designer",
  name = "Jane Doe",
  socialLinks = {
    linkedin: "#",
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
}) {
  // Animation variants
  const containerVariants = {
    initial: {
      boxShadow: "0px 0px 0px rgba(251, 197, 3, 0)",
    },
    hover: {
      boxShadow: "0px 0px 20px rgba(251, 197, 3, 0.5)",
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  const imageContainerVariants = {
    initial: { borderRadius: "0px" },
    hover: {
      borderRadius: "50%",
      transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  }

  const imageVariants = {
    initial: { scale: 1, filter: "blur(0px)" },
    hover: {
      scale: 1.1,
      filter: "blur(2px)",
      transition: { duration: 0.5 },
    },
  }

  const socialVariants = {
    initial: { scale: 0, opacity: 0 },
    hover: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1 + custom * 0.07,
      },
    }),
  }

  return (
    <motion.div
      className="relative w-[250px] h-[250px] bg-[#151515] border-2 border-[#fbc503] rounded-xl overflow-hidden cursor-pointer"
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <motion.div className="relative w-full h-[200px] overflow-hidden" variants={imageContainerVariants}>
        <motion.div className="w-full h-full" variants={imageVariants}>
          <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" sizes="250px" />
        </motion.div>
      </motion.div>

      {/* Name and Designation - Always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#151515] p-2 text-center">
        <p className="text-[#fbfcd4] font-medium">{name}</p>
        <p className="text-[#fbfcd4] text-sm">{designation}</p>
      </div>

      {/* Hover Overlay with Name and Social Media Links */}
      <motion.div
        className="absolute inset-0 bg-[#151515]/80 flex flex-col items-center justify-center gap-4"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-[#fbfcd4] text-xl font-bold mb-2">{name}</h3>
        <div className="flex items-center justify-center gap-4">
          {[
            { icon: Linkedin, link: socialLinks.linkedin, label: "LinkedIn" },
            { icon: Instagram, link: socialLinks.instagram, label: "Instagram" },
            { icon: Facebook, link: socialLinks.facebook, label: "Facebook" },
            { icon: Twitter, link: socialLinks.twitter, label: "Twitter" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#0a0a0a] rounded-full hover:bg-[#fbc503] transition-colors"
              variants={socialVariants}
              custom={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Visit ${name}'s ${social.label}`}
            >
              <social.icon className="w-6 h-6 text-[#fbfcd4] group-hover:text-[#151515]" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}






