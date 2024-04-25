import { StoredLocation } from "../../dtos";
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
        readonly location: StoredLocation,
        // Tutor-specific data
        public proficienciesIds?: string[],
        // Student-specific data
        public interestedClassCategoryIds?: string[],
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