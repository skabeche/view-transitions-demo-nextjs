"use client"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
gsap.registerPlugin(useGSAP);

export default function Heading({ children, level = 1, className = '' }) {
  const headerRef = useRef(null);
  const levels = {
    1: "text-5xl md:text-7xl xl:text-8xl mb-6 font-bold uppercase leading-none [clip-path:_polygon(0_0,_100%_0,_100%_100%,_0_100%)]",
    2: "text-2xl md:text-3xl my-2 font-bold leading-none text-gray-400",
    3: "text-2xl font-semibold text-gray-400",
    4: "text-xl font-medium text-gray-400",
    5: "text-lg text-gray-400",
    6: "text-base text-gray-400",
  };

  useGSAP(() => {
    if (level !== 1 && level !== 2) return;

    if (level === 1) {
      const header = new SplitType(headerRef.current, { types: 'chars' })
      gsap.from(header.chars, {
        y: 200,
        stagger: 0.075,
        duration: .6,
        ease: 'power4.out',
        delay: .5,
      });
    }

    if (level === 2) {
      gsap.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: .5,
      });
    }

  }, []);

  const Tag = `h${level}`;

  return <Tag ref={headerRef} className={`${levels[level]} ${className}`}>{children}</Tag>;
}
