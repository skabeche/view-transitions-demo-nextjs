import Heading from "@/components/Heading";

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center h-screen">
      <Heading className="!mb-0">Dan Alcaide</Heading>
      <Heading level={2}>View Transition Demo</Heading>
    </div>
  );
}
