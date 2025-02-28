import Image from "next/image";

export default function Projects() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 py-[20vh] mx-auto">
      <h1>Projects</h1>
      <Image src="/spiral_stairs.jpg" alt="Stairs" width={800} height={500} />
      <Image src="/metal_geometry.jpg" alt="Stairs" width={800} height={500} />
      <Image src="/structure_geometry.jpg" alt="Stairs" width={800} height={500} />
    </div>
  );
}
