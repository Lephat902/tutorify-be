import { QueueNames } from "../../enums";

export class ClassSessionVerificationUpdatedEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.class-session-verification-updated`;
}

export class ClassSessionVerificationUpdatedEventPayload {
    constructor(
        readonly classSessionId: string,
    ) { }
}

export class ClassSessionVerificationUpdatedEvent {
    readonly pattern: ClassSessionVerificationUpdatedEventPattern;

    constructor(
        readonly payload: ClassSessionVerificationUpdatedEventPayload,
    ) { 
        this.pattern = new ClassSessionVerificationUpdatedEventPattern();
    }
}
