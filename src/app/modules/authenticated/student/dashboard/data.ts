interface Stats {
  title: string;
  count: number;
  icon: string;
  subjects: string[];
}

export const statCards: Stats[] = [
  {
    title: 'Class Completed',
    count: 3,
    icon: 'classCompleted',
    subjects: ['Math', 'Bio', 'Che'],
  },
  {
    title: 'Classes in progress',
    count: 4,
    icon: 'classInProgress',
    subjects: ['Math', 'Bio', 'Che', 'Phy'],
  },
  {
    title: 'Finished',
    count: 1,
    icon: 'finished',
    subjects: ['Geography'],
  },
  {
    title: 'Unfinished',
    count: 3,
    icon: 'unfineshed',
    subjects: ['Math', 'Bio', 'Che'],
  },
];
