import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";

export default async function Project({ params }) {
  const { slug } = await params;
  const { default: ProjectContent, metadata } = await import(`@/content/${slug}.mdx`);
  const { title, cover } = metadata;

  return (
    <div className="md:grid md:grid-cols-2 md:gap-y-24 h-screen">
      <div className="h-[50vh] md:min-h-screen pt-24 md:pt-0">
        <Image className="object-cover object-top w-full h-full" src={cover} alt={title} width={800} height={500} style={{ viewTransitionName: `project-cover-${slug}` }} />
      </div>
      <div className="p-8 md:p-12 md:pt-24 lg:p-24">
        <Link className="text-lg" href="/projects">Back to projects</Link>
        <Heading>{title}</Heading>
        <ProjectContent />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: 'spiral-stairs' },
    { slug: 'metal-geometry' },
    { slug: 'structure-geometry' },
    { slug: 'escalator-metro' },
  ]
}

export const dynamicParams = false
