interface StudentRow {
  name: string;
  email: string;
  phone: string;
  lessonType: string;
  duration: string;
  status: 'Active' | 'Completed' | 'Canceled';
  addedDate: string;
}
interface sessionsRow {
  name: string;
  email: string;
  phone: string;
  lessonType: string;
  duration: string;
  status: 'Active' | 'Completed' | 'Canceled';
  oldDate: string;
  newDate: string;
  date: string;
  time: string;
  exam: string;
  subject: string;
  rating: number;
}

export const students: StudentRow[] = [
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: 'WACE Class',
    duration: '1Hr 30Mins',
    status: 'Completed',
    addedDate: '22 Apr, 2024',
  },
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: 'WACE Class',
    duration: '1Hr 30Mins',
    status: 'Canceled',
    addedDate: '22 Apr, 2024',
  },
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: 'WACE Class',
    duration: '1Hr 30Mins',
    status: 'Active',
    addedDate: '22 Apr, 2024',
  },
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: 'WACE Class',
    duration: '1Hr 30Mins',
    status: 'Canceled',
    addedDate: '22 Apr, 2024',
  },
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: 'WACE Class',
    duration: '1Hr 30Mins',
    status: 'Canceled',
    addedDate: '22 Apr, 2024',
  },
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: 'WACE Class',
    duration: '1Hr 30Mins',
    status: 'Canceled',
    addedDate: '22 Apr, 2024',
  },
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: 'WACE Class',
    duration: '1Hr 30Mins',
    status: 'Active',
    addedDate: '22 Apr, 2024',
  },
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: 'WACE Class',
    duration: '1Hr 30Mins',
    status: 'Completed',
    addedDate: '22 Apr, 2024',
  },
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: 'WACE Class',
    duration: '1Hr 30Mins',
    status: 'Canceled',
    addedDate: '22 Apr, 2024',
  },
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: 'WACE Class',
    duration: '1Hr 30Mins',
    status: 'Completed',
    addedDate: '22 Apr, 2024',
  },
];

export const sessions: sessionsRow[] = [
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: '1-on-1',
    duration: '1Hr 30Mins',
    status: 'Completed',
    oldDate: '2,days ago',
    newDate: 'today',
    date: '17-08-2025',
    time: '2:00',
    exam: 'WAEC',
    subject: 'biology',
    rating: 5,
  },
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: '1-on-1',
    duration: '1Hr 30Mins',
    status: 'Completed',
    oldDate: '2,days ago',
    newDate: 'today',
    date: '17-08-2025',
    time: '2:00',
    exam: 'WAEC',
    subject: 'biology',
    rating: 5,
  },
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: '1-on-1',
    duration: '1Hr 30Mins',
    status: 'Completed',
    oldDate: '2,days ago',
    newDate: 'today',
    date: '17-08-2025',
    time: '2:00',
    exam: 'WAEC',
    subject: 'biology',
    rating: 5,
  },
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: '1-on-1',
    duration: '1Hr 30Mins',
    status: 'Completed',
    oldDate: '2,days ago',
    newDate: 'today',
    date: '17-08-2025',
    time: '2:00',
    exam: 'WAEC',
    subject: 'biology',
    rating: 5,
  },
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: '1-on-1',
    duration: '1Hr 30Mins',
    status: 'Completed',
    oldDate: '2,days ago',
    newDate: 'today',
    date: '17-08-2025',
    time: '2:00',
    exam: 'WAEC',
    subject: 'biology',
    rating: 5,
  },
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: '1-on-1',
    duration: '1Hr 30Mins',
    status: 'Completed',
    oldDate: '2,days ago',
    newDate: 'today',
    date: '17-08-2025',
    time: '2:00',
    exam: 'WAEC',
    subject: 'biology',
    rating: 5,
  },
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: '1-on-1',
    duration: '1Hr 30Mins',
    status: 'Completed',
    oldDate: '2,days ago',
    newDate: 'today',
    date: '17-08-2025',
    time: '2:00',
    exam: 'WAEC',
    subject: 'biology',
    rating: 5,
  },
  {
    name: 'Adetokunbo Ademola',
    email: 'example@gmail.com',
    phone: '07034797467',
    lessonType: '1-on-1',
    duration: '1Hr 30Mins',
    status: 'Completed',
    oldDate: '2,days ago',
    newDate: 'today',
    date: '17-08-2025',
    time: '2:00',
    exam: 'WAEC',
    subject: 'biology',
    rating: 5,
  },
];
