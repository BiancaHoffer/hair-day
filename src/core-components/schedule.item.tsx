import Horizon from "../assets/icons/sun-horizon.svg?react";
import Trash from "../assets/icons/trash.svg?react";

import ButtonIcon from "../components/button-icon";
import Icon from "../components/icon";
import Text from "../components/text";

import useSchedules from "../hooks/use-schedules";

export function ScheduleItem({
  date,
  period,
}: {
  date: string;
  period: "morning" | "afternoon" | "night";
}) {
  const { schedules, deleteSchedule } = useSchedules();

  return (
    <div className="border border-gray-600 rounded-lg ">
      <div className="flex justify-between items-center px-5 py-3 border-b border-b-gray-600">
        <div className="flex gap-2 items-center justify-center ">
          <Icon svg={Horizon} />
          <Text variant="body-sm" color="tertiary">
            {period === "morning" && "Manhã"}
            {period === "afternoon" && "Tarde"}
            {period === "night" && "Noite"}
          </Text>
        </div>
        <Text color="quaternary">
          {period === "morning" && "09h-12h"}
          {period === "afternoon" && "13h-18h"}
          {period === "night" && "19h-21h"}
        </Text>
      </div>
      <div className="p-5">
        <div className="flex flex-col gap-2">
          {schedules.filter(
            (schedule) => schedule.date === date && schedule.period === period,
          ).length === 0 && (
            <Text variant="body-sm" color="tertiary">
              Nenhum agendamento para este período
            </Text>
          )}

          {schedules.map(
            (schedule) =>
              schedule.date === date &&
              schedule.period === period && (
                <div
                  key={schedule.id}
                  className="flex justify-between items-center gap-5"
                >
                  <Text color="secondary" variant="title-md-bold">
                    {schedule.time}
                  </Text>
                  <Text className="w-full" color="secondary">
                    {schedule.clientName}
                  </Text>
                  <ButtonIcon
                    icon={Trash}
                    type="button"
                    onClick={() => deleteSchedule(schedule.id)}
                  />
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
}
