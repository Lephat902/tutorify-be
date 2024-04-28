import { StoredLocation } from "../../dtos";
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
        readonly middleName: string,
        readonly lastName: string,
        readonly role: UserRole,
        readonly location: StoredLocation,
        // Tutor-specific data
        readonly proficienciesIds?: string[],
        // Student-specific data
        readonly interestedClassCategoryIds?: string[],
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