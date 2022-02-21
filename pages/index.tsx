import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div className="h-screen dark:bg-slate-600 bg-white">
      <Head>
        <title>React Demos</title>
        <meta name="description" content="Demos showcase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar page="Regalia" />
      <main className="flex flex-col">
        <h1 className="text-3xl md:text-4xl font-medium mb-2 self-center p-6">
          Homepage under construction, you can head to{' '}
          <span className="text-green-300">Projects</span> tab to see the
          current demos.
        </h1>
      </main>

      <footer className="flex flex-1 pt-8 pb-8 border-t-2 justify-center align-center w-screen bottom-0 left-0 fixed ">
        Powered by <p className=" text-blue-400 font-bold"> NextJS </p> &
        <p className=" text-blue-400 font-bold"> React </p>
      </footer>
    </div>
  );
};

export default Home;
