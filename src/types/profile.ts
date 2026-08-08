export type SocialLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type Profile = {
  name: string;
  headline: string;
  shortBio: string;
  longBio: string;
  profileImage: string;
  profileImageAvailable: boolean;
  avatarImage: string | null;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  resume: string;
  availability: string;
  researchInterests: string[];
  primaryAreas: string[];
  socialLinks: SocialLink[];
};
