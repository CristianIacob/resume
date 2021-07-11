import Head from "next/head";
import dynamic from "next/dynamic";
const Experience = dynamic(() => import("../components/Experience"));
const PersonalInfo = dynamic(() => import("../components/PersonalInfo"));
const Linguistics = dynamic(() => import("../components/Linguistics"));
const Hobbies = dynamic(() => import("../components/Hobbies"));
const Education = dynamic(() => import("../components/Education"));
const Skills = dynamic(() => import("../components/Skills"));
import Layout from "../components/Layout";
import resume from "../public/resume.json";

/**
 * TODO: Need a link to side-projects somewhere
 */

function Home() {
  const { personal, work, education, languages, skills, self } = resume;
  return (
    <>
      <Head>
        <title>{personal.name}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Resume page of Cristian Iacob. 
          Displaying the overall work experience, skills and other relevant pieces of information for the hiring process."
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css?family=Open+Sans:wght@300;400&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" type="text/css" />
        </noscript>
      </Head>
      <Layout>
        <section className="flex flex-col lg:mx-10 lg:pt-4 lg:w-1/4 xl:w-1/5">
          <PersonalInfo data={personal} />
        </section>
        <section className="flex flex-col px-6 lg:w-3/4 xl:w-4/5 divide-y divide-gray-300">
          <Experience data={work} />
          <Skills data={skills} />
          <Education data={education} />
          <Linguistics data={languages} />
          <Hobbies data={self} />
        </section>
      </Layout>
    </>
  );
}

export default Home;
