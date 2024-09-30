"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      controls.start("visible");
    }
  }, [controls, inView]);

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={footerVariants}
      className={`bg-primary text-primary-foreground py-8 ${
        isVisible ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-2xl font-bold hover:text-primary-foreground/80"
            >
              Off Topic
            </Link>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li>
                <Link href="/pag1" className="hover:text-primary-foreground/80">
                  Página 1
                </Link>
              </li>
              <li>
                <Link href="/pag2" className="hover:text-primary-foreground/80">
                  Página 2
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-sm">
            © {new Date().getFullYear()} Off Topic. Todos los derechos
            reservados.
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
