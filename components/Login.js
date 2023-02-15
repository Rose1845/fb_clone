import React from "react";
import { BsFacebook } from "react-icons/bs";
import {FcGoogle} from 'react-icons/fc'
import {  signIn } from "next-auth/react";
const Login = () => {
    // const { data: session } = useSession()
  return (
    <div className="grid grid-cols-2">
      <div className="bg-primary h-screen grid place-items-center">
        <BsFacebook className="text-white text-[200px]"/>
      </div>
      <div className="grid place-items-center bg-black">
        <div className="flex gap-4 bg-[#fff] p-4 px-6 items-center rounded-[6px] cursor-pointers"onClick={()=>signIn()}>
            <FcGoogle className="text-[30px]"/>
            SignIn with Google
        </div>

      </div>
    </div>
  );
};

export default Login;
