"use client";
import { useState } from "react";

import SkillChart from "./SkillChart";

export type Category =
  | "Programming Language / Framework"
  | "Backend and Cloud"
  | "Code Concepts"
  | "Professional Skills"
  | "Testing and Development Tools"
  | "AI Tools"
  | "Web Development";

const categories: Category[] = [
  "Programming Language / Framework",
  "Backend and Cloud",
  "Code Concepts",
  "Professional Skills",
  "Testing and Development Tools",
  "AI Tools",
  "Web Development",
];

const SkillSection = () => {
  const [category, setCategory] = useState<Category>(
    "Programming Language / Framework"
  );
  return (
    <section className="flex flex-col gap-3 items-center" id="skills">
      <h2 className="text-2xl font-bold">Skills</h2>
      <select
        className="select select-bordered w-full max-w-xs"
        value={category}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setCategory(e.target.value as Category)
        }
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <SkillChart category={category} />
    </section>
  );
};

export default SkillSection;
