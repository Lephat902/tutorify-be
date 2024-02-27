import { QueueNames } from "../../enums";

export class FavoriteTutorDeletedEventPattern {
    readonly pattern: string = `${QueueNames.STUDENT_FAVORITE_TUTOR}.favorite-tutor-deleted`;
}

export class FavoriteTutorDeletedEventPayload {
    constructor(
        readonly studentId: string,
        readonly tutorId: string,
    ) { }
}

export class FavoriteTutorDeletedEvent {
    readonly pattern: FavoriteTutorDeletedEventPattern;

    constructor(
        readonly payload: FavoriteTutorDeletedEventPayload,
    ) {
        this.pattern = new FavoriteTutorDeletedEventPattern();
    }
}