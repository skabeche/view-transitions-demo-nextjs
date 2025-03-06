"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import Image from "next/image";
import Heading from "@/components/Heading";

export default function About() {
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      delay: .5,
    });
  }, []);

  return (
    <div className="md:grid md:grid-cols-2 md:gap-y-24 h-screen">
      <div className="h-[50vh] md:min-h-screen pt-24 md:pt-0">
        <Image className="object-cover object-top w-full h-full" src="/spiral_staircase_portrait.jpg" alt="Stairs" width={800} height={500} />
      </div>
      <div className="p-8 md:p-12 md:pt-24 lg:p-24">
        <Heading>About</Heading>
        <p ref={textRef}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eligendi vel tempore eaque magnam dignissimos suscipit, consequatur aperiam nam recusandae quae, amet omnis in sapiente, eius alias inventore culpa esse.</p>
      </div>
    </div>
  );
}
