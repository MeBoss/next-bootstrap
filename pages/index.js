import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NextJS Web App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button type="button" className="btn btn-outline-primary mt-4">
        Hellos Worlds
      </button>
    </div>
  );
}
