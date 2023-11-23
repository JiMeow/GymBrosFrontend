import LandingPage from "./LandingPage";
import Nutrients from "./Nutrients";
import WorkoutExample from "./WorkoutExample";

export default function Home() {
  return (
    <>
      <div className="-z-50 h-full min-h-[100vh] rounded-sm bg-gray-900">
        <LandingPage />
        <WorkoutExample />
        <Nutrients />
      </div>
    </>
  );
}
