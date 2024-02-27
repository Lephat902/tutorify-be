import { LoginStatus } from "./enums";

export class UserLoggedInEventPattern {
    readonly pattern: string = 'auth.user-logged-in';
}

export class UserLoggedInEventPayload {
    constructor(
        readonly userId: string,
        readonly status: LoginStatus,
    ) { }
}

export class UserLoggedInEvent {
    readonly pattern: UserLoggedInEventPattern;

    constructor(
        readonly payload: UserLoggedInEventPayload,
    ) { 
        this.pattern = new UserLoggedInEventPattern();
    }
}