import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: "Code in Life | About",
  description: "About page",
};

const about = () => {
  return (
    <>
      <Navbar page="about" />

      <section className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-4">
        <div className="min-h-screen rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
          <h1 className="text-3xl font-semibold">
            Hi, I'm Michael. I've been working as a software engineer for many years.
          </h1>
          <p className="">
            I began my career as a full-stack engineer, but for the past 10+ years I have focused primarily on front-end development with modern JavaScript. Over the last 7 years, I have worked extensively with React, and also TypeScript, Nodejs, and React Native for around four years. I also have practical experience with .NET and Python, as well as tooling such as Nx and frameworks like Nextjs. In addition to front-end work, I have been involved in DevOps-related areas, using tools like Elasticsearch, Kubernetes, and Grafana for application deployments at iHerb. I also worked with Datadog to monitor network performance - particularly traffic spikes - during large live ticket-sales events at Paciolan.
          </p>
          <p className="">
            I worked as a Senior Software Developer at Phase2, an agency, and served as a technical consultant for Northwell Health. My responsibilities included front-end development (60%), back-end development (30%), and research documentation (10%). For the front-end, mainly using React, React Native, TypeScript, and other tools, I created new features and maintained existing projects. Most back-end work involved database updates through Sequelize migrations and maintaining the existing dpx-service and dpx-message servers. The dpx-service manages service orchestration, including API management and error handling, while the dpx-message provides standardized messaging between projects. Recently, I improved web accessibility for the applications for both VoiceOver for Mac and Narrator for Windows, and migrated the database from MSSQL to PostgreSQL on AlloyDB for Sequelize migrations on the GCP platform. Additionally, I contributed to implementing GCP Vertex AI search with GenAI features, including prompt execution and dynamic content rendering using AI models.
          </p>
          <p className="">
            Before joining Phase2, I worked at Health Gorilla, which offers secure healthcare data solutions, as a front-end engineer. I collaborated closely with product managers, QA teams, and back-end developers. My tech stack included TypeScript, React, Redux, Webpack, and Git. I also led the development of version 2 of the client dashboard based on Module Federation, which I developed myself.
          </p>
          <p className="">
            During my time at iHerb, I was a front-end engineer for an e-commerce company specializing in healthcare products. I was part of the checkout team and worked closely with the UI and QA teams. We used React, Redux, TypeScript, and Next.js for desktop and mobile web applications, deploying updates through Jenkins CI/CD.
          </p>
          <p className="">
            During my time at Paciolan, I was a senior front-end engineer on the web development team. I collaborated closely with e-commerce specialists and QA teams. Our tech stack included vanilla JavaScript, jQuery, React, and I mainly used Python and Node.js to develop a custom continuous integration process for the team’s Git workflow.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default about;
