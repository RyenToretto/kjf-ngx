export interface PersonTestType {
    name: string;
    age?: number;
}

export interface GitMember {
    id: string | number;
    login: string;
    avatar_url?: string;
}

export interface TestOutputEvent {
    text: string
}
