import { QueueNames } from "../../enums";

export class ClassSessionCreatedEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.class-session-created`;
}

export class ClassSessionCreatedEventPayload {
    constructor(
        readonly createSessionTutorId: string,
        readonly classSessionId: string,
        readonly classId: string,
        readonly title: string,
        readonly createdAt: Date,
    ) { }
}

export class ClassSessionCreatedEvent {
    readonly pattern: ClassSessionCreatedEventPattern;

    constructor(
        readonly payload: ClassSessionCreatedEventPayload,
    ) { 
        this.pattern = new ClassSessionCreatedEventPattern();
    }
}