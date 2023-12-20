'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Link from 'next/link';
interface Repository {
  id: number;
  name: string;
  fork: boolean;
  description: string;
  html_url: string;
  homepage: string;
  // Add more properties as needed
}
const Projects = ({ repoList }: { repoList: Repository[] }) => {
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
        <div className="grid grid-col-1 lg:grid-cols-4 gap-4">
          {repoList &&
            repoList.map(
              (repo) =>
                !repo.fork && (
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    key={repo.id}
                  >
                    <Card className="shadow-xl hover:cursor-pointer ">
                      <CardHeader className="text-center">
                        <CardTitle className="uppercase">{repo.name.split('_').join(' ')}</CardTitle>
                      </CardHeader>
                      <CardContent className="h-[30vh] overflow-hidden flex items-center">
                        <p className="text-justify">{repo.description ?? 'No description provided for now.'}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between gap-4">
                        <motion.div whileTap={{ scale: 0.95, rotate: '2.5deg' }}>
                          <Button asChild>
                            <Link target="_blank" rel="noopener noreferrer" href={repo.html_url}>
                              View Code
                            </Link>
                          </Button>
                        </motion.div>
                        {
                          repo.homepage !== '' &&
                          <motion.div whileTap={{ scale: 0.95, rotate: '2.5deg' }}>
                            <Button asChild disabled>
                              <Link target="_blank" rel="noopener noreferrer" href={repo.homepage}>
                                Visit
                              </Link>
                            </Button>
                          </motion.div>
                        }
                      </CardFooter>
                    </Card>
                  </motion.div>
                ),
            )}
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
