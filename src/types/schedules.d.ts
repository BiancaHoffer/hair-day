export interface Schedule {
  id: string;
  date: string;
  time: string;
  available: boolean;
  period: "morning" | "afternoon" | "night";
  clientName: string;
}
