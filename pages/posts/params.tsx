import { useRouter } from "next/router";
import React from "react";

export interface ParamsPageProps {}

export default function Params(props: ParamsPageProps) {
  const router = useRouter();

  return (
    <div>
      <h1>Params Page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}

export async function getServerSideProps() {
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  return {
    props: {},
  };
}
