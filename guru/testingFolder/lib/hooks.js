import Router from "next/router";
import useSWR from "swr";
import axios from "axios";

function fetcher(url) {
  axios
    .get(url)
    .then((response) => {
      return response.status(200).json();
    })
    .then((data) => {
      return { user: data.user || null };
    });
}

export function useUser({ redirectTo, redirectIfFound } = {}) {
  const { data, error } = useSWR("/api/user", fetcher);
  const user = data.user;
  const finished = Boolean(data);
  const hasUser = Boolean(user);

  React.useEffect(() => {
    if (!redirectTo | !finished) return;
    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !hasUser) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && hasUser)
    ) {
      Router.push(redirectTo);
    }
  }, [redirectTo, redirectIfFound, finished, hasUser]);

  return error ? null : user;
}
