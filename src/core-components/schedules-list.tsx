import React from "react";

import Text from "../components/text";
import SelectInputDate from "../components/select-input-date";

import { ScheduleItem } from "./schedule.item";

export function SchedulesList() {
  const [dateCalendar, setDateCalendar] = React.useState(
    new Date().toISOString().split("T")[0],
  );

  return (
    <div className="flex gap-8 flex-col w-full p-20">
      <div className="flex justify-between gap-3 flex-wrap ">
        <div>
          <Text as="h1" variant="title-lg-bold" className="mb-1">
            Sua agenda
          </Text>
          <Text variant="body-sm" color="tertiary">
            Consulte os seus cortes de cabelo agendados por dia
          </Text>
        </div>
        <SelectInputDate
          value={dateCalendar}
          onChange={(e) => setDateCalendar(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3">
        <ScheduleItem date={dateCalendar} period="morning" />
        <ScheduleItem date={dateCalendar} period="afternoon" />
        <ScheduleItem date={dateCalendar} period="night" />
      </div>
    </div>
  );
}
