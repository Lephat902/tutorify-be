import { UserRole } from "../../enums";

export class UserUpdatedEventPattern {
    readonly pattern: string = 'auth.user-updated';
}

export class UserUpdatedEventPayload {
    constructor(
        readonly userId: string,
        readonly username: string,
        readonly email: string,
        readonly firstName: string,
        readonly lastName: string,
        readonly role: UserRole,
        // Tutor-specific data
        readonly proficienciesIds?: string[],
        // Student-specific data
        readonly interestedClassCategoryIds?: string[],
    ) { }
}

export class UserUpdatedEvent {
    readonly pattern: UserUpdatedEventPattern;

    constructor(
        readonly payload: UserUpdatedEventPayload,
    ) {
        this.pattern = new UserUpdatedEventPattern();
    }
}