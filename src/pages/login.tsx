import { GoogleLogo } from "@phosphor-icons/react";
import { useRouter } from "next/router";


export default function LoginPage() {
  const router = useRouter();

  return (
    <>
      <div className="-z-50 h-[100vh] rounded-sm bg-gray-200">
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <div className="font-bold text-2xl mb-4">Sign in to GymsBro</div>

          {/* continue with google button */}
          <div className="flex items-center justify-center text-sm font-bold w-80 border-2 h-10 rounded-md border-black bg-white gap-2 cursor-pointer">
            <GoogleLogo size={24} color="#504e4e" weight="bold" />
            <div className="">Continue with Google</div>
          </div>
          
          <div className="text-[#504e4e]">or</div>
          
          <input className="w-80 border-2 h-10 rounded-md pl-2 border-black" placeholder="Email"></input>
          <input className="w-80 border-2 h-10 rounded-md pl-2 border-black mb-2" placeholder="Password"></input>
          <div className="w-80 border-2 h-10 flex justify-center items-center rounded-md border-black bg-black text-white cursor-pointer">Log in</div>

          <div className="hover:underline text-link">Reset password</div>
          <div className="text-[#504e4e]">{"Don't have an account?"}<span onClick={() => {
            void router.push("/signup");
          }} className="cursor-pointer ml-2 hover:underline text-link">Create one</span></div>
        </div>
      </div>
    </>
  );
}
