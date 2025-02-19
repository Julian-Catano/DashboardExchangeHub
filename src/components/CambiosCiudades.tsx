"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { ciudades: "Medellin", cambios: 300 },
  { ciudades: "Bogota", cambios: 105 },
  { ciudades: "Cali", cambios: 237 },
];

const chartConfig = {
  cambios: {
    label: "Cambios",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const currentDate2 = new Date().toLocaleDateString("es-ES", {
  month: "long",
});
const currentDate = new Date().toLocaleDateString("es-ES", {
  year: "numeric",
  month: "long",
});

export default function CambiosCiudades() {
  return (
    <Card className="h-full w-full flex flex-col">
      <CardHeader className="items-center">
        <CardTitle>Mayores ciudades consumidoras de ExchangeHub</CardTitle>
        <CardDescription>
          {currentDate}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex items-center justify-center">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <RadarChart data={chartData} width={undefined} height={undefined}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="ciudades" />
            <PolarGrid />
            <Radar
              dataKey="cambios"
              fill="var(--color-cambios)"
              fillOpacity={0.6}
              dot={{ r: 4, fillOpacity: 1 }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Incremento del 5.2% este mes <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          {currentDate2}
        </div>
      </CardFooter>
    </Card>
  );
}
