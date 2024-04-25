import { QueueNames } from "../../enums";

export class ClassSessionDeletedEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.class-session-deleted`;
}

export class ClassSessionDeletedEventPayload {
    constructor(
        readonly classSessionId: string,
        readonly classId: string,
        readonly title: string,
        readonly startDatetime: Date,
        readonly endDatetime: Date,
        readonly updatedAt: Date,
    ) { }
}

export class ClassSessionDeletedEvent {
    readonly pattern: ClassSessionDeletedEventPattern;

    constructor(
        readonly payload: ClassSessionDeletedEventPayload,
    ) { 
        this.pattern = new ClassSessionDeletedEventPattern();
    }
}
