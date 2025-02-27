import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function SignUp() {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Sign Up</button>;
}
