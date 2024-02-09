import { Navigation } from "../components/nav";
import React from "react";

const page = () => {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Get to know me
          </h2>
          <p className="mt-4 text-zinc-400">
            Hi again! Since you're here, I'm guessing you want to know a little
            about me. Alright, if you insist. I'm a Software Developer
            specializing in frontend development. I enjoy creating engaging and
            user-friendly experiences on the web. Fluent in TypeScript and
            React, I strive to deliver clean and accessible code while keeping
            the end user in mind. Collaboration is where I truly shine. I thrive
            when bouncing ideas off others and working together to solve
            problems. And when I'm not immersed in the world of tech, you'll
            probably find me buried in a good book of African literature or
            glued to the screen, indulging in some sci-fi movie marathon. Oh,
            and here's a little secret: I actually made a career switch from
            Medicine to Software Development! But let's keep that between us 😉
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Stack
        </h2>

        <ul>
          <li className="mt-4 text-zinc-400 list-disc ml-4">
            <span className="border-b">Languages and Frameworks/Tools:</span>
            <ul className="list-disc mt-4">
              <span className="mt-4">
                TypeScript, JavaScript, React, Next Js, SCSS, MUI, Styled
                components, Tailwind CSS, HTML, RTK, Python, Git.
              </span>
            </ul>
          </li>
          <li className="ml-4 list-disc mt-4 text-zinc-400">
            <span className="border-b">Industry knowledge:</span>
            <ul className="list-disc mt-4">
              <span className="mt-4">
                Data structures abd algorithm analysis, Agile methodology
              </span>
            </ul>
          </li>
        </ul>

        <div className="hidden w-full h-px md:block bg-zinc-800" />
      </div>
    </div>
  );
};

export default page;
