import { GoogleLogo } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { useState } from "react";


export default function LoginPage() {
  const router = useRouter();

  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="-z-50 h-[100vh] rounded-sm bg-gray-200">
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <div className="font-bold text-3xl mb-4">Sign up for GymsBro</div>

          {/* continue with google button */}
          <div className="flex items-center justify-center text-neutral font-bold w-[360px] border-2 h-12 rounded-md border-black bg-white gap-2 cursor-pointer">
            <GoogleLogo size={24} color="#504e4e" weight="bold" />
            <div className="">Continue with Google</div>
          </div>

          <div className="text-[#504e4e]">or</div>

          <input className="w-[360px] border-2 h-12 rounded-md pl-2 border-black" placeholder="Email"></input>
          <input className="w-[360px] border-2 h-12 rounded-md pl-2 border-black mb-2" placeholder="Password"></input>

          <div className="flex flex-row w-[360px] justify-center items-center gap-4">
            <input type="checkbox" checked={checked} className="checkbox border-2 border-black solid" onChange={() => setChecked(!checked)}/>
            <div className="text-[#504e4e]">I agree to the join GymsBro</div>
          </div>

          <div className="w-[360px] border-2 h-12 flex justify-center items-center rounded-md border-black bg-black text-white cursor-pointer">Create account</div>

          <div className="text-[#504e4e] w-[360px] text-xs text-center px-6">{'By clicking "Create account" or "Continue with Google", you agree to join the GymsBro.'}</div>

          <div className="text-[#504e4e]">{"Already have an account?"}<span onClick={() => {
            void router.push("/login");
          }} className="cursor-pointer ml-2 hover:underline text-link">Log in</span></div>
        </div>
      </div>
    </>
  );
}
