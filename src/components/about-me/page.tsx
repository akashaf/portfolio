'use client';

import { Button } from '@mantine/core';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <>
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
                  applications, including e-commerce websites. Passionate about new technology and app development, and
                  currently working towards becoming a full-stack developer. Creative and highly motivated individual,
                  always eager to learn and grow. Looking to join a team where I can use my skills to create innovative
                  and impactful web applications
                </p>
                <motion.div whileTap={{ scale: 0.95, rotate: '2.5deg' }}>
                  <Button
                    classNames={{
                      root: 'uppercase font-bold transition-transform transform hover:scale-95 hover:rotate-2.5',
                    }}
                    color='#00cdac'
                    onClick={() => window.open('resume_akashaf.pdf', '_blank', 'noopener,noreferrer')}
                  >
                    view resume
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
