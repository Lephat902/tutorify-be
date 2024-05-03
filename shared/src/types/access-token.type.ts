import { UserRole } from "../enums";

export type AccessToken = {
    readonly email: string;
    readonly exp: number;
    readonly iat: number;
    readonly id: string;
    readonly iss: number;
    readonly type: TokenType;
    readonly roles: UserRole[];
}

export enum TokenType {
    CLIENT,
    SYSTEM,
}