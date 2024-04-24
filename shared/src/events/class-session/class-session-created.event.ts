import { QueueNames } from "../../enums";

export class ClassSessionCreatedEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.class-session-created`;
}

export class ClassSessionCreatedEventPayload {
    constructor(
        readonly classSessionId: string,
        readonly title: string,
        readonly startDatetime: Date,
        readonly endDatetime: Date,
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