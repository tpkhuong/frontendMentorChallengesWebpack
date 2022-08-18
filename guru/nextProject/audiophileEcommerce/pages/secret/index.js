import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import axios from "axios";

export default function Secret({ children, ...props }) {
  const { data: session, loading } = useSession();
  const [content, setContent] = React.useState();

  React.useEffect(() => {
    fetchData(setContent);
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;

  if (!session) {
    return (
      <React.Fragment>
        <h2>You're not signed in, please sign in</h2>
        <Link href="/login">
          <a>Go to Log in Page</a>
        </Link>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <h2>Welcome to Protected Page</h2>
      <p>{content}</p>
      {/* <p>{props.data.content}</p> */}
      <Link href="/">
        <a>Go to Home Page</a>
      </Link>
    </React.Fragment>
  );
}

async function fetchData(callStateFunc) {
  const { data } = await axios.get("api/secret");
  if (data.content) {
    callStateFunc(data.content);
  }
}
