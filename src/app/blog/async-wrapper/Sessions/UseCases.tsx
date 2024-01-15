import Link from "next/link";

const UseCases = () => (
  <>
    <h2>Use Case</h2>
    <p>
      This code is being used on my{" "}
      <Link
        href="https://hashtag-thumbnail-generator.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        SEO HELPER
      </Link>
      ... there I am using with{" "}
      <Link
        href="https://github.com/PedroMarianoAlmeida/hashtag-thumbnail-generator/blob/main/src/server/actions/userCount.ts"
        target="_blank"
        rel="noopener noreferrer"
      >
        Prisma
      </Link>{" "}
      and{" "}
      <Link
        href="https://github.com/PedroMarianoAlmeida/hashtag-thumbnail-generator/blob/main/src/server/actions/ai.tsx"
        target="_blank"
        rel="noopener noreferrer"
      >
        OpenAI lib
      </Link>
      , but will work for any async function (fetch, axios, etc)
    </p>
  </>
);

export default UseCases;
