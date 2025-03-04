import { unstable_ViewTransition as ViewTransition } from "react"
import Nav from "./nav";

export default function Header() {
  return (
    <ViewTransition name="header">
      <header className="fixed top-0 left-0 z-10 w-full" style={{ viewTransitionName: "header" }}>
        <Nav />
      </header>
    </ViewTransition>
  );
}
