'use client';
import { Button } from '@/components/ui/button';
import { nanoid } from 'nanoid';
import clsx from 'clsx';
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
                    Describe the project being very specific, you can use the Twitter standard: no more than 280
                    characters: complement the information: the skills learned or reinforced in its realization and how
                    you faced it, prove to be proactive in the search for solutions.
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
                    Describe the project being very specific, you can use the Twitter standard: no more than 280
                    characters: complement the information: the skills learned or reinforced in its realization and how
                    you faced it, prove to be proactive in the search for solutions.
                </div>
            ),
            link: {
                source: '',
                demo: '',
            },
        },
    ];
    return (
        <main className="min-h-screen">
            <section className="min-h-screen flex items-center container mx-auto">
                <motion.div
                    className="space-y-4 text-5xl font-bold"
                    initial={{ x: '-100vw' }} // Position the div outside of the viewport to the left
                    animate={{ x: 0 }} // Position the div in its desired position within the viewport
                    transition={{ duration: 2.5 }} // Set the animation duration to 0.5 seconds
                >
                    <div>
                        <h1>
                            Hi, my name is <span className="text-[#00cdac]">Akashaf Khomarudin</span>
                        </h1>
                        <h1>I'm the front End Developer.</h1>
                    </div>
                    <motion.div whileTap={{ scale: 0.95, rotate: '2.5deg' }}>
                        <Button
                            className="uppercase font-bold text-[#00cdac] border-[#00cdac] border-2 hover:bg-[#00cdac] hover:text-white"
                            variant="outline"
                        >
                            know more
                        </Button>
                    </motion.div>
                </motion.div>
            </section>
            <section
                className="bg-[#02aab0] px-40 py-16"
                style={{
                    backgroundImage: 'linear-gradient(135deg,#02aab0 0%,#00cdac 100%)',
                    clipPath: 'polygon(0 0,100% 0,100% 80%,0 100%)',
                }}
            >
                <motion.div
                    className="container text-white"
                    initial={{ x: '-100vw' }} // Position the div outside of the viewport to the left
                    animate={{ x: 0 }} // Position the div in its desired position within the viewport
                    transition={{ duration: 2.5 }} // Set the animation duration to 0.5 seconds
                >
                    <h2 className="text-center text-4xl font-bold uppercase">About Me</h2>
                    <div className="flex justify-center items-center space-x-8">
                        <div>
                            <Image src="/IMG_0202.jpg" width={300} height={300} alt="my picture" />
                        </div>
                        <div className="w-2/3 space-y-4">
                            <p className="text-justify">
                                Web developer with 5+ years of experience building user-friendly and visually appealing
                                web applications, including e-commerce websites. Passionate about new technology and app
                                development, and currently working towards becoming a full-stack developer. Creative and
                                highly motivated individual, always eager to learn and grow. Looking to join a team
                                where I can use my skills to create innovative and impactful web applications
                            </p>
                            <motion.div whileTap={{ scale: 0.95, rotate: '2.5deg' }}>
                                <Button
                                    className="uppercase border-2 bg-transparent font-bold hover:text-[#00cdac]"
                                    variant="outline"
                                    onClick={() => window.open('resume.pdf', '_blank', 'noopener,noreferrer')}
                                >
                                    view resume
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>
            <section className="container mx-auto">
                <motion.h2
                    initial={{ x: '-100vw' }} // Position the div outside of the viewport to the left
                    animate={{ x: 0 }} // Position the div in its desired position within the viewport
                    transition={{ duration: 2.5 }} // Set the animation duration to 0.5 seconds
                    className="text-center text-4xl font-bold uppercase"
                >
                    projects
                </motion.h2>
                <div className="space-y-4">
                    {projects.map((project, idx) => {
                        const order = idx % 2 === 0;
                        return (
                            <motion.div
                                key={nanoid(2)}
                                initial={{ x: order ? '-100vw' : '100vw' }} // Position the div outside of the viewport to the left
                                animate={{ x: 0 }} // Position the div in its desired position within the viewport
                                transition={{ duration: 2.5 }} // Set the animation duration to 0.5 seconds
                            >
                                <div className="flex items-center justify-between gap-12">
                                    <div className={clsx('space-y-4', order ? 'order-first' : 'order-last')}>
                                        <h3 className="text-2xl font-bold uppercase">{project.title}</h3>
                                        <div className="text-justify">{project.description}</div>
                                        <div className="flex gap-4">
                                            <motion.div whileTap={{ scale: 0.95, rotate: '2.5deg' }}>
                                                <Button
                                                    className="capitalize font-bold text-[#00cdac] border-[#00cdac] border-2 hover:bg-[#00cdac] hover:text-white"
                                                    variant="outline"
                                                >
                                                    See Live
                                                </Button>
                                            </motion.div>
                                            <motion.div whileTap={{ scale: 0.95, rotate: '2.5deg' }}>
                                                <Button
                                                    className="font-bold text-[#00cdac] hover:text-[#00cdac]"
                                                    variant="ghost"
                                                >
                                                    Source Code
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <Image src="/IMG_0202.jpg" width={300} height={300} alt="my picture" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
