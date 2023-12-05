'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Typewriter } from 'react-simple-typewriter';

const Highlight = () => {
  return (
    <>
      <div className="absolute bottom-0 right-0">
        <Image className="hidden lg:block" src="/programmer.gif" alt="background image" width={600} height={800} />
      </div>
      <div className="container z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="mb-4 space-y-4">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Hi, my name is <span className="text-[#00cdac]">Akashaf Khomarudin</span>
            </h1>
            <h1 className="text-2xl lg:text-4xl font-bold">I'm the front End Developer.</h1>
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
    </>
  );
};

export default Highlight;
