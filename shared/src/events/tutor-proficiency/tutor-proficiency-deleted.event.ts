import { QueueNames } from "../../enums";

export class TutorProficiencyDeletedEventPattern {
    readonly pattern: string = `${QueueNames.TUTOR_PROFICIENT_IN_CLASS_CATEGORY}.tutor-proficiency-deleted`;
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