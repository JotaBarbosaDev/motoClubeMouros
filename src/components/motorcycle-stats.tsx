"use client";

import * as React from "react";
import {Label, Pie, PieChart} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type MotorcycleData = {
  category: string;
  displacement: string;
};

const categoryConfig = {
  visitors: {
    label: "Total",
  },
  antiga: {
    label: "Antiga",
    color: "hsl(var(--chart-1))",
  },
  trail: {
    label: "Trail",
    color: "hsl(var(--chart-2))",
  },
  "street/estrada": {
    label: "Street/Estrada",
    color: "hsl(var(--chart-3))",
  },
  "off-road": {
    label: "Off-Road",
    color: "hsl(var(--chart-4))",
  },
  "big trail": {
    label: "Big Trail",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const displacementConfig = {
  visitors: {
    label: "Total",
  },
  "0cc - 50cc": {
    label: "0cc - 50cc",
    color: "hsl(var(--chart-1))",
  },
  "51cc - 124cc": {
    label: "51cc - 124cc",
    color: "hsl(var(--chart-2))",
  },
  "125cc - 499cc": {
    label: "125cc - 499cc",
    color: "hsl(var(--chart-3))",
  },
  "500cc - 999cc": {
    label: "500cc - 999cc",
    color: "hsl(var(--chart-4))",
  },
  "1000cc ou mais": {
    label: "1000cc ou mais",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function MotorcycleStats({data}: {data: MotorcycleData[]}) {
  const categoryData = React.useMemo(() => {
    const categories = data.reduce((acc: {[key: string]: number}, curr) => {
      const category = curr.category.trim().toLowerCase();
      if (category === "street" || category === "estrada") {
        acc["street/estrada"] = (acc["street/estrada"] || 0) + 1;
      } else {
        acc[category] = (acc[category] || 0) + 1;
      }
      return acc;
    }, {});

    return Object.entries(categories).map(([name, value]) => ({
      name,
      value,
      fill:
        categoryConfig[name as keyof typeof categoryConfig]?.color ||
        categoryConfig["street/estrada"].color,
    }));
  }, [data]);

  const displacementData = React.useMemo(() => {
    const ranges = data.reduce((acc: {[key: string]: number}, curr) => {
      const cc = parseInt(curr.displacement);
      let range = "";
      if (cc > 0 && cc <= 50) range = "0cc - 50cc";
      else if (cc > 50 && cc < 125) range = "51cc - 124cc";
      else if (cc >= 125 && cc < 500) range = "125cc - 499cc";
      else if (cc >= 500 && cc < 1000) range = "500cc - 999cc";
      else if (cc >= 1000) range = "1000cc ou mais";

      acc[range] = (acc[range] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(ranges).map(([name, value]) => ({
      name,
      value,
      fill: displacementConfig[name as keyof typeof displacementConfig].color,
    }));
  }, [data]);

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Tipos de Motas</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <div className="w-full h-[300px]">
            <ChartContainer config={categoryConfig} className="w-full h-full">
              <PieChart width={400} height={300}>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={2}
                  cx="50%"
                  cy="50%"
                >
                  <Label
                    content={({viewBox}) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        const total = categoryData.reduce(
                          (acc, curr) => acc + curr.value,
                          0
                        );
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {total}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Total
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Cilindradas</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <div className="w-full h-[300px]">
            <ChartContainer
              config={displacementConfig}
              className="w-full h-full"
            >
              <PieChart width={400} height={300}>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Pie
                  data={displacementData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={2}
                  cx="50%"
                  cy="50%"
                >
                  <Label
                    content={({viewBox}) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        const total = displacementData.reduce(
                          (acc, curr) => acc + curr.value,
                          0
                        );
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {total}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Total
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
