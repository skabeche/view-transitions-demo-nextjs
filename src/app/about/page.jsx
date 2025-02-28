"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Image from "next/image";
gsap.registerPlugin(useGSAP);

export default function About() {
  const header1Ref = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const header1 = new SplitType(header1Ref.current, { types: 'chars' })
    gsap.from(header1.chars, {
      y: 200,
      stagger: 0.075,
      duration: .6,
      ease: 'power4.out',
      delay: .5,
    });

    gsap.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      delay: .5,
    });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-y-24 h-screen">
      <div className="min-h-screen">
        <Image className="object-cover object-top w-full h-full" src="/spiral_staircase_portrait.jpg" alt="Stairs" width={800} height={500} />
      </div>
      <div className="p-24">
        <h1 ref={header1Ref}>About</h1>
        <p ref={textRef}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eligendi vel tempore eaque magnam dignissimos suscipit, consequatur aperiam nam recusandae quae, amet omnis in sapiente, eius alias inventore culpa esse.</p>
      </div>
    </div>
  );
}
