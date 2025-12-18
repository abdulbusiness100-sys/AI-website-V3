import * as React from "react";
import {
  BarChart,
  LineChart,
  PieChart,
  Bar,
  Line,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
} from "recharts";
import { cn } from "@/lib/utils";

// Chart context for configuration
const ChartContext = React.createContext<{ config?: any }>({});

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<string, string> }
  )
}

interface ChartProps {
  children: React.ReactNode;
  className?: string;
  config?: ChartConfig;
}

export function Chart({ 
  children, 
  className, 
  config = {},
}: ChartProps) {
  return (
    <ChartContext.Provider value={{ config }}>
      <div className={cn("w-full h-full", className)}>
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

export function ChartTitle({ children }: { children: React.ReactNode }) {
  return <h4 className="text-sm font-medium text-center mb-4">{children}</h4>;
}

export function ChartTooltip() {
  return <Tooltip />;
}

export function ChartLegend() {
  return <Legend />;
}

export function ChartGrid() {
  return <CartesianGrid strokeDasharray="3 3" />;
}

export function ChartXAxis({ dataKey }: { dataKey: string }) {
  return <XAxis dataKey={dataKey} />;
}

export function ChartYAxis() {
  return <YAxis />;
}

interface ChartBarProps {
  dataKey: string;
  dataset: any[];
  name: string;
  label?: any;
}

export function ChartBar({ dataKey, dataset, name, label }: ChartBarProps) {
  const { config } = React.useContext(ChartContext);
  const chartConfig = config?.[name] || {};
  const color = chartConfig.color || chartConfig.theme?.primary || "#C3B091";

  return (
    <BarChart data={dataset}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Bar dataKey={dataKey} fill={color} label={label} />
    </BarChart>
  );
}

interface ChartLineProps {
  type?: string;
  dataKey: string;
  dataset: any[];
  name: string;
  label?: string;
}

export function ChartLine({ type = "monotone", dataKey, dataset, name, label }: ChartLineProps) {
  const { config } = React.useContext(ChartContext);
  const chartConfig = config?.[name] || {};
  const color = chartConfig.color || chartConfig.theme?.primary || "#C3B091";

  return (
    <LineChart data={dataset}>
      <Line 
        type={type} 
        dataKey={dataKey} 
        stroke={color} 
        name={label || dataKey} 
        activeDot={{ r: 8 }} 
      />
    </LineChart>
  );
}

interface ChartAreaProps {
  dataKey: string;
  dataset: any[];
  name: string;
  fill?: string;
  fillOpacity?: number;
}

export function ChartArea({ dataKey, dataset, name, fill, fillOpacity = 0.3 }: ChartAreaProps) {
  const { config } = React.useContext(ChartContext);
  const chartConfig = config?.[name] || {};
  const color = chartConfig.color || chartConfig.theme?.primary || "#C3B091";

  return (
    <Area 
      type="monotone" 
      dataKey={dataKey} 
      stroke={color} 
      fill={fill || color} 
      fillOpacity={fillOpacity} 
    />
  );
}

interface ChartPieProps {
  dataKey: string;
  nameKey: string;
  dataset: any[];
  name: string;
}

export function ChartPie({ dataKey, nameKey, dataset, name }: ChartPieProps) {
  const { config } = React.useContext(ChartContext);
  const chartConfig = config?.[name] || {};
  const color = chartConfig.color || chartConfig.theme?.primary || "#C3B091";

  return (
    <PieChart>
      <Pie
        data={dataset}
        dataKey={dataKey}
        nameKey={nameKey}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill={color}
        label
      />
      <Tooltip />
    </PieChart>
  );
}