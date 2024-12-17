"use client";
import { ReactNode } from "react";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  ResponsiveContainer,
  Label,
} from "recharts";
import { Category } from ".";
import Table from "../Table";

const data: {
  like: number;
  know: number;
  label: string;
  category: Category;
  description: ReactNode;
}[] = [
  {
    like: 100,
    know: 100,
    label: "ChatGPT",
    category: "AI Tools",
    description:
      "I leverage ChatGPT daily to debug, explain, and improve code. A recent use case includes fixing broken pages during a Craft CMS 4 migration.",
  },
  {
    like: 100,
    know: 80,
    label: "OpenAI API",
    category: "AI Tools",
    description:
      "I integrate OpenAI API in several projects, using the  text, image, JSON and Zod Object as response",
  },
  {
    like: 60,
    know: 80,
    label: "Github Copilot",
    category: "AI Tools",
    description:
      "I primarily use GitHub Copilot for autocomplete within VSCode, while relying on ChatGPT for more comprehensive tasks.",
  },
  {
    like: 50,
    know: 90,
    label: "Midjourney",
    category: "AI Tools",
    description:
      "I occasionally use Midjourney, although I prefer web-based tools over Discord for interaction.",
  },
  {
    like: 70,
    know: 90,
    label: "v0.dev",
    category: "AI Tools",
    description:
      "I utilize v0.dev for building layouts in projects like SEO Helper. While not highly creative, it delivers functional designs efficiently.",
  },
  {
    like: 80,
    know: 90,
    label: "Dall·e",
    category: "AI Tools",
    description:
      "Dall·e was the first AI tool I adopted. It is now seamlessly integrated into ChatGPT and OpenAI API, and I continue using it for projects, including generating a Christmas gift image for my wife.",
  },
  {
    like: 100,
    know: 70,
    label: "Prisma",
    category: "Backend and Cloud",
    description:
      "Prisma is my preferred choice for database integration in projects like SEO Helper and No Border Jobs.",
  },
  {
    like: 100,
    know: 90,
    label: "Next Auth",
    category: "Backend and Cloud",
    description:
      "I rely on NextAuth for implementing authentication in SEO Helper and No Border Jobs due to its simplicity and efficiency.",
  },
  {
    like: 70,
    know: 60,
    label: "Google Auth",
    category: "Backend and Cloud",
    description:
      "I integrate Google Auth as the primary provider with NextAuth for user authentication in my projects.",
  },
  {
    like: 40,
    know: 40,
    label: "Authentication",
    category: "Backend and Cloud",
    description:
      "I generally follow established project patterns for secure authentication. For side projects, I prefer using NextAuth.",
  },
  {
    like: 90,
    know: 80,
    label: "Node",
    category: "Backend and Cloud",
    description:
      "I use Node.js with frameworks like Express for building APIs and database integrations. However, I prefer Next.js for frontend-focused projects.",
  },
  {
    like: 70,
    know: 40,
    label: "GraphQL",
    category: "Backend and Cloud",
    description:
      "I have experience consuming GraphQL APIs, particularly with Strapi CMS and Gatsby.",
  },
  {
    like: 80,
    know: 80,
    label: "Rest API",
    category: "Backend and Cloud",
    description:
      "I am proficient in building and consuming REST APIs using tools like Fetch and Axios.",
  },
  {
    like: 100,
    know: 30,
    label: "AWS",
    category: "Backend and Cloud",
    description:
      "I am preparing for the AWS Certified Cloud Practitioner exam and have hands-on experience with EC2 instances and S3 buckets.",
  },
  {
    like: 80,
    know: 10,
    label: "Terraform",
    category: "Backend and Cloud",
    description:
      "I am actively studying Terraform for the Associate certification and exploring existing Terraform files in my work environment.",
  },
  {
    like: 70,
    know: 70,
    label: "Firebase",
    category: "Backend and Cloud",
    description:
      "I have used Firebase for a few projects but generally prefer Prisma for database solutions.",
  },
  {
    like: 100,
    know: 40,
    label: "Docker",
    category: "Backend and Cloud",
    description:
      "I consume Docker images regularly, but I have not yet created custom images from scratch.",
  },

  {
    like: 80,
    know: 80,
    label: "Clean Code",
    category: "Code Concepts",
    description:
      "Having read the Clean Code book, I consistently apply its principles to write maintainable and readable code.",
  },
  {
    like: 60,
    know: 50,
    label: "TDD",
    category: "Code Concepts",
    description:
      "I have practiced Test-Driven Development in projects, appreciating the confidence it brings to code quality despite the added upfront effort.",
  },
  {
    like: 60,
    know: 100,
    label: "Go Horse",
    category: "Code Concepts",
    description:
      "I have applied this approach in specific scenarios but prefer avoiding it due to long-term maintainability concerns.",
  },
  {
    like: 90,
    know: 70,
    label: "Refactoring",
    category: "Code Concepts",
    description:
      "Refactoring is one of my favorite tasks, as it improves code structure and maintainability.",
  },
  {
    like: 100,
    know: 60,
    label: "Software Architecture",
    category: "Code Concepts",
    description:
      "I have worked across various project architectures and make an effort to understand their underlying design principles.",
  },

  {
    like: 70,
    know: 70,
    label: "Technical Writing",
    category: "Professional Skills",
    description:
      "I have written articles and documentation as needed. While not a professional writer, I can effectively communicate technical concepts.",
  },
  {
    like: 100,
    know: 90,
    label: "Video Tutorial",
    category: "Professional Skills",
    description:
      "I have recorded tutorials for my YouTube channel and for validating tasks. Non-technical audiences typically find these very helpful.",
  },
  {
    like: 70,
    know: 50,
    label: "Scrum",
    category: "Professional Skills",
    description:
      "Scrum has been part of the workflow in most of my professional roles.",
  },
  {
    like: 90,
    know: 90,
    label: "Kanbam",
    category: "Professional Skills",
    description:
      "I frequently use Kanban boards with various tools to manage tasks efficiently.",
  },
  {
    like: 20,
    know: 50,
    label: "Jira",
    category: "Professional Skills",
    description: "Used in a few jobs, but I definitely prefer Trello",
  },
  {
    like: 90,
    know: 50,
    label: "Trello",
    category: "Professional Skills",
    description:
      "Trello is my preferred tool for implementing Kanban workflows.",
  },
  {
    like: 100,
    know: 50,
    label: "Miro",
    category: "Professional Skills",
    description:
      "The best tool to create a diagram or a mind map (but it is paid)",
  },
  {
    like: 80,
    know: 85,
    label: "Canva",
    category: "Professional Skills",
    description:
      "I used to create some media content, a good free tool for design",
  },
  {
    like: 20,
    know: 50,
    label: "draw io",
    category: "Professional Skills",
    description: "I used to create some diagrams, a good free tool",
  },
  {
    like: 100,
    know: 80,
    label: "Teaching",
    category: "Professional Skills",
    description:
      "I have experience teaching classes and enjoy sharing knowledge with others.",
  },
  {
    like: 100,
    know: 70,
    label: "MS Office",
    category: "Professional Skills",
    description:
      "Used in all my jobs before became a developer. I am specially good in Excel (maybe my first contact with programming)",
  },
  {
    like: 80,
    know: 75,
    label: "Public Speaking",
    category: "Professional Skills",
    description: "I already make some presentations (as a musician)",
  },
  {
    like: 100,
    know: 100,
    label: "Communication",
    category: "Professional Skills",
    description: "The most important skill for a developer",
  },

  {
    like: 80,
    know: 95,
    label: "JavaScript",
    category: "Programming Language / Framework",
    description: "It is my primary programming language",
  },
  {
    like: 100,
    know: 75,
    label: "TypeScript",
    category: "Programming Language / Framework",
    description: "The best option for modern web development",
  },
  {
    like: 100,
    know: 100,
    label: "React",
    category: "Programming Language / Framework",
    description: "My primary framework",
  },
  {
    like: 100,
    know: 85,
    label: "Next",
    category: "Programming Language / Framework",
    description:
      "Tool that I am currently working with, and I use in all my Side Projects",
  },
  {
    like: 20,
    know: 50,
    label: "Redux",
    category: "Programming Language / Framework",
    description: "I already use in some projects, but I prefer React Context",
  },
  {
    like: 40,
    know: 80,
    label: "React Native",
    category: "Programming Language / Framework",
    description: "I already use professionally, but not at the moment",
  },
  {
    like: 70,
    know: 30,
    label: "Twig",
    category: "Programming Language / Framework",
    description:
      "I am using at the moment. It is exciting for me learn this new framework so different from React and be able to deliver the tasks!",
  },
  {
    like: 70,
    know: 40,
    label: "Craft CMS",
    category: "Programming Language / Framework",
    description:
      "I am using at the moment (with the Twig). It is exciting for me learn!",
  },
  {
    like: 80,
    know: 40,
    label: "Ruby on Rails",
    category: "Programming Language / Framework",
    description: "I already use professionally, but not at the moment",
  },
  {
    like: 100,
    know: 30,
    label: "Arduino",
    category: "Programming Language / Framework",
    description:
      "I spend a few years in a personal project and I am grateful for the knowledge",
  },

  {
    like: 100,
    know: 65,
    label: "Jest",
    category: "Testing and Development Tools",
    description: "I use in a lot of projects, for unit and integration tests",
  },
  {
    like: 100,
    know: 80,
    label: "Turborepo",
    category: "Testing and Development Tools",
    description:
      "Excellent approach to decouple reusable code to be used in several projects",
  },
  {
    like: 100,
    know: 50,
    label: "Cypress",
    category: "Testing and Development Tools",
    description: "I use in a few projects, for end-to-end tests",
  },
  {
    like: 75,
    know: 65,
    label: "React Testing Library",
    category: "Testing and Development Tools",
    description: "I use in a few of projects, for unit and integration tests",
  },
  {
    like: 70,
    know: 55,
    label: "Detox",
    category: "Testing and Development Tools",
    description:
      "I use it in a few projects (the Reactive Native ones), it is a good Cypress replacer for mobile",
  },
  {
    like: 70,
    know: 80,
    label: "Git",
    category: "Testing and Development Tools",
    description:
      "I use everyday (usually the Github Desktop for 99% of my problems, but I can handle with the terminal when is needed)",
  },
  {
    like: 100,
    know: 80,
    label: "Github",
    category: "Testing and Development Tools",
    description: "I use in my Side Projects and a few of my jobs",
  },
  {
    like: 90,
    know: 50,
    label: "Gitlab",
    category: "Testing and Development Tools",
    description:
      "I used in a few of my jobs. I am a little more with Github... but it is just a matter of figure out where is the buttons to do the same things",
  },
  {
    like: 50,
    know: 80,
    label: "Conventional Commits",
    category: "Testing and Development Tools",
    description:
      "I use in a few projects (including this one)... It is OK for me to use it if all the team is using",
  },
  {
    like: 30,
    know: 30,
    label: "Storybook",
    category: "Web Development",
    description: "I like to consume, but not to create =/",
  },
  {
    like: 40,
    know: 60,
    label: "CSS",
    category: "Web Development",
    description: "I feel pretty confident using it, but sometimes I struggle",
  },
  {
    like: 70,
    know: 80,
    label: "HTML",
    category: "Web Development",
    description:
      "It is part of my daily job, sometime I do not know the best semantic tags but I can handle",
  },
  {
    like: 20,
    know: 80,
    label: "Tailwind",
    category: "Web Development",
    description:
      "I am using in my Side Projects, specially because of the plugins. The code is not so clean, but it is fast to develop",
  },
  {
    like: 100,
    know: 100,
    label: "DaisyUI",
    category: "Web Development",
    description:
      "I feel that is a 'bootstrap' for Tailwind, I am using in my Side Projects",
  },
  {
    like: 70,
    know: 85,
    label: "Bootstrap",
    category: "Web Development",
    description:
      "My first CSS framework, I use in a few projects (I am using currently in one project on my job)",
  },
  {
    like: 100,
    know: 90,
    label: "MUI",
    category: "Web Development",
    description:
      "I use in my current job and was my loved tool in the past. Has beautiful components and a good documentation. But needs to be Client Side Rendered",
  },
  {
    like: 10,
    know: 20,
    label: "Theme UI",
    category: "Web Development",
    description:
      "I already used in one project. It is just one more CSS framework",
  },
  {
    like: 70,
    know: 100,
    label: "Styled Components",
    category: "Web Development",
    description:
      "I already used in a few projects (professionally and Side Projects). I stopped using because I was struggling to integrate well with NextJS (and it is Client Side rendered)",
  },
  {
    like: 70,
    know: 50,
    label: "SCSS",
    category: "Web Development",
    description:
      "A used in a few projects, it is better than vanilla CSS and looks like the more organized code. But keep the styles far from the component",
  },
  {
    like: 90,
    know: 50,
    label: "Creative Design",
    category: "Web Development",
    description:
      "I love to see and consume, but I am not good to create myself (this is why I relied on MUI, Daisy or AI tools to build an acceptable layout by myself)",
  },
  {
    like: 100,
    know: 80,
    label: "Figma",
    category: "Web Development",
    description: "I can consume well, but I am not good creating",
  },
  {
    like: 100,
    know: 50,
    label: "Google Maps",
    category: "Web Development",
    description: "I already use in a few side projects",
  },
  {
    like: 100,
    know: 70,
    label: "Google Lighthouse",
    category: "Web Development",
    description: "I like to check my websites and improve the score",
  },
];

const tableHeaders = [
  { key: "label", value: "Name" },
  { key: "description", value: "Description" },
  {
    key: "likePercentage",
    value: <div className="sm:text-base text-sm min-w-10">I like</div>,
  },
  {
    key: "knowPercentage",
    value: <div className="sm:text-base text-sm min-w-14">I know</div>,
  },
];

const SkillChart = ({ category }: { category: Category }) => {
  const dataFiltered = data
    .filter((item) => item.category === category)
    .map(({ description, know, label, like }) => ({
      description,
      label,
      know,
      like,
      knowPercentage: <div className="text-center">{know}%</div>,
      likePercentage: <div className="text-center">{like}%</div>,
    }));

  return (
    <div>
      <ResponsiveContainer
        width="100%"
        height={400}
        className="hidden sm:block"
      >
        <ScatterChart
          margin={{
            top: 50,
            right: 60,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis type="number" dataKey="like" name="I like">
            <Label
              value="How much I like"
              offset={-4}
              position="insideBottom"
            />
          </XAxis>

          <YAxis
            type="number"
            dataKey="know"
            label={{
              value: "My knowledge",
              angle: -90,
              position: "insideLeft",
            }}
          />

          <Tooltip cursor={{ strokeDasharray: "3 3" }} />

          <Scatter name="Technology" data={dataFiltered} shape={<></>}>
            <LabelList dataKey="label" />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
      <Table columnHeaders={tableHeaders} rows={dataFiltered} />
    </div>
  );
};

export default SkillChart;
