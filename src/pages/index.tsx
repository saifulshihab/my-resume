import Image from "next/image";
import { Inter } from "next/font/google";
import SectionTitle from "@/components/home/SectionTitle";
import SkillIcon from "@/assets/icons/SkillIcon";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import EmailIcon from "@/assets/icons/EmailIcon";
import HomeIcon from "@/assets/icons/HomeIcon";
import Experience from "@/components/home/Experience";
import Education from "@/components/home/Education";
import Project from "@/components/home/Project";
import Skill from "@/components/home/Skill";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen w-full sm:w-[900px] m-auto bg-neutral-950">
      <div className="flex h-screen">
        <div className="relative w-[30%] h-full flex bg-neutral-900 shadow">
          <div className="w-[40%] h-full bg-primary border-l-2 border-primary"></div>
          <div className="w-[60%] h-full border-l-2 border-gray-300" />
          <div className="absolute inset-0 h-[90%] bg-neutral-900 m-auto py-5 px-5 border-l-2 border-primary">
            <div className="h-52 relative m-auto">
              <Image
                fill
                src="/dp.jpg"
                alt="dp"
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col py-4">
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-primary uppercase tracking-wider">
                  Saiful Islam
                </p>
                <p className="text-lg tracking-wide text-gray-300">
                  Software Engineer
                </p>
                <div className="flex items-center mt-1 gap-2">
                  <a
                    href="https://github.com/saifulshihab"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="devicon-github-original"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/saifulshihab"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="devicon-linkedin-plain colored"></i>
                  </a>
                  <a
                    href="https://facebook.com/isishihab"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="devicon-facebook-plain colored"></i>
                  </a>
                  <a
                    href="https://www.behance.net/saifulis1am"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="devicon-behance-plain colored"></i>
                  </a>
                </div>
              </div>
              <div className="mt-12 flex flex-col gap-10">
                {/* contact */}
                <div className="flex flex-col gap-4 text-gray-300">
                  <SectionTitle title="Contact" />
                  <div className="flex flex-col gap-2 text-sm font-light">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4">
                        <PhoneIcon />
                      </div>
                      <p>+880 1782455150</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4">
                        <EmailIcon />
                      </div>
                      <p className="font-thin">saifulshihab29@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4">
                        <HomeIcon />
                      </div>
                      <p className="font-thin">Nikunjo-2, Dhaka 1207</p>
                    </div>
                  </div>
                </div>
                {/* skills */}
                <div className="flex flex-col gap-4">
                  <SectionTitle title="Skills" />
                  <div className="flex items-center flex-wrap justify-center gap-5">
                    <Skill
                      name="JavaScript"
                      icon="devicon-javascript-plain colored"
                    />
                    <Skill
                      name="TypeScript"
                      icon="devicon-typescript-plain colored"
                    />
                    <Skill
                      name="React.js"
                      icon="devicon-react-original colored"
                    />

                    <Skill name="Next.js" icon="devicon-nextjs-line" />
                    <Skill name="Node.js" icon="devicon-nodejs-plain colored" />
                    <Skill
                      name="Express"
                      icon="devicon-express-original colored"
                    />
                    <Skill
                      name="GraphQL"
                      icon="devicon-graphql-plain colored"
                    />
                    <Skill
                      name="MongoDB"
                      icon="devicon-mongodb-plain colored"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%] bg-neutral-950 p-5 text-gray-300 overflow-y-scroll hideScrollBar">
          <div className="w-full h-full flex flex-col gap-6">
            {/* experience */}
            <div className="flex flex-col gap-3">
              <SectionTitle title="Experience" />
              <Experience
                position="Front-End Engineer"
                from="Dec 2022"
                company="Model-Prime."
                roles={[
                  <>
                    Building model-prime&apos;s web application using React.js &
                    Tailwind CSS
                  </>,
                ]}
              />
              <Experience
                position="Software Developer"
                from="Sept 2021"
                to="Sept 2023"
                company="Headless Technologies Ltd."
                roles={[
                  <>
                    Creating reusable components using React.js, Ant Design &
                    Styled-Components. Designing responsive web pages.
                  </>,
                  <>
                    Creating RESTful APIs using Node.js, Express, and MongoDB.
                  </>,
                ]}
              />
              <Experience
                position="Software Engineer"
                from="Apr 2021"
                to="Jun 2021"
                company="Sharespot"
                roles={[
                  <>
                    Design, and develop project business logic and functionality.
                  </>,
                  <>
                    Develop fully responsive web application using React &amp; Chakra UI.
                  </>,
                  <>Back-end development with Node.js Express and MongoDB.</>,
                  <>
                    Troubleshoot, debug, and add/edit new or existing features.
                  </>,
                ]}
              />
            </div>
            {/* education */}
            <div className="flex flex-col gap-3">
              <SectionTitle title="Education" />
              <Education
                degree="BSc in Software Engineering"
                institute="Daffodil International University"
                from="2017"
                to="2021"
                desc="CGPA: 3.82 out of 4"
              />
              <Education
                degree="Higher Secondary Certificate"
                institute="Hajiganj Model University College"
                from="2014"
                to="2016"
                desc="GPA: 4.75 out of 5"
              />
            </div>
            {/* projects */}
            <div className="flex flex-col gap-3 text-justify ">
              <SectionTitle title="Projects" />
              <Project
                name="Card 32"
                desc="A multiplayer online card game."
                stack="React.js, Tailwind CSS, Node.js, Socket.io, TypeScript"
                link="https://card-32-dev.netlify.app/"
              />
              <Project
                name="DevForum"
                desc="An online platform for software developers where they can
              create professional profiles, build portfolios, can bid on
              freelance projects & get hired by job recruiters.
              (University final year project)"
                stack="React.js, Tailwind CSS, Redux, Node.js, Express, MongoDB"
                link="https://devforum.netlify.app"
              />
              <Project
                name="Trello Board Clone"
                desc="Trello board clone with some of its basic functionality such
                as create board, card, drop n drag."
                stack="React.js, Tailwind CSS, GraphQL, PostgreSQL"
                link="https://github.com/saifulshihab/fullstack-trello-clone"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
