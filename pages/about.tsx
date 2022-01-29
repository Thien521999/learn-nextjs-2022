// import Header from "@/components/common/header";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import MainLayout from "@/components/layout/main";

const Header = dynamic(() => import("@/components/common/header"), {
  ssr: false,
});

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = useState([]);
  const router = useRouter();

  console.log(router.query?.page);

  console.log("About query", router.query);
  const page = Number(router.query.page);

  useEffect(() => {
    if (!page) return;

    (async () => {
      const response = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
      );
      const data = await response.json();

      setPostList(data.data);
    })();
  }, [page]);

  function handleNextPage() {
    router.push(
      {
        pathname: "/about",
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true } //Khi muon chi render o client
    );
  }

  return (
    <div>
      <h1>About Page</h1>

      <Header />

      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={handleNextPage}>Next page</button>
    </div>
  );
}

AboutPage.Layout = MainLayout;

export async function getStaticProps() {
  console.log("Get static props");

  return {
    props: {},
  };
}

// tsrfce
