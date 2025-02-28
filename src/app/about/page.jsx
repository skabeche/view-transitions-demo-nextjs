import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-cols-2 gap-y-24 h-screen">
      <div className="min-h-screen">
        <Image className="object-cover object-top w-full h-full" src="/spiral_staircase_portrait.jpg" alt="Stairs" width={800} height={500} />
      </div>
      <div className="p-24">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eligendi vel tempore eaque magnam dignissimos suscipit, consequatur aperiam nam recusandae quae, amet omnis in sapiente, eius alias inventore culpa esse.</p>
      </div>
    </div>
  );
}
