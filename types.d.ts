export interface IUser {
    id: number;
    name: string;
    username: string
}

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}