export interface ISkillListItem {
  title: string;
  items: ISkillItem[];
}

export enum SkillLevel {
  Expert,
  Intermediate,
  Begginer,
}

export interface ISkillItem {
  title: string;
  level?: SkillLevel;
  icon?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    youtube?: string;
    whatsapp?: string;
    uber?: string;
    medium?: string;
  };
}
