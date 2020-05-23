import Head from "next/head";
import PersonalInfo from "../components/PersonalInfo";
import Experience from "../components/Experience";
import Group from "../components/Group";
import Linguistics from "../components/Linguistics";
import Layout from "../components/Layout";
import Hobbies from "../components/Hobbies";

const Home = () => (
  <>
    <Head>
      <title>Cristian Iacob</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet" />
    </Head>

    <Layout>
      <PersonalInfo />
      <Experience />
      <Linguistics />
      <Hobbies />
    </Layout>
  </>
);

export default Home;
