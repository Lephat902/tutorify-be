import { QueueNames } from "../../enums";

export class ClassSessionUpdatedEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.class-session-updated`;
}

export class ClassSessionUpdatedEventPayload {
    constructor(
        readonly updateSessionTutorId: string,
        readonly classSessionId: string,
        readonly updatedAt: Date,
        readonly address: string,
        readonly wardId: string,
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