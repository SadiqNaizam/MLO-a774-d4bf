import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Boxes } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TotalProductsCardProps {
  className?: string;
}

const totalProductsSold = 364;
const dateRange = '06/19/2024 - 06/25/2024';

const TotalProductsCard: React.FC<TotalProductsCardProps> = ({ className }) => {
  return (
    <Card className={cn('bg-card text-card-foreground shadow-lg flex flex-col items-center justify-center text-center p-6', className)}>
      <CardHeader className="p-0 mb-2">
        <CardTitle className="text-base font-semibold text-card-foreground">TOTAL PRODUCTS SOLD</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex flex-col items-center">
        <div className="text-6xl font-bold text-primary my-4">
          {totalProductsSold}
        </div>
        <Boxes className="h-20 w-20 text-primary opacity-80 my-4" strokeWidth={1.5} />
        <p className="text-sm text-muted-foreground mt-2">
          {dateRange}
        </p>
      </CardContent>
    </Card>
  );
};

export default TotalProductsCard;
