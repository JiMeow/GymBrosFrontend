import LandingPage from "./LandingPage";
import Nutrients from "./Nutrients";
import WorkoutExample from "./WorkoutExample";
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
