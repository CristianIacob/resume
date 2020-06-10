import Head from "next/head";
import PersonalInfo from "../components/PersonalInfo";
import Experience from "../components/Experience";
import Linguistics from "../components/Linguistics";
import Layout from "../components/Layout";
import Hobbies from "../components/Hobbies";
import Education from "../components/Education";
import resume from "../public/resume.json";

/**
 * TODO: Need a link to side-projects somewhere
 */

function Home() {
  const { personal, work, education, languages, self } = resume;
  return (
    <>
      <Head>
        <title>Cristian Iacob</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      <Layout>
        <section className="flex flex-col">
          <PersonalInfo data={personal} />
        </section>
        <section className="flex flex-col">
          <Experience data={work} />
          <Education data={education} />
          <Linguistics data={languages} />
          <Hobbies data={self} />
        </section>
      </Layout>
    </>
  );
}

export default Home;
