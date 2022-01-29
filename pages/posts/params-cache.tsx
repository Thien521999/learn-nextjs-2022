import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export interface ParamsCacheProps {
  query: any;
  post: any;
}

export default function ParamsCache({ query, post }: ParamsCacheProps) {
  const router = useRouter();
  const [seconds, setSeconds] = useState(0);
  console.log(post);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((x: any) => {
        if (x > 60) clearInterval(intervalId);

        return x + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Params Cache</h1>

      <p>Time: {seconds}s</p>

      <h2>Post Detail</h2>
      <p>{post?.title}</p>
      <p>{post?.author}</p>
      <p>{post?.description}</p>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log("hello");

  context.res.setHeader("Cache-Control", "s-maxage=5");

  await new Promise((res) => setTimeout(res, 3000));

  const postId = context.query.postId;
  if (!postId) return { props: { query: context.query } };

  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );
  const data = await response.json();

  return {
    props: {
      query: context.query,
      post: data,
    },
  };
}
