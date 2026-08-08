export type ResearchPublication = {
  title: string;
  authors?: string[];
  journal?: string;
  conference?: string;
  date?: string;
  abstract?: string;
  doi?: string;
  paperUrl?: string;
  pdfUrl?: string;
  keywords?: string[];
};

export type ResearchInterest = {
  name: string;
  description?: string;
  featured?: boolean;
};
