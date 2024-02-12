import React from "react";
import { useTranslations } from "next-intl";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";
import SectionDivider from "./components/section-divider";
import Link from "next/link";
import Image from "next/image";
import img from "../../../public/photo.jpg";
import moon from "../../../public/moon.svg";
import comp from "../../../public/comp.svg";
import "./components/font.css";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className="flex flex-col items-center px-4">
      {/* INTRO */}
      <section id="home" className="mb-12 max-w-[70rem] cursor-default">
        <div className="flex items-center justify-center">
          <div>
            <p className="font text-4xl sm:text-6xl text-[red] dark:text-[#12F7D6]">
              _akrv.s_
            </p>
            <p className="text-center font2 -mt-2 text-[red] dark:text-[#12F7D6]">
              {t("frontend")}
            </p>
          </div>
        </div>
        <h1 className="flex flex-col mb-10 mt-12 sm:flex-row items-center font-medium !leading-[1.5] sm:text-4xl">
          <Image
            src={img}
            className="w-[600px] h-[400px] rounded-2xl object-cover border-[0.1rem] border-white shadow-xl"
            alt="rasm"
          />
          <div className="text-left pl-12 mt-3">
            <p className="f text-base text-[#f25656] dark:text-[#93feee] -ml-3">
              ‹h1›
            </p>
            <p className="text-5xl">{t("hi")}</p>
            <p className="text-5xl">
              {t("i_am")}
              <span className="text-[red] dark:text-[#12F7D6]">
                {" "}
                {t("Sevara")}
              </span>
              ,
            </p>
            <p className="text-5xl">{t("frontend")}</p>
            <p className="f text-base text-[#f25656] dark:text-[#93feee] -ml-3">
              ‹/h1›
            </p>
            <br />
            <p className="f text-base text-[#f25656] dark:text-[#93feee] -ml-3">
              ‹p›
            </p>
            <p className="text-lg">{t("some")}</p>
            <p className="f text-base text-[#f25656] dark:text-[#93feee] -ml-3">
              ‹/p›
            </p>
          </div>
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
          <Link
            className="bg-gray-700 text-white px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 transition hover:scale-110 hover:bg-gray-950 dark:bg-white/40 dark:text-[#292F36] dark:font-bold dark:hover:bg-white"
            href="/resume.pdf"
            target="_blank"
          >
            {t("resume")}
          </Link>
          <Link
            className="p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] transition hover:text-gray-950 dark:text-white/40 dark:hover:text-white"
            href="https://www.linkedin.com/in/sevara-akromjonova-ab18922aa/"
            target="_blank"
          >
            <FiLinkedin />
          </Link>

          <Link
            className="p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] transition hover:text-gray-950 dark:text-white/40 dark:hover:text-white"
            href="https://github.com/abrarjanovna"
            target="_blank"
          >
            <FiGithub />
          </Link>
        </div>
      </section>
      <SectionDivider />
      {/* ABOUT */}
      <section
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 cursor-default"
        id="about"
      >
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">
          {t("about_me")}
        </h2>
        <p className="mb-3">
          {t("first")}{" "}
          <span className="text-[red] dark:text-[#12F7D6]">Najot Ta’lim</span>{" "}
          {t("second")} <span className="italic">{t("third")}</span>
        </p>
        <span className="text-[red] dark:text-[#12F7F6]">p.s.</span> {t("last")}
      </section>
      {/* Projects */}
      <section id="projects" className="scroll-mt-28 mb-28">
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">
          {t("my_projects")}
        </h2>
        <div className="group mb-3 sm:mb-8 last:mb-0">
          <section className="bg-gray-200 max-w-[42rem] cursor-default border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-300 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <Link
              href="https://uzb-namoz-vaqtlari.netlify.app/"
              target="_blank"
            >
              <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                <h3 className="text-2xl font-semibold">{t("namoz_vaqti")}</h3>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                  {t("definition")}
                </p>
                <p className="mt-3 text-gray-700 dark:text-white/70">
                  <span className="text-[red] dark:text-[#12F7D6] font-semibold">
                    p.s.
                  </span>
                  {""} {t("cv")}
                </p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto translate-all">
                  <li className="bg-black/[0.4] hover:bg-black/[0.9] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                    HTML
                  </li>
                  <li className="bg-black/[0.4] hover:bg-black/[0.9] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                    CSS
                  </li>
                  <li className="bg-black/[0.4] hover:bg-black/[0.9] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                    JavaScript
                  </li>
                </ul>
              </div>
              <Image
                src={moon}
                alt="Project"
                quality={95}
                className="absolute sm:block top-8 w-[18rem] hidden 
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2"
              />
            </Link>
          </section>
        </div>
        <div className="group mb-3 sm:mb-8 last:mb-0">
          <section className="bg-gray-200 max-w-[42rem] cursor-default border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-300 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <Link
              href="https://bootcamp-admin-panel.netlify.app/"
              target="_blank"
            >
              <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                <h3 className="text-2xl font-semibold">Bootcamp</h3>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                  {t("second_definition")}
                </p>
                <p className="mt-3 text-gray-700 dark:text-white/70">
                  <span className="text-[red] dark:text-[#12F7D6] font-semibold">
                    p.s.
                  </span>
                  {""} {t("cv")}
                </p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto translate-all">
                  <li className="bg-black/[0.4] hover:bg-black/[0.9] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                    React
                  </li>
                  <li className="bg-black/[0.4] hover:bg-black/[0.9] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                    Redux
                  </li>
                  <li className="bg-black/[0.4] hover:bg-black/[0.9] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                    Tailwind
                  </li>
                </ul>
              </div>
              <Image
                src={comp}
                alt="Project"
                quality={95}
                className="absolute sm:block top-8 w-[18rem] hidden 
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            ml-80"
              />
            </Link>
          </section>
        </div>
      </section>
      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-28 mb-28 max-w-[53rem] text-center sm:mb-40 cursor-default"
      >
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">
          {t("my_skills")}
        </h2>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          <Link href="https://www.w3schools.com/html/" target="_blank">
            <li className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80">
              HTML
            </li>
          </Link>
          <Link href="https://www.w3schools.com/css/" target="_blank">
            <li className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80">
              CSS
            </li>
          </Link>
          <Link href="https://www.w3schools.com/sass/" target="_blank">
            <li className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80">
              SASS
            </li>
          </Link>
          <Link href="https://www.w3schools.com/bootstrap/" target="_blank">
            <li className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80">
              Bootstrap
            </li>
          </Link>
          <Link href="https://tailwindcss.com/" target="_blank">
            <li className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80">
              Tailwind
            </li>
          </Link>
          <Link href="https://mui.com/" target="_blank">
            <li className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80">
              MUI
            </li>
          </Link>
          <Link href="https://www.w3schools.com/js/" target="_blank">
            <li className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80">
              JavaScript
            </li>
          </Link>
          <Link href="https://react.dev/" target="_blank">
            <li className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80">
              ReactJS
            </li>
          </Link>
          <Link href="https://react-redux.js.org/" target="_blank">
            <li className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80">
              Redux
            </li>
          </Link>
          <Link href="https://www.typescriptlang.org/" target="_blank">
            <li className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80">
              TypeScript
            </li>
          </Link>
          <Link href="https://nextjs.org/" target="_blank">
            <li className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80">
              Next.js
            </li>
          </Link>
          <Link href="https://nodejs.org/en" target="_blank">
            <li className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80">
              Node.js
            </li>
          </Link>
          <Link href="https://github.com/" target="_blank">
            <li className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80">
              GitHub
            </li>
          </Link>
        </ul>
      </section>
      {/* Contact */}
      <section
        id="contact"
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      >
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">
          {t("contact_me")}
        </h2>
        <form className="mt-10 flex flex-col dark:text-black">
          <input
            className="h-14 px-4 rounded-lg outline-none border bg-gray-100 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder={t("gmail")}
          />
          <textarea
            className="h-52 my-3 rounded-lg p-4 border outline-none bg-gray-100 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder={t("message")}
            required
            maxLength={5000}
          />
          <button className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65">
            <>
              {t("submit")}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          </button>
        </form>
      </section>
    </main>
  );
}
