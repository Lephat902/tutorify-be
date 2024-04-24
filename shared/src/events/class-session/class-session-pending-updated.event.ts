import { QueueNames } from "../../enums";

export class ClassSessionPendingUpdatedEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.class-session-updated`;
}

export class ClassSessionPendingUpdatedEventPayload {
    constructor(
        readonly updateSessionTutorId: string,
        readonly classId: string,
        readonly classSessionId: string,
        readonly updatedAt: Date,
    ) { }
}

export class ClassSessionPendingUpdatedEvent {
    readonly pattern: ClassSessionPendingUpdatedEventPattern;

    constructor(
        readonly payload: ClassSessionPendingUpdatedEventPayload,
    ) {
        this.pattern = new ClassSessionPendingUpdatedEventPattern();
    }
}
