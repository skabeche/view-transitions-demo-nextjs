"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
gsap.registerPlugin(useGSAP);

export default function Home() {
  const header1Ref = useRef(null);
  const header2Ref = useRef(null);

  useGSAP(() => {
    const header1 = new SplitType(header1Ref.current, { types: 'chars' })
    gsap.from(header1.chars, {
      y: 200,
      stagger: 0.075,
      duration: .6,
      ease: 'power4.out',
      delay: .5,
    });

    gsap.from(header2Ref.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      delay: .5,
    });
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center h-screen">
      <h1 ref={header1Ref} className="!mb-0">Dan Alcaide</h1>
      <h2 ref={header2Ref}>View Transitions Demo</h2>
    </div>
  );
}
