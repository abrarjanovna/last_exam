import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "./components/footer";
import ThemeSwitch from "./components/theme-switch";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import EN from "../../../public/en.png";
import RU from "../../../public/ru.png";
import UZ from "../../../public/uz.png";
import "../globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const t = useTranslations("Index");
  return (
    <html lang={locale}>
      <link rel="icon" href="https://pipedream.com/s.v0/app_XaLh2x/logo/orig" />
      <body className="fonts relative pt-28 sm:pt-36 dark:bg-[#292f36] dark:text-white dark:text-opacity-90">
        <NextIntlClientProvider locale={locale}>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <header className="z-[999] relative">
                <div className="fixed left-[15rem] w-full border border-white bg-white shadow-lg shadow-black/[0.1] bg-opacity-80 dark:bg-opacity-80 backdrop-blur-[0.2rem] sm:top-6 sm:h-[3.25rem] sm:w-[70rem] sm:rounded-full dark:bg-[#292F36] dark:border-[#292F36] dark:shadow-black/[0.2]"></div>
                <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                  <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    <li className="h-3/4 flex items-center justify-center relative">
                      <Link
                        className={clsx(
                          "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300"
                        )}
                        href={"/#home"}
                      >
                        {t("home")}
                      </Link>
                      <Link
                        className={clsx(
                          "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300"
                        )}
                        href={"/#about"}
                      >
                        {t("about")}
                      </Link>
                      <Link
                        className={clsx(
                          "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300"
                        )}
                        href={"/#projects"}
                      >
                        {t("projects")}
                      </Link>
                      <Link
                        className={clsx(
                          "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300"
                        )}
                        href={"/#skills"}
                      >
                        {t("skills")}
                      </Link>
                      <Link
                        className={clsx(
                          "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300"
                        )}
                        href={"/#education"}
                      >
                        {t("education")}
                      </Link>
                      <Link
                        className={clsx(
                          "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300"
                        )}
                        href={"/#contact"}
                      >
                        {t("contact")}
                      </Link>
                    </li>
                    <div className="flex">
                      <Link href="/en" locale="en" className="w-8">
                        <Image src={EN} alt="Russia" width={20} height={20} />
                      </Link>
                      <Link href="/ru" locale="ru" className="w-8">
                        <Image src={RU} alt="England" width={20} height={20} />
                      </Link>
                      <Link href="/uz" locale="uz" className="w-8">
                        <Image
                          src={UZ}
                          alt="Uzbekistan"
                          width={20}
                          height={20}
                        />
                      </Link>
                    </div>
                  </ul>
                </nav>
              </header>
              {children}
              <Footer />
              <Toaster position="top-right" />
              <ThemeSwitch />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
