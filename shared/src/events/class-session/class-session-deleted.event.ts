import { QueueNames } from "../../enums";

export class ClassSessionDeletedEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.class-session-deleted`;
}

export class ClassSessionDeletedEventPayload {
    constructor(
        readonly deleteSessionTutorId: string,
        readonly classSessionId: string,
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
