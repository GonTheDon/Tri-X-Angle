export enum AccessLevel {
  PUBLIC = 'PUBLIC',
  MASS = 'MASS',
  MOTHER = 'MOTHER'
}

export interface BusinessEntity {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  restricted: boolean;
  color: string;
  iconName: string;
  // Expanded Data
  longDescription?: string;
  problemStatement?: string;
  solutionPhilosophy?: string;
  capabilitiesDetail?: { title: string; desc: string }[];
  activeProjects?: { title: string; status: string }[];
}

export interface NavItem {
  label: string;
  path: string;
  requiredAccess: AccessLevel;
}

export interface KnowledgeItem {
  category: string;
  title: string;
  preview: string;
  locked: boolean;
}