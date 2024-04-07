import LandingPage from "../modules/components/sections/LandingPage";
import TopNav from "../modules/components/landing/TopNav";

export default function Home() {
  return (
    <>
      <div className="-z-50 h-full min-h-[100vh] rounded-sm bg-gray-900">
        <TopNav />
        <LandingPage />
      </div>
    </>
  );
}
