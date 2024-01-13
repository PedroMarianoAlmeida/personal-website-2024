import Link from "next/link";

const BlogPage = () => {
  return (
    <main>
      <h1>Blogs</h1>
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
