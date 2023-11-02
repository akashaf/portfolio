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
            <section
                className="bg-[#02aab0] px-40 py-16"
                style={{
                    backgroundImage: 'linear-gradient(135deg,#02aab0 0%,#00cdac 100%)',
                    clipPath: 'polygon(0 0,100% 0,100% 80%,0 100%)',
                }}
            >
                <div className="container text-white">
                    <h2 className="text-center text-4xl font-bold uppercase">About Me</h2>
                    <div className="flex justify-center items-center space-x-8">
                        <div>
                            <Image src="/IMG_0202.jpg" width={300} height={300} alt="my picture" />
                        </div>
                        <div className="w-2/3 text-justify">
                            Web developer with 5+ years of experience building user-friendly and visually appealing web
                            applications, including e-commerce websites. Passionate about new technology and app
                            development, and currently working towards becoming a full-stack developer. Creative and
                            highly motivated individual, always eager to learn and grow. Looking to join a team where I
                            can use my skills to create innovative and impactful web applications
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
