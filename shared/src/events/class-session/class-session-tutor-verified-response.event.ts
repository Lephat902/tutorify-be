import { QueueNames } from "../../enums";

export class ClassSessionTutorVerifiedResponseEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.class-session-tutor-verified`;
}

export class ClassSessionTutorVerifiedResponseEventPayload {
    constructor(
        readonly classSessionId: string,
        readonly isValidTutor: boolean,
    ) { }
}

export class ClassSessionTutorVerifiedResponseEvent {
    readonly pattern: ClassSessionTutorVerifiedResponseEventPattern;

    constructor(
        readonly payload: ClassSessionTutorVerifiedResponseEventPayload,
    ) { 
        this.pattern = new ClassSessionTutorVerifiedResponseEventPattern();
    }
}
