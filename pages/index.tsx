import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Card, Button, Avatar, Carousel } from 'react-daisyui';
import {
    FaGithub,
    FaSoundcloud,
    FaLinkedin,
    FaInstagram,
    FaMapMarked,
} from 'react-icons/fa';

import avatar from '@/assets/avatar.png';
import portrait from '@/assets/portrait.png';
import BgWave from '@/assets/bg-wave.svg';
import avatarNew from '@/assets/avatar-new.png';
import Emoji from '@/components/emoji';
import { MouseEvent, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {};

const Home = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { t } = useTranslation('common');
    const [showModal, setShowModal] = useState(false);
    const modalProps = {
        title: 'Modal title',
        content: 'Modal content',
        footer: 'Modal footer',
        onClose: () => setShowModal(false),
    };

    // Mouseevent click image
    const onOpenModalClick = (e: MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
        setShowModal(true);
    };

    return (
        <div>
            <Head>
                <title>{t('personal-info.name')}</title>
            </Head>
            <main>
                <div className="from-base-100 to-base-300 text-primary-content grid place-items-center items-end bg-gradient-to-br xl:min-h-screen xl:max-h-screen">
                    <div className="col-start-1 row-start-1 grid grid-rows-2 grid-cols-2 grid-flow-row text-base-content glass xl:rounded-box max-w-screen-xl gap-4 bg-opacity-60">
                        <div className="row-span-1 col-span-1 pl-4 pt-4">
                            <div className="grid grid-rows-2 grid-cols-3 grid-flow-row gap-4 min-h-full">
                                <div className="row-span-1 col-span-3">
                                    <Card className="bg-base-300 h-full">
                                        <Card.Body className="items-left place-content-center">
                                            <h1 className="text-6xl font-extrabold text-white">
                                                {t('slogan')}
                                            </h1>
                                        </Card.Body>
                                    </Card>
                                </div>
                                {Object.entries(
                                    t('metrics', { returnObjects: true })
                                ).map(([key, item]) => (
                                    <div
                                        key={key}
                                        className="row-span-1 col-span-1"
                                    >
                                        <Card className={'bg-warning h-full'}>
                                            <Card.Body className="items-center place-content-center p-0">
                                                <h2 className="text-6xl font-black text-white">
                                                    {item.value}
                                                </h2>
                                                <span className="font-bold text-white">
                                                    {item.unit}
                                                </span>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row-span-1 col-span-1 pr-4 pt-4">
                            <div className="grid grid-row-6 grid-col-2 grid-flow-row gap-4 min-h-full">
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
                                                        {t(
                                                            'contact.injunction'
                                                        )}
                                                    </span>
                                                </Button>
                                                <Avatar
                                                    shape="circle"
                                                    size="xs"
                                                >
                                                    <Image
                                                        src={avatar}
                                                        alt="avatar"
                                                        className="bg-secondary"
                                                    />
                                                </Avatar>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="row-span-5 col-span-1">
                                    <Card className="bg-secondary h-full">
                                        <Card.Body className="items-center place-content-end p-0">
                                            <Image
                                                src={portrait}
                                                className="w-72 rounded-box"
                                                alt="portrait"
                                            />
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="row-span-1 col-span-1">
                                    <Card className="bg-base-300 h-full">
                                        <Card.Body className="p-4">
                                            <div className="flex flex-row justify-between gap-4">
                                                <h4 className="text-md text-slate-500">
                                                    {t(
                                                        'personal-info.labels.name'
                                                    )}
                                                </h4>
                                                <h4 className="text-md font-bold text-white">
                                                    {t('personal-info.name')}
                                                </h4>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="row-span-3 col-span-1">
                                    <Card className="bg-base-300 h-full">
                                        <Card.Body className="p-4">
                                            <div className="flex flex-row justify-between gap-4">
                                                <h4 className="text-md text-slate-500">
                                                    {t(
                                                        'personal-info.labels.location'
                                                    )}
                                                </h4>
                                                <span className="text-md font-bold text-white">
                                                    {t(
                                                        'personal-info.location'
                                                    )}
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
                                        <Card.Body className="items-center place-content-center p-4">
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
                        <div className="row-span-1 col-span-2 px-4 pb-4">
                            <div className="grid grid-row-auto grid-col-12 grid-flow-col gap-4 min-h-full">
                                <div className="col-span-7">
                                    <Card className="bg-base-300 w-full h-full">
                                        <Card.Body className="h-full">
                                            <h4 className="flex flex-row justify-between gap-4">
                                                <span className="text-3xl font-bold text-white">
                                                    Portfolio
                                                </span>
                                            </h4>
                                            <Carousel
                                                display="sequential"
                                                snap="center"
                                            >
                                                <Carousel.Item>
                                                    <Image
                                                        src={avatarNew}
                                                        alt="stock1"
                                                        className="rounded-box h-96 w-auto"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image
                                                        src={portrait}
                                                        alt="stock2"
                                                        className="rounded-box h-96 w-auto"
                                                        onClick={
                                                            onOpenModalClick
                                                        }
                                                    />
                                                </Carousel.Item>
                                            </Carousel>
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
                    <BgWave className="col-start-1 row-start-1 fill-base-100 h-auto w-full" />
                </div>
            </main>
        </div>
    );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
});

export default Home;
