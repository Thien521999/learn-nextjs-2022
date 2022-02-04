import { useAuth } from "@/hooks/use-auth";
import { LayoutProps } from "@/models/index";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Auth from "../common/auth";

export default function AdminLayout({ children }: LayoutProps) {
  const router = useRouter();
  const { profile, logout } = useAuth();

  async function handleLogoutClick() {
    try {
      await logout();
      console.log("redirect to login page");
      router.push("/login");
    } catch (error) {
      console.log("failed to logout", error);
    }
  }

  return (
    <Auth>
      <h1>Admin layout</h1>
      <div>Sidebar</div>

      <p>Profile : {JSON.stringify(profile)}</p>

      <div>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{children}</div>
    </Auth>
  );
}
