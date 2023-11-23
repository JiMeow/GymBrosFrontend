import LandingPage from "./LandingPage";
import WorkoutExample from "./WorkoutExample";

export default function Home() {
  return (
    <>
      <div className="-z-50 h-full min-h-[100vh] rounded-sm bg-black">
        <LandingPage />
        <WorkoutExample />
      </div>
    </>
  );
}
