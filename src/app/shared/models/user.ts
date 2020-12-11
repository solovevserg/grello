import { UserConfig } from "./user-config";

export interface User {
    id: number,
    name: string,
    avatarBase64: string,
    config?: UserConfig
}