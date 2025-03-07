import { unstable_ViewTransition as ViewTransition } from "react"
import Header from "./partials/header"

export default function Template({ children }) {
  return (
    <>
      <Header />
      <ViewTransition name="content">
        <main className="text-xl">
          {children}
        </main>
      </ViewTransition>
    </>
  );
}
