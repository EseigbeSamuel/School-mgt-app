export type NavItemsType = {
  title: string;
  value: number;
  growthRate: number;
  icon: string;
  type: string;
};

export const stats: NavItemsType[] = [
  {
    title: 'Students',
    value: 18,
    icon: 'students',
    growthRate: 8.5,
    type: 'number',
  },
  {
    title: 'Completed classes',
    value: 4,
    icon: 'completedClasses',
    growthRate: 8.5,
    type: 'number',
  },
  {
    title: 'Earnings',
    value: 200000,
    icon: 'earnings',
    growthRate: 4.5,
    type: 'currency',
  },
];
