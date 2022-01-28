import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";
import posts from ".";

export interface PostPageProps {
  post: any;
}

export default function PostDetailPage({ post }: PostPageProps) {
  const router = useRouter();
  console.log("post---", post);

  if (!post) return null;
  return (
    <div>
      <h1>Post detail Page</h1>

      <p>{post?.title}</p>
      <p>{post?.author}</p>
      <p>{post?.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("\nGET STATIC PATHS");
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await response.json();

  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false, //false ra not found
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log("\nGET STATIC PROPS", context.params?.postId);

  const postId = context.params?.postId;
  if (!postId) return { notFound: true };

  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};
