"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const currentDate = new Date().toLocaleDateString("es-ES", {
  year: "numeric",
  month: "long",
});
const currentDate2 = new Date().toLocaleDateString("es-ES", {
  month: "long",
});

const ganan05 = 70000;

const chartData = [
  { day: `05 ${currentDate2}`, ganancia: ganan05 },
  { day: `10 ${currentDate2}`, ganancia: 50000 },
  { day: `15 ${currentDate2}`, ganancia: 20000 },
  { day: `20 ${currentDate2}`, ganancia: 68000 },
  { day: `25 ${currentDate2}`, ganancia: 20000 },
  { day: `30 ${currentDate2}`, ganancia: 13000 },
];

export default function GananciasMensuales() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Ganancias Mensuales</CardTitle>
        <CardDescription>{currentDate}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip
              formatter={(value) => [`$${value}`, "Ganancia últimos 5 días"]}
            />
            <Legend />
            <Bar
              dataKey="ganancia"
              fill="hsl(var(--chart-1))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Incremento del 5.2% este mes <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Ganancias divididas en períodos de 5 días
        </div>
      </CardFooter>
    </Card>
  );
}
