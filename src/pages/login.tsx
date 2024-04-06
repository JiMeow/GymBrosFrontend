import { GoogleLogo } from "@phosphor-icons/react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();

  return (
    <>
      <div className="-z-50 h-[100vh] rounded-sm bg-gray-200">
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <div className="mb-4 text-2xl font-bold">Sign in to GymsBro</div>

          {/* continue with google button */}
          <div className="flex h-10 w-80 cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-black bg-white text-sm font-bold">
            <GoogleLogo size={24} color="#504e4e" weight="bold" />
            <div className="">Continue with Google</div>
          </div>

          <div className="text-[#504e4e]">or</div>

          <input
            className="h-10 w-80 rounded-md border-2 border-black pl-2"
            placeholder="Email"
          ></input>
          <input
            className="mb-2 h-10 w-80 rounded-md border-2 border-black pl-2"
            placeholder="Password"
          ></input>
          <div className="flex h-10 w-80 cursor-pointer items-center justify-center rounded-md border-2 border-black bg-black text-white">
            Log in
          </div>

          <div className="text-link hover:underline">Reset password</div>
          <div className="text-[#504e4e]">
            {"Don't have an account?"}
            <span
              onClick={() => {
                void router.push("/signup");
              }}
              className="ml-2 cursor-pointer text-link hover:underline"
            >
              Create one
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
