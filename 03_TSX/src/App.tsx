'use client';
import DisplayTable from './costumComponents/Display';
import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [
  { month: 'January', desktop: 50 },
  { month: 'February', desktop: 80 },
  { month: 'March', desktop: 100 },
  { month: 'April', desktop: 150 },
  { month: 'May', desktop: 180 },
  { month: 'June', desktop: 200 },
  { month: 'july', desktop: 250 },
  { month: 'August', desktop: 290 },
  { month: 'September', desktop: 320 },
  { month: 'October', desktop: 360 },
  { month: 'November', desktop: 314 },
  { month: 'December', desktop: 400 },
];

const chartConfig = {
  desktop: {
    label: 'Jewellery',
    color: 'goldenrod', //! defines color of chart
  },
  
} satisfies ChartConfig;

export default function Component() {
  return (
    // <div className="bg-slate-900 text-white flex items-center justify-center h-screen w-screen">
    <div className=" bg-slate-700 dark flex justify-center items-center h-screen w-screen gap-20">
      <div className="dark bg-slate-900 text-white rounded-2xl h-auto w-[500px] flex justify-center items-center p-3  ">
        <DisplayTable />
      </div>

      {/* <div className='w-auto'> */}
        <Card className='w-[600px] min-w-[300px] h-auto'>
          <CardHeader>
            <CardTitle>LJ Jewellery Sales</CardTitle>
            <CardDescription>January - June 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip  // TODO: add custom tooltip tooltip is hover effect of chart
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total sales for the last 6 months
            </div>
          </CardFooter>
        </Card>
      {/* </div> */}
    </div>
  );
}
