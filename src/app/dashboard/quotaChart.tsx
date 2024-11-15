"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "Janeiro", quota: 47, gema: 47 },
    { month: "Fevereiro", quota: 59, gema: 12 },
    { month: "Março", quota: 81, gema: 12 },
    { month: "Abril", quota: 86, gema: 5 },
    { month: "Maio", quota: 108, gema: 22 },
    { month: "Junho", quota: 117, gema: 9 },
    { month: "Julho", quota: 117, gema: 0 },
    { month: "Agosto", quota: 117, gema: 0 },
    { month: "Setembro", quota: 119, gema: 2 },
    { month: "Outubro", quota: 127, gema: 10 },
    { month: "Novembro", quota: 130, gema: 3 },
    { month: "Dezembro", quota: 138, gema: 8 },
]

const chartConfig = {
    quota: {
        label: "Quotas",
        color: "hsl(var(--chart-1))",
    },
    gema: {
        label: "Gemas",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function QuotaChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Quotas / Gemas</CardTitle>
                <CardDescription>Ano 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="chart-container w-full h-64 sm:h-96 px-4">
                    <ChartContainer config={chartConfig} className="w-full h-full">
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                            <Line
                                dataKey="quota"
                                type="monotone"
                                stroke="var(--color-quota)"
                                strokeWidth={2}
                                dot={false}
                            />
                            <Line
                                dataKey="gema"
                                type="monotone"
                                stroke="var(--color-gema)"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ChartContainer>
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Aumento de 6.2% em sócios no ultimo mês <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            Total de adesão nos últimos 12 meses
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
