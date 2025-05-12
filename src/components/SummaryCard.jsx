
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const SummaryCard = ({
  title,
  value,
  description,
  icon,
  trend,
  trendValue,
  className
}) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-2">{value}</h3>
            {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
            
            {trend && trendValue && (
              <div className="flex items-center mt-2">
                <span 
                  className={cn(
                    "text-xs font-medium", 
                    trend === 'up' ? 'text-green-600' : 'text-red-600'
                  )}
                >
                  {trend === 'up' ? '+' : ''}{trendValue}
                </span>
                <span className="ml-1 text-xs text-gray-500">vs mês anterior</span>
              </div>
            )}
          </div>
          <div className="p-2 bg-agrogreen/10 rounded-md">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
