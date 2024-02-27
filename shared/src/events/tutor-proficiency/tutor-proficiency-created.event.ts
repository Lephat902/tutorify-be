import { QueueNames } from "../../enums";

export class TutorProficiencyCreatedEventPattern {
    readonly pattern: string = `${QueueNames.TUTOR_PROFICIENT_IN_CLASS_CATEGORY}.tutor-proficiency-created`;
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