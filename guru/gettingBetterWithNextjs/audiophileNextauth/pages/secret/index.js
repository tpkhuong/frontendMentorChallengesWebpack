import React from "react";
import { server } from "../../config/index";
import { useSession } from "next-auth/react";
import Link from "next/link";
import axios from "axios";

export default function Secret({ children, ...props }) {
  const { data: session, loading } = useSession();
  const [content, setContent] = React.useState();
  // console.log(props.data);
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
  const response = await fetch("/api/secret");
  console.log(response);
  const json = await response.json();

  if (json.content) {
    callStateFunc(json.content);
  }
}

/**
 * getting object with error and not content
 * **/
// export async function getStaticProps(content) {
//   const response = await axios.get(`${server}/api/secret`);
//   const { data } = response;

//   return {
//     props: { data },
//   };
// }
