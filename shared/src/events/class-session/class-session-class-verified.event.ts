import { QueueNames } from "../../enums";

export class ClassSessionClassVerifiedEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.class-session-class-verified`;
}

export class ClassSessionClassVerifiedEventPayload {
    constructor(
        readonly classSessionId: string,
        readonly isValidClass: boolean,
    ) { }
}

export class ClassSessionClassVerifiedEvent {
    readonly pattern: ClassSessionClassVerifiedEventPattern;

    constructor(
        readonly payload: ClassSessionClassVerifiedEventPayload,
    ) { 
        this.pattern = new ClassSessionClassVerifiedEventPattern();
    }
}
