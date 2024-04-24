import { QueueNames } from "../../enums";

export class ClassSessionClassVerifiedResponseEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.class-session-class-verified`;
}

export class ClassSessionClassVerifiedResponseEventPayload {
    constructor(
        readonly classSessionId: string,
        readonly isValidClass: boolean,
    ) { }
}

export class ClassSessionClassVerifiedResponseEvent {
    readonly pattern: ClassSessionClassVerifiedResponseEventPattern;

    constructor(
        readonly payload: ClassSessionClassVerifiedResponseEventPayload,
    ) { 
        this.pattern = new ClassSessionClassVerifiedResponseEventPattern();
    }
}
