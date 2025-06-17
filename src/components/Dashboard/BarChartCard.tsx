import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface RegionSale {
  name: string;
  sales: number;
}

const salesData: RegionSale[] = [
  { name: 'Region 5', sales: 40 },
  { name: 'Region 4', sales: 35 },
  { name: 'Region 3', sales: 116 },
  { name: 'Region 2', sales: 103 },
  { name: 'Region 1', sales: 70 },
];

interface BarChartCardProps {
  className?: string;
}

const BarChartCard: React.FC<BarChartCardProps> = ({ className }) => {
  return (
    <Card className={cn('bg-card text-card-foreground shadow-lg', className)}>
      <CardHeader>
        <CardTitle className="text-base font-semibold text-card-foreground">PRODUCT SALES</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={true} vertical={false} />
            <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis 
              type="category" 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={12}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: 'hsl(var(--muted))', fillOpacity: 0.3 }}
              contentStyle={{ 
                backgroundColor: 'hsl(var(--popover))',
                borderColor: 'hsl(var(--border))',
                color: 'hsl(var(--popover-foreground))'
              }}
            />
            <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]}>
              <LabelList dataKey="sales" position="right" style={{ fill: 'hsl(var(--card-foreground))', fontSize: '12px' }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BarChartCard;
