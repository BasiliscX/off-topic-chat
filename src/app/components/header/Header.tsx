"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LinkHeaderMobile from "./LinkHeaderMobile";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 text-black card-2`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center w-32">
            <Link href="/" className={`text-lg font-bold `}>
              Off Topic
            </Link>
          </div>
          <p className="italic text-center text-sm px-10 md:text-xl">
            Si queres conocer a alguien, dale libertad
          </p>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <LinkHeaderMobile
                  text="Repositorio"
                  linkref="https://github.com/BasiliscX/off-topic-chat/tree/develop"
                />
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md hover:bg-primary-foreground/10 focus:outline-none ${
                !isMenuOpen ? "card" : "card-inner"
              }`}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6 text-black" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6 text-black" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary-background fixed top-16 left-0 right-0 z-50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <LinkHeaderMobile
                text="Repositorio"
                linkref="https://github.com/BasiliscX/off-topic-chat/tree/develop"
              />
              <LinkHeaderMobile
                text="Dev"
                linkref="https://www.navarroguillermo.com/"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
