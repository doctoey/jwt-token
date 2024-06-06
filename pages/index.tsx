// pages/index.tsx
import Head from 'next/head';
import JwtDecoder from '../components/JwtDecoder';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>JWT Decoder</title>
        <meta name="description" content="Decode your JWT tokens offline" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <JwtDecoder />
      </main>
    </div>
  );
};

export default Home;
