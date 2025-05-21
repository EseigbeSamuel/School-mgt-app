// src/app/models/subject.model.ts
export interface SubjectCard {
  name: string;
  duration?: string;
  lessons?: number | string;
  progress?: string;
  isStarFlow?: boolean;
}
// src/app/data/subjects.data.ts

export const SUBJECTS_DATA: SubjectCard[] = [
  {
    name: 'Biology',
    duration: '130ms',
    lessons: 10,
    progress: 'Not started',
  },
  {
    name: 'Mathematics',
    duration: '200ms',
    lessons: 10,
    progress: 'Not started',
  },
  {
    name: 'English',
    duration: '140ms',
    lessons: 1,
    progress: 'Not started',
  },
  {
    name: 'Physics',
    duration: '21ms',
    lessons: 10,
    progress: 'In progress',
  },
  {
    name: 'Geography',
    duration: '130ms',
    lessons: 9,
    progress: 'Not started',
  },
  {
    name: 'Economics',
    duration: '130ms',
    lessons: 10,
    progress: 'Completed',
  },
  {
    name: 'Agric Science',
    duration: '130ms',
    lessons: 9,
    progress: 'Not started',
  },
  {
    name: 'Chemistry',
    duration: '100ms',
    lessons: 10,
    progress: 'In progress',
  },
];
