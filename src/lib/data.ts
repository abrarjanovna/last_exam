import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const educationsData = [
  {
    title: "Russian language",
    location: "",
    description: "I studied the Russian language course for 1 year.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Frontend ReactJS",
    location: "Najot Ta'lim",
    description:
      "I studied at the 8-month Frontend ReactJS course of the «Najot Ta'lim» educational center.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "English language",
    location: "",
    description:
      "And now I want to learn more by taking an English course. Because for Frontend I need to learn it thoroughly)",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;
