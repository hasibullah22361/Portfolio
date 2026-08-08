export type Education = {
  degree: string;
  institution: string;
  field?: string;
  startDate: string;
  endDate?: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  description?: string;
  coursework?: string[];
  achievements?: string[];
  thesis?: string;
  institutionUrl?: string;
};
