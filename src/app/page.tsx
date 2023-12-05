import AboutMe from "./about-me/page";
import Highlight from "./highlight/page";
import Projects from "./projects/page";

async function getData() {
  const res = await fetch('https://api.github.com/users/akashaf/repos', { cache: 'force-cache' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

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
