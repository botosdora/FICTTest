import { useState } from "react";
import LoginBox from "../components/LoginBox";
import RegisterBox from "../components/RegisterBox"

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false)

  return (
    <>
    {isRegistering ? <RegisterBox /> : <LoginBox />}
    {isRegistering ? <p>Already have an account?</p> : <p>No account yet?</p> }
    <button onClick={() => setIsRegistering(!isRegistering)} style={{marginBottom: "10px", width: "10rem"}}>
      {isRegistering ? "Go to login." : "Go to register."}
    </button>
    </>
  )
}
