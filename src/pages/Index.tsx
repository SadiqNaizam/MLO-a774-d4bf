import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import BarChartCard from '../components/Dashboard/BarChartCard';
import TotalProductsCard from '../components/Dashboard/TotalProductsCard';
import TrafficChartCard from '../components/Dashboard/TrafficChartCard';
import CircularScoreCard from '../components/Dashboard/CircularScoreCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ScoreDataItem {
  id: string;
  score: number;
  label: string;
}

const scoreItems: ScoreDataItem[] = [
  { id: 'score1', score: 85, label: 'SCORE #1' },
  { id: 'score2', score: 73, label: 'SCORE #2' },
  { id: 'score3', score: 92, label: 'SCORE #3' },
  { id: 'score4', score: 54, label: 'SCORE #4' },
  { id: 'score5', score: 75, label: 'SCORE #5' },
] as const;

const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Row 1: StatsCardGrid spanning both columns on medium screens and up */}
        <StatsCardGrid className="md:col-span-2" />

        {/* Row 2, Column 1 (Left Column on md screens and up) */}
        <div className="flex flex-col gap-6">
          <BarChartCard />
          <Card className="shadow-lg bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-card-foreground">
                KEY PERFORMANCE SCORES
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row flex-wrap justify-around items-start gap-x-2 gap-y-4 pt-4">
              {scoreItems.map((item) => (
                <CircularScoreCard
                  key={item.id}
                  score={item.score}
                  label={item.label}
                  // The CircularScoreCard component itself has a max-width of 150px.
                  // We can let flexbox handle the wrapping and spacing.
                />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Row 2, Column 2 (Right Column on md screens and up) */}
        <div className="flex flex-col gap-6">
          <TotalProductsCard />
          <TrafficChartCard />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
