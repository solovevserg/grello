import { User } from "./user";

export interface Session {
    user: User;
    timestamp: Date;
    token: string;
}