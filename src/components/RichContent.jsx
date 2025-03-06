"use client"

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
gsap.registerPlugin(useGSAP);

export default function RichContent({ children }) {
  useGSAP(() => {
    gsap.from(':is(.rich-content) :is(h2, h3, h4, h5, h6, li, img, table)', {
      y: 40,
      opacity: 0,
      stagger: 0.075,
      duration: 1.2,
      ease: 'power4.out',
      delay: .5,
    });

    const paragraph = new SplitType('.rich-content p', { types: 'lines' })
    gsap.from(paragraph.lines, {
      y: 40,
      opacity: 0,
      stagger: 0.075,
      duration: 1.2,
      ease: 'power4.out',
      delay: .5,
    })
  }, []);

  return (
    <div className="rich-content text-pretty prose lg:prose-xl prose-h1:[font-kerning:_none] prose-h2:text-gray-400 prose-p:[font-kerning:_none]">
      {children}
    </div>
  );
}
