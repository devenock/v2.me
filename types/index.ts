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