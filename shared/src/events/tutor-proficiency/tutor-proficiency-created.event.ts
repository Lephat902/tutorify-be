import { QueueNames } from "../../enums";

export class TutorProficiencyCreatedEventPattern {
    readonly pattern: string = `${QueueNames.USER_PREFERENCES}.tutor-proficiency-created`;
}

export class TutorProficiencyCreatedEventPayload {
    constructor(
        readonly tutorId: string,
        readonly classCategoryId: string,
    ) { }
}

export class TutorProficiencyCreatedEvent {
    readonly pattern: TutorProficiencyCreatedEventPattern;

    constructor(
        readonly payload: TutorProficiencyCreatedEventPayload,
    ) {
        this.pattern = new TutorProficiencyCreatedEventPattern();
    }
}
