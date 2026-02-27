import { ReactNode } from 'react';

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export interface FeatureCardProps extends BaseProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
  colSpan?: string;
}

export interface StatItemProps {
  label: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
  trend?: number;
}
