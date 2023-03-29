import Head from 'next/head';
import { Hero, Footer, Card } from 'react-daisyui';
import { FaGithub, FaSoundcloud, FaLinkedin } from 'react-icons/fa';

export default function Home() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Head>
                <title>Adrian Karlén</title>
            </Head>
            {/* <div className="p-10 bg-base-200">
                <div className="max-w-md mx-auto">
                    <h1 className="text-5xl font-bold text-white">Adrian Karlén</h1>
                    <p className="text-xl">Web Developer</p>
                </div>
            </div> */}
            <main>
                <div className="p-10 bg-base-200 mx-auto min-h-screen">
                    <div className="grid grid-rows-12 grid-cols-12 grid-flow-col gap-4 min-h-full">
                        <div className="row-span-6 col-span-6">
                            <Card className="bg-primary h-full">
                                <Card.Body className="items-center place-content-center">
                                    <h2 className="text-9xl font-bold text-white">
                                        1
                                    </h2>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-span-6">
                            <Card className="bg-warning">
                                <Card.Body className="items-center place-content-center">
                                    <h2 className="text-4xl font-bold text-white">
                                        2
                                    </h2>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="row-span-5 col-span-3">
                            <Card className="bg-error h-full">
                                <Card.Body className="items-center place-content-center">
                                    <h2 className="text-9xl font-bold text-white">
                                        3
                                    </h2>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="row-span-1 col-span-3">
                            <Card className="bg-success h-full">
                                <Card.Body className="items-center place-content-center">
                                    <h2 className="text-4xl font-bold text-white">
                                        4
                                    </h2>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="row-span-3 col-span-3">
                            <Card className="bg-neutral h-full">
                                <Card.Body className="items-center place-content-center">
                                    <h2 className="text-4xl font-bold text-white">
                                        5
                                    </h2>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="row-span-1 col-span-3">
                            <Card className="bg-neutral h-full">
                                <Card.Body className="items-center place-content-center">
                                    <h2 className="text-4xl font-bold text-white">
                                        6
                                    </h2>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                {/* <Hero>
                    <Hero.Overlay className="min-h-screen bg-base-200" />
                    <Hero.Content className="text-center">
                        <div className="max-w-md mx-auto">
                            <h1 className="text-5xl font-bold text-white">
                                Adrian Karlén
                            </h1>
                            <p className="text-xl">Web Developer</p>
                        </div>
                    </Hero.Content>
                </Hero> */}
            </main>
            {/* <footer>
                <Footer className="p-10 bg-neutral text-neutral-content ">
                    <div>
                        <Footer.Title className="text-4xl font-bold text-white">
                            Adrian Karlén
                        </Footer.Title>
                    </div>
                    <div className="grid grid-flow-col auto-cols-max gap-4 object-right">
                        <a
                            className="link link-hover text-4xl"
                            href="https://github.com/adriankarlen"
                        >
                            <FaGithub />
                        </a>
                        <a
                            className="link link-hover text-4xl"
                            href="https://soundcloud.com/jungeladde"
                        >
                            <FaSoundcloud />
                        </a>
                        <a
                            className="link link-hover text-4xl"
                            href="https://linkedin.com/in/adrian-karlen"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </Footer>
            </footer> */}
        </div>
    );
}
