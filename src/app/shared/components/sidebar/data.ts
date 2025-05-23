export type NavItemsType = {
  name: string;
  label: string;
  link: string;
  icon: string;
  role: string[];
  mobile?: string;
};

export const navItems = [
  {
    name: 'dashboard',
    label: 'Dashboard',
    link: '/student',
    icon: 'home',
    role: ['student'],
    mobile: 'Home',
  },
  {
    name: 'courses',
    label: 'My courses',
    link: '/student/courses',
    icon: 'courses',
    role: ['student'],
    mobile: 'Classes',
  },
  {
    name: 'assessments',
    label: 'Assessments and quizzes',
    link: '/student/assessments',
    icon: 'assessments',
    role: ['student'],
    mobile: 'Assessments',
  },
  {
    name: 'mock-exams',
    label: 'Mock Exams',
    link: '/student/mock-exams',
    icon: 'mock-exams',
    role: ['student'],
  },
  {
    name: 'personal-sessions',
    label: 'Personal Sessions',
    link: '/student/personal-sessions',
    icon: 'sessions',
    role: ['student'],
  },
  {
    name: 'achievements',
    label: 'Achievements',
    link: '/student/achievements',
    icon: 'achievements',
    role: ['student'],
  },
  {
    name: 'messages',
    label: 'Messages',
    link: '/student/messages',
    icon: 'messages',
    role: ['student'],
    mobile: 'Messages',
  },
  {
    name: 'profile',
    label: 'Profile',
    link: '/student/profile',
    icon: 'profile',
    role: ['student'],
    mobile: 'Profile',
  },
  {
    name: 'dashboard',
    label: 'Home',
    link: '/tutor',
    icon: 'home',
    role: ['tutor'],
  },
  {
    name: 'my-sessions',
    label: 'My sessions',
    link: '/tutor/my-sessions',
    icon: 'my-sessions',
    role: ['tutor'],
  },
  {
    name: 'my-courses',
    label: 'My Courses',
    link: '/tutor/my-courses',
    icon: 'courses',
    role: ['tutor'],
  },
  {
    name: 'students',
    label: 'Students',
    link: '/tutor/students',
    icon: 'students',
    role: ['tutor'],
  },
  {
    name: 'resources',
    label: 'Resources',
    link: '/tutor/resources',
    icon: 'resources',
    role: ['tutor'],
  },
  {
    name: 'one-on-one',
    label: 'One on one',
    link: '/tutor/one-on-one',
    icon: 'one-on-one',
    role: ['tutor'],
  },
  {
    name: 'earnings',
    label: 'Earnings',
    link: '/tutor/earnings',
    icon: 'earnings',
    role: ['tutor'],
  },
  {
    name: 'messaging',
    label: 'Messaging',
    link: '/tutor/messaging',
    icon: 'messaging',
    role: ['tutor'],
  },
];
