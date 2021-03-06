import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAutheticating, setIsAuthenticating] = useState(false);
  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  };
  if (isAutheticating) {
    return <LoadingOverlay message="Creating User..." />;
  }

  return <AuthContent onAuthenticate={{ signupHandler }} />;
}

export default SignupScreen;
