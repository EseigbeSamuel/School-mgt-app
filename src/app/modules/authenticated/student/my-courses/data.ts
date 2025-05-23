// src/app/models/subject.model.ts
export interface SubjectCard {
  name: string;
  duration?: string;
  lessons?: number | string;
  progress?: string;
  isStarFlow?: boolean;
}
interface subjects {
  name: string;
  lessons: number;
  time: string;
  progress: string;
  progressPercent: number;
  color: string;
  icon: string;
}
// src/app/data/subjects.data.ts

// export const SUBJECTS_DATA: SubjectCard[] = [
//   {
//     name: 'Biology',
//     duration: '130ms',
//     lessons: 10,
//     progress: 'Not started',
//   },
//   {
//     name: 'Mathematics',
//     duration: '200ms',
//     lessons: 10,
//     progress: 'Not started',
//   },
//   {
//     name: 'English',
//     duration: '140ms',
//     lessons: 1,
//     progress: 'Not started',
//   },
//   {
//     name: 'Physics',
//     duration: '21ms',
//     lessons: 10,
//     progress: 'In progress',
//   },
//   {
//     name: 'Geography',
//     duration: '130ms',
//     lessons: 9,
//     progress: 'Not started',
//   },
//   {
//     name: 'Economics',
//     duration: '130ms',
//     lessons: 10,
//     progress: 'Completed',
//   },
//   {
//     name: 'Agric Science',
//     duration: '130ms',
//     lessons: 9,
//     progress: 'Not started',
//   },
//   {
//     name: 'Chemistry',
//     duration: '100ms',
//     lessons: 10,
//     progress: 'In progress',
//   },
// ];

export const SUBJECTS_DATA: subjects[] = [
  {
    name: 'Biology',
    lessons: 12,
    time: '1.30hrs',
    progress: 'Not started',
    progressPercent: 10,
    color: 'bg-[#591239]',
    icon: '🧬',
  },
  {
    name: 'Mathematics',
    lessons: 16,
    time: '2.00hrs',
    progress: 'In progress',
    progressPercent: 35,
    color: 'bg-[#DB734C]',
    icon: '➗',
  },
  {
    name: 'English',
    lessons: 13,
    time: '1.50hrs',
    progress: 'Completed',
    progressPercent: 100,
    color: 'bg-[#3250FF]',
    icon: '📘',
  },
  // ... other subjects
];
