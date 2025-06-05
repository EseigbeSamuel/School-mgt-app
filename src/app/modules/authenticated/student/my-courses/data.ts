// export interface SubjectCard {
//   name: string;
//   duration?: string;
//   lessons?: number | string;
//   progress?: string;
//   isStarFlow?: boolean;
// }
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
  rating: number;
  courseTitle?: string;
  courseDescription?: string;
  courseContent?: string[];
  courseDuration?: number;
  topics?: any[];
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
    rating: 70,
    courseTitle: 'Introductory to Biology',
    courseDescription:
      'You are been thought the characteristics of living things,All living organisms share common traits, such as movement, respiration, growth, reproduction, excretion, and response to stimuli. levels of biological organization, and branches of biology.',
    courseContent: [
      `Characteristics of Living Things – Understand what makes an organism "alive" and the essential processes like respiration, growth, and reproduction.`,
      `The  Cell as the Basic Unit of Life – Learn about the structure and function of cells, including the differences between plant and animal cells.`,
      `Levels of Biological Organization – Explore how life is organized from cells to ecosystems and how different organisms interact.`,
      ` Classification of Living Organisms – Discover how scientists group organisms based on similarities and the importance of taxonomy.`,
      `️Branches of Biology – Gain insights into fields like Botany (plants), Zoology (animals), Microbiology (microorganisms), and Ecology (ecosystems).`,
      `The Role of Biology in Everyday Life – Learn how biology applies to medicine, agriculture, genetics, biotechnology, and environmental conservation.`,
    ],
    courseDuration: 10,
    topics: [
      {
        id: 1,
        title: 'Introductory to Biology',
        lectures: 1,
        duration: '10mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 2,
        title: 'Classification of Living Things',
        lectures: 2,
        duration: '40mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 3,
        title: 'The cell and it’s function',
        lectures: 2,
        duration: '24mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 4,
        title: 'Ecology and Ecosystem',
        lectures: 2,
        duration: '32mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 5,
        title: 'Genetics and Hereditary',
        lectures: 2,
        duration: '18mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 6,
        title: 'Reproduction in Living things',
        lectures: 3,
        duration: '32mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 7,
        title: 'Nutrition and Digestion',
        lectures: 2,
        duration: '21mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 8,
        title: 'Evolution and Adaptation',
        lectures: 2,
        duration: '20mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
    ],
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
    rating: 10,
    courseTitle: 'Introductory to Biology',
    courseDescription:
      'You are been thought the characteristics of living things,All living organisms share common traits, such as movement, respiration, growth, reproduction, excretion, and response to stimuli. levels of biological organization, and branches of biology.',
    courseContent: [
      `Characteristics of Living Things – Understand what makes an organism "alive" and the essential processes like respiration, growth, and reproduction.`,
      `The  Cell as the Basic Unit of Life – Learn about the structure and function of cells, including the differences between plant and animal cells.`,
      `Levels of Biological Organization – Explore how life is organized from cells to ecosystems and how different organisms interact.`,
      ` Classification of Living Organisms – Discover how scientists group organisms based on similarities and the importance of taxonomy.`,
      `️Branches of Biology – Gain insights into fields like Botany (plants), Zoology (animals), Microbiology (microorganisms), and Ecology (ecosystems).`,
      `The Role of Biology in Everyday Life – Learn how biology applies to medicine, agriculture, genetics, biotechnology, and environmental conservation.`,
    ],
    courseDuration: 10,
    topics: [
      {
        id: 1,
        title: 'Introductory to Biology',
        lectures: 1,
        duration: '10mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 2,
        title: 'Classification of Living Things',
        lectures: 2,
        duration: '40mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 3,
        title: 'The cell and it’s function',
        lectures: 2,
        duration: '24mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 4,
        title: 'Ecology and Ecosystem',
        lectures: 2,
        duration: '32mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 5,
        title: 'Genetics and Hereditary',
        lectures: 2,
        duration: '18mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 6,
        title: 'Reproduction in Living things',
        lectures: 3,
        duration: '32mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 7,
        title: 'Nutrition and Digestion',
        lectures: 2,
        duration: '21mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 8,
        title: 'Evolution and Adaptation',
        lectures: 2,
        duration: '20mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
    ],
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
    rating: 40,
    courseTitle: 'Introductory to Biology',
    courseDescription:
      'You are been thought the characteristics of living things,All living organisms share common traits, such as movement, respiration, growth, reproduction, excretion, and response to stimuli. levels of biological organization, and branches of biology.',
    courseContent: [
      `Characteristics of Living Things – Understand what makes an organism "alive" and the essential processes like respiration, growth, and reproduction.`,
      `The  Cell as the Basic Unit of Life – Learn about the structure and function of cells, including the differences between plant and animal cells.`,
      `Levels of Biological Organization – Explore how life is organized from cells to ecosystems and how different organisms interact.`,
      ` Classification of Living Organisms – Discover how scientists group organisms based on similarities and the importance of taxonomy.`,
      `️Branches of Biology – Gain insights into fields like Botany (plants), Zoology (animals), Microbiology (microorganisms), and Ecology (ecosystems).`,
      `The Role of Biology in Everyday Life – Learn how biology applies to medicine, agriculture, genetics, biotechnology, and environmental conservation.`,
    ],
    courseDuration: 10,
    topics: [
      {
        id: 1,
        title: 'Introductory to Biology',
        lectures: 1,
        duration: '10mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 2,
        title: 'Classification of Living Things',
        lectures: 2,
        duration: '40mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 3,
        title: 'The cell and it’s function',
        lectures: 2,
        duration: '24mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 4,
        title: 'Ecology and Ecosystem',
        lectures: 2,
        duration: '32mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 5,
        title: 'Genetics and Hereditary',
        lectures: 2,
        duration: '18mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 6,
        title: 'Reproduction in Living things',
        lectures: 3,
        duration: '32mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 7,
        title: 'Nutrition and Digestion',
        lectures: 2,
        duration: '21mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 8,
        title: 'Evolution and Adaptation',
        lectures: 2,
        duration: '20mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
    ],
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
    rating: 80,
    courseTitle: 'Introductory to Biology',
    courseDescription:
      'You are been thought the characteristics of living things,All living organisms share common traits, such as movement, respiration, growth, reproduction, excretion, and response to stimuli. levels of biological organization, and branches of biology.',
    courseContent: [
      `Characteristics of Living Things – Understand what makes an organism "alive" and the essential processes like respiration, growth, and reproduction.`,
      `The  Cell as the Basic Unit of Life – Learn about the structure and function of cells, including the differences between plant and animal cells.`,
      `Levels of Biological Organization – Explore how life is organized from cells to ecosystems and how different organisms interact.`,
      ` Classification of Living Organisms – Discover how scientists group organisms based on similarities and the importance of taxonomy.`,
      `️Branches of Biology – Gain insights into fields like Botany (plants), Zoology (animals), Microbiology (microorganisms), and Ecology (ecosystems).`,
      `The Role of Biology in Everyday Life – Learn how biology applies to medicine, agriculture, genetics, biotechnology, and environmental conservation.`,
    ],
    courseDuration: 10,
    topics: [
      {
        id: 1,
        title: 'Introductory to Biology',
        lectures: 1,
        duration: '10mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 2,
        title: 'Classification of Living Things',
        lectures: 2,
        duration: '40mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 3,
        title: 'The cell and it’s function',
        lectures: 2,
        duration: '24mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 4,
        title: 'Ecology and Ecosystem',
        lectures: 2,
        duration: '32mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 5,
        title: 'Genetics and Hereditary',
        lectures: 2,
        duration: '18mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 6,
        title: 'Reproduction in Living things',
        lectures: 3,
        duration: '32mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 7,
        title: 'Nutrition and Digestion',
        lectures: 2,
        duration: '21mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 8,
        title: 'Evolution and Adaptation',
        lectures: 2,
        duration: '20mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
    ],
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
    rating: 30,
    courseTitle: 'Introductory to Biology',
    courseDescription:
      'You are been thought the characteristics of living things,All living organisms share common traits, such as movement, respiration, growth, reproduction, excretion, and response to stimuli. levels of biological organization, and branches of biology.',
    courseContent: [
      `Characteristics of Living Things – Understand what makes an organism "alive" and the essential processes like respiration, growth, and reproduction.`,
      `The  Cell as the Basic Unit of Life – Learn about the structure and function of cells, including the differences between plant and animal cells.`,
      `Levels of Biological Organization – Explore how life is organized from cells to ecosystems and how different organisms interact.`,
      ` Classification of Living Organisms – Discover how scientists group organisms based on similarities and the importance of taxonomy.`,
      `️Branches of Biology – Gain insights into fields like Botany (plants), Zoology (animals), Microbiology (microorganisms), and Ecology (ecosystems).`,
      `The Role of Biology in Everyday Life – Learn how biology applies to medicine, agriculture, genetics, biotechnology, and environmental conservation.`,
    ],
    courseDuration: 10,
    topics: [
      {
        id: 1,
        title: 'Introductory to Biology',
        lectures: 1,
        duration: '10mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 2,
        title: 'Classification of Living Things',
        lectures: 2,
        duration: '40mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 3,
        title: 'The cell and it’s function',
        lectures: 2,
        duration: '24mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 4,
        title: 'Ecology and Ecosystem',
        lectures: 2,
        duration: '32mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 5,
        title: 'Genetics and Hereditary',
        lectures: 2,
        duration: '18mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 6,
        title: 'Reproduction in Living things',
        lectures: 3,
        duration: '32mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 7,
        title: 'Nutrition and Digestion',
        lectures: 2,
        duration: '21mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
      {
        id: 8,
        title: 'Evolution and Adaptation',
        lectures: 2,
        duration: '20mins',
        description:
          'You are been thought the characteristics of living things, All living organisms share common traits, such as movement, respiration, growth, reproduction...',
      },
    ],
  },
];

// export const courseContent: courseContentInterface[] = [
//   {
//     courseTitle: 'Introductory to Biology',
//     courseDescription:
//       'You are been thought the characteristics of living things,All living organisms share common traits, such as movement, respiration, growth, reproduction, excretion, and response to stimuli. levels of biological organization, and branches of biology.',
//     courseContent: [
//       `Characteristics of Living Things – Understand what makes an organism "alive" and the essential processes like respiration, growth, and reproduction.`,
//       `The  Cell as the Basic Unit of Life – Learn about the structure and function of cells, including the differences between plant and animal cells.`,
//       `Levels of Biological Organization – Explore how life is organized from cells to ecosystems and how different organisms interact.`,
//       ` Classification of Living Organisms – Discover how scientists group organisms based on similarities and the importance of taxonomy.`,
//       `️Branches of Biology – Gain insights into fields like Botany (plants), Zoology (animals), Microbiology (microorganisms), and Ecology (ecosystems).`,
//       `The Role of Biology in Everyday Life – Learn how biology applies to medicine, agriculture, genetics, biotechnology, and environmental conservation.`,
//     ],
//     courseDuration: 10,
//   },
// ];
