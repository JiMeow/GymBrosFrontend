import LandingPage from "../components/page/LandingPage";
import Nutrients from "../components/page/Nutrients";
import WorkoutExample from "../components/page/WorkoutExample";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div className="-z-50 h-full min-h-[100vh] rounded-sm bg-gray-900">
        <Navbar />
        <LandingPage />
        <WorkoutExample />
        <Nutrients />
      </div>
    </>
  );
}
