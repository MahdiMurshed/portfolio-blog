/* eslint-disable turbo/no-undeclared-env-vars */
import Link from "next/link";
import { GetServerSideProps } from "next";
import { API } from "ui";

export default function Home({ posts, error }: any) {
  if (error) {
    return;
  }
  console.log({ posts });

  return (
    <div>
      <Link href="/about">
        <a>
          <h2>About Page &rarr;</h2>
          <p>Cypress will test if this link is working.</p>
        </a>
      </Link>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: { result, error },
  } = await API.get("http://localhost:3001/api/get_posts");

  return {
    props: {
      posts: result,
      error: error,
    },
  };
};
