import { QueueNames } from "../../enums";

export class FavoriteTutorCreatedEventPattern {
    readonly pattern: string = `${QueueNames.STUDENT_FAVORITE_TUTOR}.favorite-tutor-created`;
}

export class FavoriteTutorCreatedEventPayload {
    constructor(
        readonly studentId: string,
        readonly tutorId: string,
    ) { }
}

export class FavoriteTutorCreatedEvent {
    readonly pattern: FavoriteTutorCreatedEventPattern;

    constructor(
        readonly payload: FavoriteTutorCreatedEventPayload,
    ) {
        this.pattern = new FavoriteTutorCreatedEventPattern();
    }
}