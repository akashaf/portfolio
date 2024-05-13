'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Button } from '@mantine/core';

const Highlight = () => {
  return (
    <>
      <div className="absolute bottom-0 right-0">
        <Image className="hidden lg:block" src="/programmer.gif" alt="background image" width={600} height={800} unoptimized />
      </div>
      <div className="container z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="mb-4 space-y-4">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Hi, my name is <span className="text-[#00cdac]">Akashaf Khomarudin</span>
            </h1>
            <h1 className="text-2xl lg:text-4xl font-bold">I am the front End Developer.</h1>
            <h2 className="uppercase font-bold text-4xl text-[#00cdac]">
              <Typewriter
                cursor
                delaySpeed={500}
                loop={3}
                words={['Code, Debug, Commit, Repeat']}
                cursorColor="black"
                cursorStyle="_"
              />
            </h2>
            <Button
              classNames={{
                root: 'uppercase font-bold transition-transform transform hover:scale-95 hover:rotate-2.5',
              }}
              color='#00cdac'
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById('about-me')!.offsetTop,
                  behavior: 'smooth',
                })
              }
            >
              know more
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Highlight;
