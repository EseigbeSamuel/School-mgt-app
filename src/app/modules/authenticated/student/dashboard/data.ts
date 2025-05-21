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
    logo: 'assets/images/jamb.png',
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
    logo: 'assets/images/waec.png',
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
    logo: 'assets/images/neco.png',
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
