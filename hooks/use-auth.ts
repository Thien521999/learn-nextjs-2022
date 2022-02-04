import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";
import { authApi } from "../api-client";

export function useAuth(options?: Partial<PublicConfiguration>) {
  // profile
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("./profile", {
    dedupingInterval: 60 * 60 * 1000, //1hr
    revalidateOnFocus: false,
    ...options,
  });

  const firstLoading = profile === undefined && error === undefined;

  async function login() {
    await authApi.login({
      username: "test1",
      password: "123123",
    });

    await mutate()
  }

  async function logout() {
    await authApi.logout();
    await mutate({}, false)
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading
  };
}
