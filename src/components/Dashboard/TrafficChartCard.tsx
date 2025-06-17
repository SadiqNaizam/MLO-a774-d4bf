import React from 'react';
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TrafficPoint {
  date: string;
  websiteVisits: number;
  pageViews: number;
}

const trafficData: TrafficPoint[] = [
  { date: '06/19', websiteVisits: 60, pageViews: 20 },
  { date: '06/20', websiteVisits: 105, pageViews: 55 },
  { date: '06/21', websiteVisits: 35, pageViews: 15 },
  { date: '06/22', websiteVisits: 125, pageViews: 58 },
  { date: '06/23', websiteVisits: 45, pageViews: 18 },
  { date: '06/24', websiteVisits: 80, pageViews: 30 },
  { date: '06/25', websiteVisits: 130, pageViews: 35 },
];

interface TrafficChartCardProps {
  className?: string;
}

const TrafficChartCard: React.FC<TrafficChartCardProps> = ({ className }) => {
  return (
    <Card className={cn('bg-card text-card-foreground shadow-lg', className)}>
      <CardHeader>
        <CardTitle className="text-base font-semibold text-card-foreground">WEBSITE TRAFFIC</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={trafficData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--card-foreground))" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="hsl(var(--card-foreground))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={12} 
              tickLine={false} 
              axisLine={{stroke: 'hsl(var(--border))'}}
            />
            <YAxis 
              yAxisId="left" 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false}
              domain={[0, (dataMax: number) => Math.max(140, dataMax + 20)]} // Ensure Y-axis goes up to at least 140 like in image
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false}
              domain={[0, (dataMax: number) => Math.max(60, dataMax + 10)]} // Secondary axis for page views, ensure up to 60
            />
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'hsl(var(--popover))',
                borderColor: 'hsl(var(--border))',
                color: 'hsl(var(--popover-foreground))'
              }}
              labelStyle={{ color: 'hsl(var(--popover-foreground))' }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              iconType="plainline"
              wrapperStyle={{color: 'hsl(var(--muted-foreground))', fontSize: '12px'}}
            />
            <Area 
              yAxisId="left"
              type="monotone" 
              dataKey="websiteVisits" 
              stroke="hsl(var(--muted-foreground))" 
              fillOpacity={1}
              fill="url(#colorVisits)" 
              strokeWidth={2}
              name="Website Visits"
              dot={false}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="pageViews" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2} 
              name="Website Page Views"
              dot={{
                r: 4,
                fill: 'hsl(var(--primary))',
                stroke: 'hsl(var(--card))',
                strokeWidth: 2
              }}
              activeDot={{ 
                r: 6, 
                fill: 'hsl(var(--primary))', 
                stroke: 'hsl(var(--card))',
                strokeWidth: 2
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TrafficChartCard;
