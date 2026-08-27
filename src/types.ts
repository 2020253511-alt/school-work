export interface StudentMember {
  id: string;
  name: string;
  studentId: string;
  role: string;
  isLeader: boolean;
  photoUrl: string;
  bio: string;
  responsibilities: string[];
  resume: {
    education: string;
    skills: string[];
    coursework: string[];
    projectContributions: string;
    contactEmail: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'core' | 'additional';
  description: string;
  iconName: string;
  details?: string;
}

export interface SystemTool {
  id: string;
  name: string;
  type: 'Desktop Program' | 'Web-Based Tool';
  targetUsers: string;
  purpose: string;
  dataHandled: string[];
  status: string;
  iconName: string;
}

export interface BusinessObjective {
  id: string;
  number: number;
  name: string;
  definition: string;
  howPBLUses: string;
  specificExample: string;
  impact: 'ENHANCED';
  iconName: string;
}

export interface ProjectMetadata {
  courseName: string;
  courseCode: string;
  courseYear: number;
  groupName: string;
  groupLeaderName: string;
  lecturerName: string;
  lecturerEmail: string;
  institutionName: string;
  institutionShort: string;
  academicTerm: string;
  websiteCreatedDate: string;
  organizationName: string;
  organizationShort: string;
  organizationType: string;
  systemName: string;
  systemShort: string;
  mission?: string;
  vision?: string;
}
