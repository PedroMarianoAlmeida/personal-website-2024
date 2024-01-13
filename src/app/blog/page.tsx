import Link from "next/link";

const BlogPage = () => {
  return (
    <main className="px-3 mt-3">
      <h1>Blog Posts</h1>
      <h2>Check out my articles!</h2>
      <ul>
        <li>
          <Link href="/blog/handling-with-promises">
            Handling with promises (with code Snipped)
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default BlogPage;
