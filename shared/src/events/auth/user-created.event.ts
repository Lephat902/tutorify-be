import { UserRole } from "../../enums";

export class UserCreatedEventPattern {
    readonly pattern: string = 'auth.user-created';
}

export class UserCreatedEventPayload {
    constructor(
        readonly userId: string,
        readonly username: string,
        readonly email: string,
        readonly firstName: string,
        readonly lastName: string,
        readonly role: UserRole,
        // Tutor-specifc data
        readonly proficienciesIds?: string[],
    ) { }
}

export class UserCreatedEvent {
    readonly pattern: UserCreatedEventPattern;

    constructor(
        readonly payload: UserCreatedEventPayload,
    ) { 
        this.pattern = new UserCreatedEventPattern();
    }
}