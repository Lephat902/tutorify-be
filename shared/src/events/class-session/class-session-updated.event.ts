import { QueueNames } from "../../enums";

export class ClassSessionUpdatedEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.class-session-updated`;
}

export class ClassSessionUpdatedEventPayload {
    constructor(
        readonly classSessionId: string,
        readonly title: string,
        readonly startDatetime: Date,
        readonly endDatetime: Date,
        readonly isCancelled: boolean,
        readonly updatedAt: Date,
    ) { }
}

export class ClassSessionUpdatedEvent {
    readonly pattern: ClassSessionUpdatedEventPattern;

    constructor(
        readonly payload: ClassSessionUpdatedEventPayload,
    ) {
        this.pattern = new ClassSessionUpdatedEventPattern();
    }
}
