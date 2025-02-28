import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1>Home</h1>
      <Image src="/spiral_stairs.jpg" alt="Stairs" width={800} height={500} />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eligendi vel tempore eaque magnam dignissimos suscipit, consequatur aperiam nam recusandae quae, amet omnis in sapiente, eius alias inventore culpa esse.</p>
    </div>
  );
}
