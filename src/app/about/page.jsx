import Image from "next/image";
import Heading from "@/components/Heading";
import RichContent from "@/components/RichContent";

export default function About() {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-y-24 h-screen">
      <div className="h-[50vh] md:min-h-screen pt-24 md:pt-0">
        <Image className="object-cover object-top w-full h-full" src="/spiral_staircase_portrait.jpg" alt="Stairs" width={800} height={500} />
      </div>
      <div className="p-8 md:p-12 md:pt-24 lg:p-24">
        <Heading>About</Heading>
        <RichContent>
          <h2>View transition demo</h2>
          <p>This proof of concept made with Next.js 15 demonstrates the use of the <a href="https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API">View Transition API</a> along with the experimental <a href="https://react.dev/reference/react/useTransition">View Transition Component</a> in React 19.</p>
          <p>Please note that it is not currently supported in Firefox. <a href="https://caniuse.com/view-transitions">Check browser compatibility</a> for more details.</p>
          <p>Additionally, it utilizes <a href="https://gsap.com">GSAP library</a> to animate elements on the page.</p>
          <p>The <a href="https://github.com/skabeche/view-transitions-demo-nextjs">source code</a> is available on my GitHub profile.</p>
        </RichContent>
      </div>
    </div>
  );
}
