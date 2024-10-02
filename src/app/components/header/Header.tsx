"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 text-black card-2`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className={`text-lg font-bold `}>
              Off Topic
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link href="/pag1" className={`hover:opacity-80`}>
                  Página 1
                </Link>
              </li>
              <li>
                <Link href="/pag2" className={`hover:opacity-80`}>
                  Página 2
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md hover:bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
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
            className="md:hidden bg-primary"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/pag1"
                className="block px-3 py-2 rounded-md text-base font-medium text-primary-foreground hover:bg-primary-foreground/10"
              >
                Página 1
              </Link>
              <Link
                href="/pag2"
                className="block px-3 py-2 rounded-md text-base font-medium text-primary-foreground hover:bg-primary-foreground/10"
              >
                Página 2
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
