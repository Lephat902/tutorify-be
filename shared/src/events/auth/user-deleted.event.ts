import { UserRole } from "../../enums";

export class UserDeletedEventPattern {
    readonly pattern: string = 'auth.user-deleted';
}

export class UserDeletedEventPayload {
    constructor(
        readonly userId: string,
        readonly role: UserRole,
    ) { }
}

export class UserDeletedEvent {
    readonly pattern: UserDeletedEventPattern;

    constructor(
        readonly payload: UserDeletedEventPayload,
    ) { 
        this.pattern = new UserDeletedEventPattern();
    }
}
