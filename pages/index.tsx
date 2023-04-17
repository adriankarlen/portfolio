import Head from 'next/head';
import Image from 'next/image';
import { Card, Button } from 'react-daisyui';
import {
    FaGithub,
    FaSoundcloud,
    FaLinkedin,
    FaInstagram,
    FaMapMarked,
    FaCode,
} from 'react-icons/fa';

import avatar from '../assets/avatar.png';
import portrait from '../assets/portrait.png';
import Emoji from '@/components/emoji';

export default function Home() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Head>
                <title>Adrian Karlén</title>
            </Head>
            <main>
                <div className="p-10 bg-base-100 mx-auto min-h-screen">
                    <div className="grid grid-rows-2 grid-cols-2 grid-flow-row gap-4 min-h-full">
                        <div className="row-span-1 col-span-1">
                            <div className="grid grid-rows-2 grid-cols-3 grid-flow-row gap-4 min-h-full">
                                <div className="row-span-1 col-span-3">
                                    <Card className="bg-base-300 h-full">
                                        <Card.Body className="items-left place-content-center">
                                            <h1 className="text-6xl font-bold text-white">
                                                <span className="text-white">
                                                    Code that bridges the gap.
                                                </span>
                                            </h1>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="row-span-1 col-span-1">
                                    <Card className="bg-success h-full">
                                        <Card.Body className="items-center place-content-center">
                                            <h2 className="text-6xl font-bold text-white">
                                                4+
                                            </h2>
                                            <span className="font-bold text-white">
                                                Years experience
                                            </span>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="row-span-1 col-span-1">
                                    <Card className="bg-warning h-full">
                                        <Card.Body className="items-center place-content-center">
                                            <h2 className="text-6xl font-bold text-white">
                                                15+
                                            </h2>
                                            <span className="font-bold text-white">
                                                Different clients
                                            </span>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="row-span-1 col-span-1">
                                    <Card className="bg-error h-full">
                                        <Card.Body className="items-center place-content-center">
                                            <h2 className="text-6xl font-bold text-white">
                                                20+
                                            </h2>
                                            <span className="font-bold text-white">
                                                Projects
                                            </span>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div className="row-span-1 col-span-1">
                            <div className="grid grid-row-6 grid-col-2 grid-flow-row gap-4 minh-full">
                                <div className="row-span-1 col-span-2">
                                    <Card className="bg-base-300 h-full">
                                        <Card.Body className="place-content-center min-h-full">
                                            <div className="flex flex-row justify-between gap-4">
                                                <Button
                                                    color="secondary"
                                                    href="mailto:akarlen@pm.me"
                                                    className="rounded-full btn-wide"
                                                    endIcon={
                                                        <Emoji
                                                            label="wave"
                                                            symbol="👋🏼"
                                                            className="text-2xl"
                                                        />
                                                    }
                                                >
                                                    <span className="text-white normal-case text-lg">
                                                        Contact me!
                                                    </span>
                                                </Button>
                                                <Image
                                                    src={avatar}
                                                    className="rounded-full w-10 h-10"
                                                    alt="avatar"
                                                />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="row-span-5 col-span-1">
                                    <Card className="bg-secondary h-full">
                                        <Card.Body className="items-center  place-content-end p-0">
                                            <Image
                                                src={portrait}
                                                className="w-72"
                                                alt="portrait"
                                            />
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="row-span-1 col-span-1">
                                    <Card className="bg-base-300 h-full">
                                        <Card.Body className="place-content-center p-4">
                                            <div className="flex flex-row justify-between gap-4">
                                                <h4 className="text-md text-slate-500">
                                                    Name:
                                                </h4>
                                                <h4 className="text-md font-bold text-white">
                                                    Adrian Karlén
                                                </h4>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="row-span-3 col-span-1">
                                    <Card className="bg-base-300 h-full">
                                        <Card.Body className="place-content-center p-4">
                                            <div className="flex flex-row justify-between gap-4">
                                                <h4 className="text-md text-slate-500">
                                                    Based:
                                                </h4>
                                                <span className="text-md font-bold text-white">
                                                    Stockholm, Sweden
                                                </span>
                                            </div>
                                            <FaMapMarked
                                                size="45%"
                                                color="white"
                                                className="mt-4 self-center"
                                            />
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="row-span-1 col-span-1">
                                    <Card className="bg-base-300 h-full">
                                        <Card.Body className="items-center place-content-center p-2">
                                            <div className="flex flex-row justify-between gap-4">
                                                <Button
                                                    shape="circle"
                                                    href="https://github.com/adriankarlen"
                                                >
                                                    <FaGithub
                                                        size="60%"
                                                        color="white"
                                                    />
                                                </Button>
                                                <Button
                                                    shape="circle"
                                                    href="https://soundcloud.com/jungeladde"
                                                >
                                                    <FaSoundcloud
                                                        size="60%"
                                                        color="white"
                                                    />
                                                </Button>
                                                <Button
                                                    shape="circle"
                                                    href="https://www.linkedin.com/in/adrian-karlen/"
                                                >
                                                    <FaLinkedin
                                                        size="60%"
                                                        color="white"
                                                    />
                                                </Button>
                                                <Button
                                                    shape="circle"
                                                    href="https://www.instagram.com/adriankarlen/"
                                                >
                                                    <FaInstagram
                                                        size="60%"
                                                        color="white"
                                                    />
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div className="row-span-1 col-span-2">
                            <div className="grid grid-row-auto grid-col-12 grid-flow-col gap-4 min-h-full">
                                <div className="col-span-7">
                                    <Card className="bg-base-300 h-full">
                                        <Card.Body>
                                            <h4 className="flex flex-row justify-between gap-4">
                                                <span className="text-3xl font-bold text-white">
                                                    Portfolio
                                                </span>
                                            </h4>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-span-5">
                                    <Card className="bg-base-300 h-full">
                                        <Card.Body>
                                            <div className="flex flex-row justify-between gap-4">
                                                <h4 className="text-3xl font-bold text-white">
                                                    About
                                                </h4>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
