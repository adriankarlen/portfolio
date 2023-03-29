import Head from 'next/head';
import { Hero, Footer } from 'react-daisyui'
import { FaGithub, FaSoundcloud, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adrian Karlén</title>
      </Head>
      <main>
        <Hero>
          <Hero.Overlay className='min-h-screen bg-base-200' />
          <Hero.Content className='text-center'>
            <div className='max-w-md mx-auto'>
              <h1 className='text-5xl font-bold'>Adrian Karlén</h1>
              <p className='text-xl'>Web Developer</p>
            </div>
          </Hero.Content>
        </Hero>
        <Footer className='p-10 bg-neutral text-neutral-content '>
          <div className='grid grid-flow-col auto-cols-max gap-4'>
            <a className='link link-hover' href='https://github.com/adriankarlen'>
              <FaGithub />
              @adriankarlen
            </a>
            <a className='link link-hover' href='https://soundcloud.com/jungeladde'>
              <FaSoundcloud />
              @ADK
            </a>
            <a className='link link-hover' href='https://linkedin.com/in/adrian-karlen'>
              <FaLinkedin />
              @adriankarlen
            </a>
          </div>
        </Footer>
      </main>
    </div>
  );
}
