import { QueueNames } from "../../enums";

export class TutorProficiencyDeletedEventPattern {
    readonly pattern: string = `${QueueNames.USER_PREFERENCES}.tutor-proficiency-deleted`;
}

export class TutorProficiencyDeletedEventPayload {
    constructor(
        readonly tutorId: string,
        readonly classCategoryId: string,
    ) { }
}

export class TutorProficiencyDeletedEvent {
    readonly pattern: TutorProficiencyDeletedEventPattern;

    constructor(
        readonly payload: TutorProficiencyDeletedEventPayload,
    ) {
        this.pattern = new TutorProficiencyDeletedEventPattern();
    }
}
