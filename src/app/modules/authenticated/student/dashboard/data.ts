interface Stats {
  title: string;
  count: number;
  icon: string;
  subjects: string[];
}
interface ExamBoard {
  logo: string;
  name: string;
  level: string;
  school: string;
  subjects: string[];
}

interface SubjectProgress {
  subject: string;
  category: string;
  started: string;
  progress: number;
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
export const examBoards: ExamBoard[] = [
  {
    logo: 'assets/icons/jamb.svg',
    name: 'JAMB',
    level: 'Higher Learning',
    school: 'Sciences',
    subjects: [
      'Use Of English',
      'Physics',
      'Chemistry',
      'Mathematics',
      'Biology',
      'Agriculture',
      'Literature',
    ],
  },
  {
    logo: 'assets/icons/waec.svg',
    name: 'WAEC',
    level: 'Secondary Level',
    school: 'Sciences',
    subjects: [
      'Use Of English',
      'Physics',
      'Chemistry',
      'Mathematics',
      'Biology',
      'Agriculture',
      'Literature',
    ],
  },
  {
    logo: 'assets/icons/neco.svg',
    name: 'NECO',
    level: 'Secondary Level',
    school: 'Sciences',
    subjects: [
      'Use Of English',
      'Physics',
      'Chemistry',
      'Mathematics',
      'Biology',
      'Agriculture',
      'Literature',
    ],
  },
];

export const progressTableData: SubjectProgress[] = [
  {
    subject: 'BIOLOGY',
    category: 'JAMB/JIMBE CATEGORY',
    started: '02/10/2025',
    progress: 80,
  },
  {
    subject: 'PHYSICS',
    category: 'WAEC/NECO CATEGORY',
    started: '02/11/2025',
    progress: 50,
  },
  {
    subject: 'MATHEMATICS',
    category: 'WAEC/NECO CATEGORY',
    started: '03/04/2025',
    progress: 10,
  },
];
