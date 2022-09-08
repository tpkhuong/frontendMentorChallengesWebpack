import React from "react";
import AssistiveLinksStyles from "../../styles/Login/AssistiveLinks.module.css";

export default function AssistiveLinks({ children, ...props }) {
  const { emailRef, passwordRef } = props.loginInputRefs;
  const loginRefValues = props.loginContext;
  const memoInitialValuesObj = React.useMemo(() => {
    return {
      errors: {
        email: 0,
        password: 0,
      },
    };
  }, []);

  const [{ email, password }, setErrorMessage] =
    React.useState(memoInitialValuesObj);

  loginRefValues.refToSetFuncForAssistiveText = setErrorMessage;
  return (
    <React.Fragment>
      <h2>Hello this is assistive links component!</h2>
      {/* email */}
      {email > 0 ? (
        emailRef.current.value === "" ? (
          <a href="#login-email">{`The email field can't be empty. Please enter a valid email with the @ (at sign).`}</a>
        ) : (
          <a href="#login-email">{`The email format is invalid. Please check email format is correct.`}</a>
        )
      ) : null}
      {/* password */}
      {password > 0 ? (
        <a href="#login-password">{`The password field is required. Please enter your password to log in.`}</a>
      ) : null}
    </React.Fragment>
  );
}
