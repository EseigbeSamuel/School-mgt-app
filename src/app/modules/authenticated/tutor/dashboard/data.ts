export type NavItemsType = {
  title: string;
  value: number;
  growthRate: number;
  icon: string;
  type: string;
};

interface ratings {
  name: string;
  date: string;
  review: string;
  score: number;
}
interface SubjectTag {
  name: string;
  color: 'red' | 'blue' | 'green';
}
interface tutors {
  name: string;
  subjects: SubjectTag[];
}
interface ChatEntry {
  name: string;
  role: string;
  timestamp: string;
  isOnline: boolean;
}

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

export const ratings: ratings[] = [
  {
    name: 'Adetokunbo Ademola',
    date: 'Feb 07, 2025',
    review: 'I enjoyed every bit of my time on his course',
    score: 40,
  },
  {
    name: 'Oluwaseun Tofunmi',
    date: 'Feb 07, 2025',
    review: 'I enjoyed every bit of my time on his course',
    score: 40,
  },
  {
    name: 'Sarah Williams',
    date: 'Feb 07, 2025',
    review: 'I enjoyed every bit of my time on his course',
    score: 40,
  },
];

export const tutors: tutors[] = [
  {
    name: 'Benjamin Adeleke',
    subjects: [
      { name: 'Jamb', color: 'red' },
      { name: 'Wace', color: 'blue' },
      { name: 'Neco', color: 'green' },
    ],
  },
  {
    name: 'Grace Eze',
    subjects: [
      { name: 'Neco', color: 'green' },
      { name: 'WAEC', color: 'blue' },
    ],
  },
  {
    name: 'Grace Eze',
    subjects: [
      { name: 'Neco', color: 'green' },
      { name: 'WAEC', color: 'blue' },
    ],
  },
  {
    name: 'Grace Eze',
    subjects: [
      { name: 'Neco', color: 'green' },
      { name: 'WAEC', color: 'blue' },
    ],
  },
  {
    name: 'Grace Eze',
    subjects: [
      { name: 'Neco', color: 'green' },
      { name: 'WAEC', color: 'blue' },
    ],
  },
];
export const chats: ChatEntry[] = [
  {
    name: 'Benjamin Adeleke',
    role: 'WACE STUDENT',
    timestamp: 'just now',
    isOnline: true,
  },
  {
    name: 'Grace Johnson',
    role: 'JAMB STUDENT',
    timestamp: '2 mins ago',
    isOnline: false,
  },
  {
    name: 'Michael Obi',
    role: 'NECO STUDENT',
    timestamp: '10 mins ago',
    isOnline: true,
  },
  {
    name: 'Michael Obi',
    role: 'NECO STUDENT',
    timestamp: '10 mins ago',
    isOnline: true,
  },
  {
    name: 'Michael Obi',
    role: 'NECO STUDENT',
    timestamp: '10 mins ago',
    isOnline: true,
  },
];
