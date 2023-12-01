'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  interface Project {
    title: string;
    description: JSX.Element;
    link: {
      source: string;
      demo: string;
    };
  }
  const projects: Project[] = [
    {
      title: 'Project Title 1',
      description: (
        <div>
          Describe the project being very specific, you can use the Twitter standard: no more than 280 characters:
          complement the information: the skills learned or reinforced in its realization and how you faced it, prove to
          be proactive in the search for solutions.
        </div>
      ),
      link: {
        source: '',
        demo: '',
      },
    },
    {
      title: 'Project Title 2',
      description: (
        <div>
          Describe the project being very specific, you can use the Twitter standard: no more than 280 characters:
          complement the information: the skills learned or reinforced in its realization and how you faced it, prove to
          be proactive in the search for solutions.
        </div>
      ),
      link: {
        source: '',
        demo: '',
      },
    },
  ];
  return (
    <main>
      <section className="text-center lg:text-left min-h-screen lg:justify-center flex items-center relative">
        <div className="absolute bottom-0 right-0">
          <Image className="hidden lg:block" src="/programmer.gif" alt="background image" width={600} height={800} />
        </div>
        <div className="container z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="mb-4">
              <h1 className="text-2xl lg:text-4xl font-bold">
                Hi, my name is <span className="text-[#00cdac]">Akashaf Khomarudin</span>
              </h1>
              <h1 className="text-2xl lg:text-4xl font-bold">I'm the front End Developer.</h1>
              <motion.div whileTap={{ scale: 0.95, rotate: '2.5deg' }}>
                <Button
                  className="uppercase font-bold text-[#00cdac] border-[#00cdac] border-2 hover:bg-[#00cdac] hover:text-white"
                  variant="outline"
                  onClick={() =>
                    window.scrollTo({
                      top: document.getElementById('about-me')!.offsetTop,
                      behavior: 'smooth',
                    })
                  }
                >
                  know more
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="bg-[#02aab0] lg:px-40 lg:py-32 py-8 lg:clip-about-me">
        <motion.div id="about-me" initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
          <div className="container text-white">
            <motion.div
              variants={{
                offscreen: {
                  opacity: 0,
                },
                onscreen: {
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                  },
                },
              }}
            >
              <h2 className="text-center text-2xl lg:text-4xl font-bold uppercase mb-4">About Me</h2>
              <div className="grid lg:grid-cols-2 lg:items-center space-y-12 space-x-4">
                <motion.div whileHover={{ rotate: 5, scale: 0.95 }}>
                  <Image
                    className="w-full mx-auto lg:w-[15vw] h-auto rounded-lg shadow-2xl"
                    src="/IMG_0202.jpg"
                    width={600}
                    height={800}
                    alt="my picture"
                  />
                </motion.div>
                <div className="lg:w-2/3 text-center">
                  <p className="text-justify mb-4">
                    Web developer with 5+ years of experience building user-friendly and visually appealing web
                    applications, including e-commerce websites. Passionate about new technology and app development,
                    and currently working towards becoming a full-stack developer. Creative and highly motivated
                    individual, always eager to learn and grow. Looking to join a team where I can use my skills to
                    create innovative and impactful web applications
                  </p>
                  <motion.div whileTap={{ scale: 0.95, rotate: '2.5deg' }}>
                    <Button
                      className="uppercase border-2 bg-transparent font-bold hover:text-[#00cdac]"
                      variant="outline"
                      onClick={() => window.open('resume_v3.pdf', '_blank', 'noopener,noreferrer')}
                    >
                      view resume
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section className="container py-8 min-h-[50vh]">
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
          <motion.h2
            className="text-center text-2xl lg:text-4xl font-bold uppercase mb-4"
            variants={{
              offscreen: {
                opacity: 0,
              },
              onscreen: {
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              },
            }}
          >
            projects
          </motion.h2>
          <motion.h3
            className="text-center lg:text-2xl text-xl uppercase mt-20"
            animate={{ scale: 1.5, fontWeight: 600 }}
            transition={{
              duration: 2,
            }}
          >
            coming soon...
          </motion.h3>
        </motion.div>
      </section>
    </main>
  );
}
