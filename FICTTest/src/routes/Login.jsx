import { useState } from "react";
import LoginBox from "../components/LoginBox";
import RegisterBox from "../components/RegisterBox"

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(true)

  return (
    <>
    <button onClick={() => setIsRegistering(!isRegistering)} style={{marginBottom: "10px", width: "10rem"}}>
      {isRegistering ? "Go to login." : "Go to register."}
    </button>

    {isRegistering ? <RegisterBox /> : <LoginBox />}
    </>
  )
}
