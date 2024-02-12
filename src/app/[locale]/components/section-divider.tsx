"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div className="my-12 hidden sm:block dark:bg-opacity-20"></motion.div>
  );
}
