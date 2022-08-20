/* eslint-disable turbo/no-undeclared-env-vars */
// import Link from "next/link";

import { trpc } from "../utils/trpc";
// import { GetServerSideProps } from "next";
// import { API } from "ui";

export default function IndexPage() {
  console.log("index");

  const { data } = trpc.useQuery(["getPosts"]);
  console.log({ data });
  return <div></div>;
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const {
//     data: { result, error },
//   } = await API.get("http://localhost:3001/api/get_posts");

//   return {
//     props: {
//       // posts: result,
//       // error: error,
//     },
//   };
// };
