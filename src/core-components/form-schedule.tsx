import React from "react";

import Button from "../components/button";
import Card from "../components/card";
import SelectInputDate from "../components/select-input-date";
import Text from "../components/text";
import TextInput from "../components/text-input";
import TimeSelect from "../components/time-select";
import useSchedules from "../hooks/use-schedules";

export function FormSchedule() {
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [clientName, setClientName] = React.useState("");
  const [period, setPeriod] = React.useState<"morning" | "afternoon" | "night">(
    "morning",
  );

  const { isTimeUnavailable, newSchedule } = useSchedules();

  const periods = [
    { id: "morning", label: "Manhã" },
    { id: "afternoon", label: "Tarde" },
    { id: "night", label: "Noite" },
  ];

  const timeSlots = [
    { time: "09:00", period: "morning" },
    { time: "10:00", period: "morning" },
    { time: "11:00", period: "morning" },
    { time: "12:00", period: "morning" },
    { time: "13:00", period: "afternoon" },
    { time: "14:00", period: "afternoon" },
    { time: "15:00", period: "afternoon" },
    { time: "16:00", period: "afternoon" },
    { time: "17:00", period: "afternoon" },
    { time: "18:00", period: "afternoon" },
    { time: "19:00", period: "night" },
    { time: "20:00", period: "night" },
    { time: "21:00", period: "night" },
  ];

  function resetForm() {
    setDate("");
    setTime("");
    setClientName("");
    setPeriod("morning");
  }

  function handleNewSchedule(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    newSchedule({
      date,
      time,
      clientName,
      period,
    });

    resetForm();
  }

  return (
    <Card
      as="aside"
      className="flex gap-6 flex-col w-full max-w-124.5 max-md:max-w-full"
    >
      <div>
        <Text as="h1" variant="title-lg-bold" color="primary" className="mb-1">
          Agende um atendimento
        </Text>
        <Text variant="body-sm" color="tertiary">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Text>
      </div>

      <form onSubmit={handleNewSchedule}>
        <label className="flex flex-col gap-2 mb-8">
          <Text variant="title-md-bold" color="secondary">
            Data
          </Text>
          <SelectInputDate
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <div className="flex flex-col gap-2">
          <Text as="h2" variant="title-md-bold" color="secondary">
            Horários
          </Text>

          <div className="flex flex-col gap-3 mb-8">
            {periods.map((period) => (
              <div key={period.id} className="flex flex-col gap-2">
                <Text color="secondary">{period.label}</Text>
                <div className="flex flex-wrap gap-2">
                  {timeSlots
                    .filter((slot) => slot.period === period.id)
                    .map((slot) => (
                      <TimeSelect
                        key={slot.time}
                        disabled={!date || isTimeUnavailable(date, slot.time)}
                        checked={time === slot.time}
                        onChange={() => {
                          setTime(slot.time);
                          setPeriod(slot.period);
                        }}
                      >
                        {slot.time}
                      </TimeSelect>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <label className="flex flex-col gap-2 mb-8">
          <Text variant="title-md-bold" color="secondary">
            Cliente
          </Text>
          <TextInput
            required
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Nome do cliente"
          />
        </label>

        <Button
          type="submit"
          className="w-full"
          disabled={!date || !time || !clientName}
        >
          AGENDAR
        </Button>
      </form>
    </Card>
  );
}
