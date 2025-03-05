"use client";

import { useRef } from "react";
import { unstable_ViewTransition as ViewTransition } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Image from "next/image";
import Link from "next/link";
gsap.registerPlugin(useGSAP);

export default function Projects() {
  const header1Ref = useRef(null);
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "Spiral Stairs",
      slug: "spiral-stairs",
      cover: "/projects/spiral_stairs.jpg",
    },
    {
      title: "Metal Geometry",
      slug: "metal-geometry",
      cover: "/projects/metal_geometry.jpg",
    },
    {
      title: "Structure Geometry",
      slug: "structure-geometry",
      cover: "/projects/structure_geometry.jpg",
    },
    {
      title: "Escalator Metro",
      slug: "escalator-metro",
      cover: "/projects/escalator_metro.jpg",
    },
  ];

  useGSAP(() => {
    const header1 = new SplitType(header1Ref.current, { types: 'chars' })
    gsap.from(header1.chars, {
      y: 200,
      stagger: 0.075,
      duration: .6,
      ease: 'power4.out',
      delay: .5,
    });

    // gsap.fromTo('.project-cover', {
    //   y: 50,
    //   opacity: 0,
    // }, {
    //   y: 0,
    //   opacity: 1,
    //   duration: .6,
    //   stagger: 0.2,
    //   ease: 'power4.out',
    //   delay: .5,
    // })
    gsap.from('.project-cover', {
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power4.out',
      delay: .5,
    });
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center gap-4 py-[20vh]">
      <h1 ref={header1Ref}>Projects</h1>
      <div ref={projectsRef} className="projects grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link className="hover:opacity-80 transition-opacity" href={`/projects/${project.slug}`} key={project.slug}>
            {/* <ViewTransition name="project-cover"> */}
            <Image className="object-cover project-cover h-full" src={project.cover} alt={project.title} width={800} height={500} style={{ viewTransitionName: `project-cover-${project.slug}` }} />
            {/* </ViewTransition> */}
          </Link>
        ))}
      </div>
    </div>
  );
}
