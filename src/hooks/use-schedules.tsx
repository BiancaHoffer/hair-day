import React, { createContext, useContext, useState } from "react";
import type { Schedule } from "../types/schedules";
import { toast } from "react-toastify";

interface SchedulesContextType {
  schedules: Schedule[];
  isTimeUnavailable: (date: string, time: string) => boolean;
  newSchedule: (data: Omit<Schedule, "id" | "available">) => void;
  deleteSchedule: (id: string) => void;
}

const SchedulesContext = createContext({} as SchedulesContextType);

export function SchedulesProvider({ children }: { children: React.ReactNode }) {
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  function isTimeUnavailable(date: string, time: string) {
    return schedules.some(
      (schedule) => schedule.date === date && schedule.time === time,
    );
  }

  function newSchedule({
    date,
    time,
    clientName,
    period,
  }: Omit<Schedule, "id" | "available">) {
    setSchedules((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(2, 9),
        date,
        time,
        available: false,
        clientName,
        period,
      },
    ]);
    toast.success("Agendamento criado com sucesso!");
  }

  function deleteSchedule(id: string) {
    setSchedules((prev) => prev.filter((schedule) => schedule.id !== id));
    toast.info(`Agendamento removido com sucesso!`);
  }

  return (
    <SchedulesContext.Provider
      value={{
        schedules,
        isTimeUnavailable,
        newSchedule,
        deleteSchedule,
      }}
    >
      {children}
    </SchedulesContext.Provider>
  );
}

export default function useSchedules() {
  return useContext(SchedulesContext);
}
