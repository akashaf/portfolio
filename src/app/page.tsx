import { getData } from "@/lib/actions";
import AboutMe from "../components/about-me/page";
import Highlight from "../components/highlight/page";
import Projects from "../components/projects/page";



export default async function Home() {
  const repoList = await getData();
  
  return (
    <main>
      <section className="text-center lg:text-left min-h-screen lg:justify-center flex items-center relative">
        <Highlight />
      </section>
      <section className="bg-[#02aab0] lg:px-40 lg:py-32 py-8 lg:clip-about-me">
        <AboutMe />
      </section>
      <section className="container py-8 min-h-[50vh]">
        <Projects {...{repoList}} />
      </section>
    </main>
  );
}
