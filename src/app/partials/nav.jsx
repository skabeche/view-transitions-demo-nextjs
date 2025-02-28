import Link from "next/link";
export default function Nav() {
  return (
    <nav className="p-8 flex justify-end gap-4 text-xl">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  );
}
