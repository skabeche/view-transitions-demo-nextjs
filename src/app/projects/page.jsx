"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Image from "next/image";
gsap.registerPlugin(useGSAP);

export default function Projects() {
  const header1Ref = useRef(null);
  const projectsRef = useRef(null);

  useGSAP(() => {
    const header1 = new SplitType(header1Ref.current, { types: 'chars' })
    gsap.from(header1.chars, {
      y: 200,
      stagger: 0.075,
      duration: .6,
      ease: 'power4.out',
      delay: .5,
    });

    gsap.from(projectsRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      delay: .5,
    });
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center gap-4 py-[20vh] mx-auto">
      <h1 ref={header1Ref}>Projects</h1>
      <div ref={projectsRef} className="projects flex flex-col gap-4">
        <Image src="/spiral_stairs.jpg" alt="Stairs" width={800} height={500} />
        <Image src="/metal_geometry.jpg" alt="Stairs" width={800} height={500} />
        <Image src="/structure_geometry.jpg" alt="Stairs" width={800} height={500} />
        <Image src="/escalator_metro.jpg" alt="Stairs" width={800} height={500} />
      </div>
    </div>
  );
}
