import { QueueNames } from "../../enums";

export class MultiClassSessionsCreatedEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.multiple-class-sessions-created`;
}

export class MultiClassSessionsCreatedEventPayload {
    constructor(
        readonly classSessionId: string,
        readonly tutorId: string,
        readonly classId: string,
        readonly sessionsDetails: {
            readonly title: string,
            readonly startDatetime: Date,
            readonly endDatetime: Date,
        }[],
        readonly createdAt: Date,
    ) { }
}

export class MultiClassSessionsCreatedEvent {
    readonly pattern: MultiClassSessionsCreatedEventPattern;

    constructor(
        readonly payload: MultiClassSessionsCreatedEventPayload,
    ) {
        this.pattern = new MultiClassSessionsCreatedEventPattern();
    }
}