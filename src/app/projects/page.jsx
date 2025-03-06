"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
gsap.registerPlugin(useGSAP);
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";

export default function Projects() {
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
      <Heading>Projects</Heading>
      <div ref={projectsRef} className="projects grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link className="hover:opacity-80 transition-opacity" href={`/projects/${project.slug}`} key={project.slug}>
            <Image className="object-cover project-cover h-full" src={project.cover} alt={project.title} width={800} height={500} style={{ viewTransitionName: `project-cover-${project.slug}` }} />
          </Link>
        ))}
      </div>
    </div>
  );
}
