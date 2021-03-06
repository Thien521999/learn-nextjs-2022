// import Header from "@/components/common/header";
import AdminLayout from "@/components/layout/admin";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Header = dynamic(() => import("@/components/common/header"), {
  ssr: false,
});

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = useState([]);
  const router = useRouter();

  // console.log(router.query?.page);

  // console.log("About query", router.query);
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
    <Box>
      <Typography component="h1" variant="h3" color="primary.main">
        About Page
      </Typography>

      <Header />

      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={handleNextPage}>Next page</button>
    </Box>
  );
}

AboutPage.Layout = AdminLayout;

export async function getStaticProps() {
  console.log("Get static props");

  return {
    props: {},
  };
}

// tsrfce
