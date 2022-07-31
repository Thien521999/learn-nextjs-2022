import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import React from "react";

export interface PostListPageProps {
  posts: any[];
}

export default function PostListPage({ posts }: PostListPageProps) {
  return (
    <div>
      <h1>Post List Page</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await response.json();

  return {
    props: {
      posts: data?.data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  };
};

// ~~~getStaticProps~~~~
// stay: server-side(chay o phia server)
// run : build-time
// trong qua trinh dev, moi lan request thi luon chay getStaticProps,
// con neu da buid tren production thi no chi chay ham nay khi build
