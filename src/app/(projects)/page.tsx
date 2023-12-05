'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
const Projects = ({ repoList }) => {
  console.log(repoList);

  return (
    <>
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
        <div className="grid grid-cols-5 gap-4">
          {repoList.map((repo) => !repo.fork && (
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              key={repo.id}
            >
              <Card className="shadow-xl hover:cursor-pointer">
                <CardHeader>
                  <CardTitle>
                    <span className="uppercase">{repo.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dignissimos nihil facilis tempore asperiores. Adipisci, quod alias tempora impedit explicabo labore, laudantium distinctio ea corrupti est placeat harum perspiciatis vitae.</p>
                </CardContent>
                <CardFooter className="flex justify-end gap-4">
                  <motion.div whileTap={{ scale: 0.95, rotate: '2.5deg' }}>
                    <Button variant="outline">View Project</Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
