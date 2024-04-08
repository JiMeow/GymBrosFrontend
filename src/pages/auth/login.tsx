import { pages } from "@/modules/pageConfig";
import { GoogleLogo } from "@phosphor-icons/react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();

  return (
    <>
      <div className="-z-50 h-[100dvh] rounded-sm bg-base-200">
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <div className="mb-4 text-3xl font-bold ">Sign in to GymsBro</div>

          {/* continue with google button */}
          <div className="flex h-12 w-[360px] cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-base-content text-sm font-bold ">
            <GoogleLogo size={24} color="#504e4e" weight="bold" />
            <div className="">Continue with Google</div>
          </div>

          <div className="">or</div>

          <input
            className="h-12 w-[360px] rounded-md border-2 border-base-content pl-2"
            placeholder="Email"
          ></input>
          <input
            className="mb-2 h-12 w-[360px] rounded-md border-2 border-base-content pl-2"
            placeholder="Password"
          ></input>
          <div className="flex h-12 w-[360px] cursor-pointer items-center justify-center rounded-md border-2 border-base-content bg-base-content font-bold text-base-100">
            Log in
          </div>

          <div className="text-primary hover:underline">Reset password</div>
          <div className="">
            {"Don't have an account?"}
            <span
              onClick={() => {
                void router.push(pages.register.path);
              }}
              className="ml-2 cursor-pointer text-primary hover:underline"
            >
              Create one
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
