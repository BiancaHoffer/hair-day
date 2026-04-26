import "./App.css";

import logo from "./assets/images/logo.png";

import { SchedulesList } from "./core-components/schedules-list";
import { FormSchedule } from "./core-components/form-schedule";

export default function App() {
  return (
    <main className="flex max-md:justify-center max-md:flex-wrap p-3 gap-3 w-full max-w-360 m-auto">
      <div className="relative">
        <div className="absolute  flex items-center rounded-b-lg justify-center  left-0 -top-4 bg-gray-600 w-35 h-14">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <FormSchedule />
      <SchedulesList />
    </main>
  );
}
