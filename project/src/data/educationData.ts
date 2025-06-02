export interface EducationEntry {
  id: number;
  degree: string;
  institution: string;
  year: string;
  details?: string; // Optional details
}

export const educationData: EducationEntry[] = [
  {
    id: 1,
    degree: 'B.Sc. in Computer Science',
    institution: 'University of Technology',
    year: '2018 - 2022',
    details: 'Graduated with honors, focusing on software development and AI.'
  },
  {
    id: 2,
    degree: 'M.Sc. in Advanced Computing',
    institution: 'Institute of Advanced Studies',
    year: '2022 - 2024',
    details: 'Specialized in machine learning and data science projects.'
  },
  // Add more placeholder entries if you wish, or instruct the user to do so.
];
