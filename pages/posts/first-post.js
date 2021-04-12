import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post 무야호~~!</h1>
        <h2>
          <Link href="/">
            <a>Home으로 가자~!!</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
