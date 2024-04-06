import { GoogleLogo } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="-z-50 h-[100vh] rounded-sm bg-gray-200">
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <div className="mb-4 text-3xl font-bold">Sign up for GymsBro</div>

          {/* continue with google button */}
          <div className="flex h-12 w-[360px] cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-black bg-white font-bold text-neutral">
            <GoogleLogo size={24} color="#504e4e" weight="bold" />
            <div className="">Continue with Google</div>
          </div>

          <div className="text-[#504e4e]">or</div>

          <input
            className="h-12 w-[360px] rounded-md border-2 border-black pl-2"
            placeholder="Email"
          ></input>
          <input
            className="mb-2 h-12 w-[360px] rounded-md border-2 border-black pl-2"
            placeholder="Password"
          ></input>

          <div className="flex w-[360px] flex-row items-center justify-center gap-4">
            <input
              type="checkbox"
              checked={checked}
              className="solid checkbox border-2 border-black"
              onChange={() => setChecked(!checked)}
            />
            <div className="text-[#504e4e]">I agree to the join GymsBro</div>
          </div>

          <div className="flex h-12 w-[360px] cursor-pointer items-center justify-center rounded-md border-2 border-black bg-black text-white">
            Create account
          </div>

          <div className="w-[360px] px-6 text-center text-xs text-[#504e4e]">
            {
              'By clicking "Create account" or "Continue with Google", you agree to join the GymsBro.'
            }
          </div>

          <div className="text-[#504e4e]">
            {"Already have an account?"}
            <span
              onClick={() => {
                void router.push("/login");
              }}
              className="ml-2 cursor-pointer text-link hover:underline"
            >
              Log in
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
