import { QueueNames } from "../../enums";

export class MultipleClassSessionsCreatedEventPattern {
    readonly pattern: string = `${QueueNames.CLASS_SESSION}.mutiple-class-sessions-created`;
}

export class MultipleClassSessionsCreatedEventPayload {
    constructor(
	readonly createSessionTutorId: string,
        readonly classSessionIds: string[],
        readonly classId: string,
    ) { }
}

export class MultipleClassSessionsCreatedEvent {
    readonly pattern: MultipleClassSessionsCreatedEventPattern;

    constructor(
        readonly payload: MultipleClassSessionsCreatedEventPayload,
    ) { 
        this.pattern = new MultipleClassSessionsCreatedEventPattern();
    }
}
