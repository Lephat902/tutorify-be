import { FileUploadResponseDto, StoredLocation } from "../../dtos";
import { Gender, UserRole } from "../../enums";

export class UserUpdatedEventPattern {
    readonly pattern: string = 'auth.user-updated';
}

export class UserUpdatedEventPayload {
    constructor(
        readonly userId: string,
        readonly username: string,
        readonly email: string,
        readonly gender: Gender,
        readonly firstName: string,
        readonly middleName: string,
        readonly lastName: string,
        readonly role: UserRole,
        readonly avatar: FileUploadResponseDto,
        readonly location: StoredLocation,
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