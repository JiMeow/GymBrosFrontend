import LandingPage from "../components/sections/LandingPage";
import Navbar from "../components/Navbar";
// import Nutrients from "../components/sections/Nutrients";
// import WorkoutExample from "../components/sections/WorkoutExample";

export default function Home() {
  return (
    <>
      <div className="-z-50 h-full min-h-[100vh] rounded-sm bg-gray-900">
        <Navbar />
        <LandingPage />
        {/* <WorkoutExample />
        <Nutrients /> */}
      </div>
    </>
  );
}
