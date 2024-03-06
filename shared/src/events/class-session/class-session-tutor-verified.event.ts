import { QueueNames } from "../../enums";

export class ClassSessionTutorVerifiedEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.class-session-tutor-verified`;
}

export class ClassSessionTutorVerifiedEventPayload {
    constructor(
        readonly classSessionId: string,
        readonly isValidTutor: boolean,
    ) { }
}

export class ClassSessionTutorVerifiedEvent {
    readonly pattern: ClassSessionTutorVerifiedEventPattern;

    constructor(
        readonly payload: ClassSessionTutorVerifiedEventPayload,
    ) { 
        this.pattern = new ClassSessionTutorVerifiedEventPattern();
    }
}
