import Image from 'next/image';

export default function Home() {
    return (
        <main className="min-h-screen">
            <section className="min-h-screen flex items-center container mx-auto">
                <div>
                    <h1 className="text-5xl font-bold">
                        Hi, my name is <span className="text-[#00cdac]">Akashaf Khomarudin</span>
                    </h1>
                    <h1 className="text-5xl font-bold">I'm the front End Developer.</h1>
                </div>
            </section>
            <section className="py-4 bg-[#00cdac]">
                <div className="container text-white">
                    <h2 className="text-center text-4xl font-bold uppercase">About Me</h2>
                    <div className="flex justify-center items-center space-x-8">
                        <div>
                            <Image src="/IMG_0202.jpg" width={300} height={300} alt="my picture" />
                        </div>
                        <div className="w-2/3">
                            I am a skilled and experienced web developer with a passion for new technology and app
                            development. I have 5 years of experience in developing web applications, including
                            e-commerce websites. I am currently working towards becoming a full-stack developer, so that
                            I can be involved in all aspects of web development, from the back-end to the front-end. In
                            addition to my technical skills, I am also a highly motivated and creative individual. I am
                            always looking for new ways to improve my skills and to learn new technologies. I am also
                            passionate about creating user-friendly and visually appealing web applications. I am a
                            valuable asset to any team, and I am always eager to learn and grow. I am a great choice for
                            any company that is looking for a skilled and experienced web developer.
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
