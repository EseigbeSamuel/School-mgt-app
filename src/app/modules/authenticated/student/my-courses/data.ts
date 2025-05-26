export interface SubjectCard {
  name: string;
  duration?: string;
  lessons?: number | string;
  progress?: string;
  isStarFlow?: boolean;
}
export interface subjects {
  id: number;
  name: string;
  lessons: number;
  time: string;
  progress: string;
  progressPercent: number;
  color: string;
  icon: string;
  author?: string;
}

export const SUBJECTS_DATA: subjects[] = [
  {
    id: 1,
    name: 'Biology',
    lessons: 12,
    time: '1.30hrs',
    progress: 'Not started',
    progressPercent: 10,
    color: 'bg-[#591239]',
    icon: 'biology',
  },
  {
    id: 2,
    name: 'Mathematics',
    lessons: 16,
    time: '2.00hrs',
    progress: 'In progress',
    progressPercent: 35,
    color: 'bg-[#DB734C]',
    icon: 'mathematics',
  },
  {
    id: 3,
    name: 'English',
    lessons: 13,
    time: '1.50hrs',
    progress: 'Completed',
    progressPercent: 100,
    color: 'bg-[#3250FF]',
    icon: 'english',
  },
  {
    id: 4,
    name: 'Chemistry',
    lessons: 13,
    time: '1.50hrs',
    progress: 'Completed',
    progressPercent: 20,
    color: 'bg-[#DB2777]',
    icon: 'chemistry',
  },
  {
    id: 5,
    name: 'Agric science',
    lessons: 13,
    time: '1.50hrs',
    progress: 'Completed',
    progressPercent: 20,
    color: 'bg-[#267267]',
    icon: 'agricScience',
  },
  // ... other subjects
];
