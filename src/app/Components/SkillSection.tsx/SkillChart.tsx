"use client";

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

const data: {
  like: number;
  know: number;
  label: string;
  category: Category;
}[] = [
  { like: 100, know: 100, label: "ChatGPT", category: "AI Tools" },
  { like: 100, know: 80, label: "ChatGPT API", category: "AI Tools" },
  {
    like: 60,
    know: 80,
    label: "Github Copilot",
    category: "AI Tools",
  },
  { like: 50, know: 90, label: "Midjourney", category: "AI Tools" },
  { like: 70, know: 90, label: "v0.dev", category: "AI Tools" },
  { like: 80, know: 90, label: "Dall·e", category: "AI Tools" },

  { like: 90, know: 80, label: "Node", category: "Backend and Cloud" },
  {
    like: 100,
    know: 70,
    label: "Prisma",
    category: "Backend and Cloud",
  },
  {
    like: 70,
    know: 40,
    label: "GraphQL",
    category: "Backend and Cloud",
  },
  {
    like: 80,
    know: 80,
    label: "Rest API",
    category: "Backend and Cloud",
  },
  
  {
    like: 40,
    know: 40,
    label: "Authentication",
    category: "Backend and Cloud",
  },
  { like: 100, know: 30, label: "AWS", category: "Backend and Cloud" },
  {
    like: 80,
    know: 10,
    label: "Terraform",
    category: "Backend and Cloud",
  },
  {
    like: 70,
    know: 70,
    label: "Firebase",
    category: "Backend and Cloud",
  },
  {
    like: 100,
    know: 40,
    label: "Docker",
    category: "Backend and Cloud",
  },
  {
    like: 70,
    know: 60,
    label: "Google Auth",
    category: "Backend and Cloud",
  },

  {
    like: 80,
    know: 80,
    label: "Clean Code",
    category: "Code Concepts",
  },
  { like: 60, know: 50, label: "TDD", category: "Code Concepts" },
  { like: 60, know: 100, label: "Go Horse", category: "Code Concepts" },
  { like: 90, know: 70, label: "Refactoring", category: "Code Concepts" },
  {
    like: 100,
    know: 60,
    label: "Software Architecture",
    category: "Code Concepts",
  },

  {
    like: 70,
    know: 70,
    label: "Technical Writing",
    category: "Professional Skills",
  },
  {
    like: 100,
    know: 90,
    label: "Video Tutorial",
    category: "Professional Skills",
  },
  {
    like: 70,
    know: 50,
    label: "Scrum",
    category: "Professional Skills",
  },
  {
    like: 90,
    know: 90,
    label: "Kanbam",
    category: "Professional Skills",
  },
  {
    like: 20,
    know: 50,
    label: "Jira",
    category: "Professional Skills",
  },
  {
    like: 100,
    know: 80,
    label: "Teaching",
    category: "Professional Skills",
  },
  {
    like: 100,
    know: 70,
    label: "Excel",
    category: "Professional Skills",
  },
  {
    like: 80,
    know: 75,
    label: "Public Speaking",
    category: "Professional Skills",
  },
  {
    like: 100,
    know: 100,
    label: "Communication",
    category: "Professional Skills",
  },

  {
    like: 80,
    know: 95,
    label: "JavaScript",
    category: "Programming Language / Framework",
  },
  {
    like: 100,
    know: 75,
    label: "TypeScript",
    category: "Programming Language / Framework",
  },
  {
    like: 100,
    know: 100,
    label: "React",
    category: "Programming Language / Framework",
  },
  {
    like: 20,
    know: 50,
    label: "Redux",
    category: "Programming Language / Framework",
  },
  {
    like: 100,
    know: 85,
    label: "Next",
    category: "Programming Language / Framework",
  },
  {
    like: 40,
    know: 80,
    label: "React Native",
    category: "Programming Language / Framework",
  },
  {
    like: 70,
    know: 30,
    label: "Twig",
    category: "Programming Language / Framework",
  },
  {
    like: 70,
    know: 40,
    label: "Craft CMS",
    category: "Programming Language / Framework",
  },
  {
    like: 80,
    know: 40,
    label: "Ruby on Rails",
    category: "Programming Language / Framework",
  },
  {
    like: 100,
    know: 30,
    label: "Arduino",
    category: "Programming Language / Framework",
  },

  {
    like: 100,
    know: 65,
    label: "Jest",
    category: "Testing and Development Tools",
  },
  {
    like: 100,
    know: 50,
    label: "Cypress",
    category: "Testing and Development Tools",
  },
  {
    like: 75,
    know: 65,
    label: "React Testing Library",
    category: "Testing and Development Tools",
  },
  {
    like: 70,
    know: 55,
    label: "Detox",
    category: "Testing and Development Tools",
  },
  {
    like: 70,
    know: 80,
    label: "Git",
    category: "Testing and Development Tools",
  },
  {
    like: 100,
    know: 80,
    label: "Github",
    category: "Testing and Development Tools",
  },
  {
    like: 90,
    know: 50,
    label: "Gitlab",
    category: "Testing and Development Tools",
  },
  {
    like: 50,
    know: 80,
    label: "Conventional Commits",
    category: "Testing and Development Tools",
  },
  {
    like: 30,
    know: 30,
    label: "Storybook",
    category: "Web Development",
  },
  { like: 40, know: 60, label: "CSS", category: "Web Development" },
  { like: 70, know: 80, label: "HTML", category: "Web Development" },
  {
    like: 20,
    know: 80,
    label: "Tailwind",
    category: "Web Development",
  },
  {
    like: 10,
    know: 85,
    label: "Bootstrap",
    category: "Web Development",
  },
  { like: 100, know: 90, label: "MUI", category: "Web Development" },
  {
    like: 10,
    know: 20,
    label: "Theme UI",
    category: "Web Development",
  },
  { like: 70, know: 50, label: "SCSS", category: "Web Development" },
  {
    like: 90,
    know: 50,
    label: "Creative Design",
    category: "Web Development",
  },
  { like: 100, know: 80, label: "Figma", category: "Web Development" },
  {
    like: 100,
    know: 50,
    label: "Google Maps",
    category: "Web Development",
  },
  {
    like: 100,
    know: 70,
    label: "Google Lighthouse",
    category: "Web Development",
  },
];

const SkillChart = ({ category }: { category: Category }) => {
  const dataFiltered = data.filter((item) => item.category === category);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart
        margin={{
          top: 50,
          right: 60,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis type="number" dataKey="like" name="I like">
          <Label value="How much I like" offset={-4} position="insideBottom" />
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
  );
};

export default SkillChart;
