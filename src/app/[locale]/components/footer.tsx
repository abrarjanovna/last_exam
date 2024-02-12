"use client";

import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { PiTelegramLogo } from "react-icons/pi";
import { GrInstagram } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  const { ref } = useSectionInView("Home");

  return (
    <footer
      ref={ref}
      id="home"
      className="mb-10 px-4 text-center text-gray-500"
    >
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          className="p-2 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] transition hover:text-gray-950 dark:text-white/40 dark:hover:text-white"
          href="https://t.me/akrv_s"
          target="_blank"
        >
          <PiTelegramLogo />
        </Link>
        <Link
          className="p-2 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] transition hover:text-gray-950 dark:text-white/40 dark:hover:text-white"
          href="https://instagram.com/_akrv.s_"
          target="_blank"
        >
          <GrInstagram />
        </Link>
        <Link
          className="p-2 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] transition hover:text-gray-950 dark:text-white/40 dark:hover:text-white"
          href="https://github.com/abrarjanovna"
          target="_blank"
        >
          <FiGithub />
        </Link>
      </motion.div>
    </footer>
  );
}
