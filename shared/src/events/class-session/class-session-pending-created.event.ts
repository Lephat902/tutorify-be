import { QueueNames } from "../../enums";

export class ClassSessionPendingCreatedEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.class-session-created`;
}

export class ClassSessionPendingCreatedEventPayload {
    constructor(
        readonly createSessionTutorId: string,
        readonly classSessionId: string,
        readonly classId: string,
        readonly title: string,
        readonly createdAt: Date,
    ) { }
}

export class ClassSessionPendingCreatedEvent {
    readonly pattern: ClassSessionPendingCreatedEventPattern;

    constructor(
        readonly payload: ClassSessionPendingCreatedEventPayload,
    ) { 
        this.pattern = new ClassSessionPendingCreatedEventPattern();
    }
}