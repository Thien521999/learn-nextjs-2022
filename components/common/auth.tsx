import { useAuth } from "@/hooks/index";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
// const router from

export interface AuthProps {
  children: any;
}

export default function Auth({ children }: AuthProps) {
  const router = useRouter();
  const { profile, firstLoading } = useAuth();

  useEffect(() => {
    if (!firstLoading && !profile?.username) router.push("/login");
  }, [router, profile, firstLoading]);

  if (!profile?.username) {
    return <p>Loading...</p>;
  }

  return <div>{children}</div>;
}
