export interface IContributionType{
    name: string;
    contributionList: IContributionList[]
}

export interface IContributionList{
    description: string;
    value?: number | null; 
    porcentege?: string | null; 
}